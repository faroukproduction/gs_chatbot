/**
 * Great Spire Chatbot Widget
 * Main widget controller
 */

class GreatSpireChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.messageCount = 0; // Track number of user interactions
        this.init();
    }

    init() {
        this.injectStyles();
        this.createWidget();
        this.bindEvents();
        this.showWelcome();
    }

    injectStyles() {
        // Check if styles already loaded
        if (document.getElementById('gs-chatbot-styles')) return;

        const link = document.createElement('link');
        link.id = 'gs-chatbot-styles';
        link.rel = 'stylesheet';
        link.href = 'chatbot-widget.css';
        document.head.appendChild(link);
    }

    createWidget() {
        // Create floating button
        const button = document.createElement('button');
        button.className = 'gs-chatbot-button';
        button.setAttribute('aria-label', 'Open chat assistant');
        button.innerHTML = `
      <img class="logo-icon" src="logo.png" alt="Great Spire">
      <svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="white" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    `;

        // Create chat panel
        const panel = document.createElement('div');
        panel.className = 'gs-chatbot-panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Chat assistant');
        panel.innerHTML = `
      <div class="gs-chatbot-header">
        <div class="gs-chatbot-avatar">
          <img src="logo.png" alt="Great Spire">
        </div>
        <div class="gs-chatbot-info">
          <h3>Great Spire Assistant</h3>
          <p>Here to help you succeed</p>
        </div>
        <button class="gs-close-header" aria-label="Close chat">×</button>
      </div>
      <div class="gs-chatbot-messages" id="gs-messages" role="log" aria-live="polite"></div>
      <div class="gs-quick-replies" id="gs-quick-replies"></div>
      <div class="gs-chatbot-input-area">
        <div class="gs-chatbot-input-wrapper">
          <input type="text" class="gs-chatbot-input" id="gs-input" placeholder="Ask me anything..." aria-label="Type your message">
          <button class="gs-chatbot-send" id="gs-send" aria-label="Send message">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

        document.body.appendChild(button);
        document.body.appendChild(panel);

        this.button = button;
        this.panel = panel;
        this.closeHeaderBtn = panel.querySelector('.gs-close-header');
        this.messagesContainer = panel.querySelector('#gs-messages');
        this.quickRepliesContainer = panel.querySelector('#gs-quick-replies');
        this.input = panel.querySelector('#gs-input');
        this.sendButton = panel.querySelector('#gs-send');
    }

    bindEvents() {
        // Toggle chat
        this.button.addEventListener('click', () => this.toggle());

        // Header close button
        this.closeHeaderBtn.addEventListener('click', () => this.close());

        // Send message
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Track analytics
        this.trackEvent('widget_loaded');
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.isOpen = true;
        this.button.classList.add('open');
        this.panel.classList.add('open');
        this.input.focus();
        this.trackEvent('chat_opened');
    }

    close() {
        this.isOpen = false;
        this.button.classList.remove('open');
        this.panel.classList.remove('open');
        this.button.focus();
        this.trackEvent('chat_closed');
    }

    showWelcome() {
        // Add welcome message
        setTimeout(() => {
            this.addMessage(window.GreatSpireKB.welcomeMessage, 'bot');
            this.showQuickReplies();
        }, 500);
    }

    showQuickReplies(customReplies = null) {
        const replies = customReplies || this.getContextualReplies();
        this.quickRepliesContainer.innerHTML = '';

        replies.forEach(reply => {
            const chip = document.createElement('button');
            chip.className = 'gs-quick-reply';
            chip.textContent = reply.text;
            chip.addEventListener('click', () => {
                this.handleQuickReply(reply);
            });
            this.quickRepliesContainer.appendChild(chip);
        });
    }

    getContextualReplies() {
        // Check for page-specific prompts
        const context = window.GreatSpireKB.getContext();
        if (context && context.prompts) {
            return context.prompts;
        }
        return window.GreatSpireKB.quickReplies;
    }

    handleQuickReply(reply) {
        // Show user message
        this.addMessage(reply.text, 'user');

        // Hide quick replies permanently once conversation starts
        this.conversationStarted = true;
        this.quickRepliesContainer.innerHTML = '';
        this.quickRepliesContainer.style.display = 'none';

        // FULL LLM: Send to RAG backend instead of local JS intents
        this.processMessage(reply.text);

        this.trackEvent('quick_reply_clicked', { intent: reply.intent });
    }

    // Follow-up replies removed - quick replies only shown before conversation starts

    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        // Add user message
        this.addMessage(text, 'user');
        this.input.value = '';

        // Hide quick replies permanently once conversation starts
        this.conversationStarted = true;
        this.quickRepliesContainer.innerHTML = '';
        this.quickRepliesContainer.style.display = 'none';

        // Process and respond
        this.processMessage(text);
    }

    processMessage(text) {
        // Show typing indicator
        this.showTyping();

        // Try RAG backend first, fall back to local matching
        this.callRAGBackend(text)
            .then(response => {
                this.hideTyping();

                if (response.success && !response.fallback) {
                    // RAG response with sources
                    let answer = response.answer;

                    // Smart Footer Logic
                    this.messageCount++;

                    let footerHtml = '';

                    if (this.messageCount >= 3) {
                        // 3rd answer onwards: Contact Block (Gray heading, tight spacing)
                        footerHtml = `<small style="color: #6B6B8D; margin-top: 8px; padding-top: 8px; display: block; border-top: 1px solid rgba(125, 89, 217, 0.1); margin-bottom: -4px; padding-bottom: 0;">
                            <span style="font-size: 14px; font-weight: 600; color: #6B6B8D; display: block; margin-bottom: 2px;">Still have questions?</span>
                            <div style="display: flex; flex-direction: column; align-items: flex-start; margin: 0; padding: 0; gap: 0; line-height: 1.4;">
                                <a href="https://calendly.com/boni-nongay-greatspire/30min" target="_blank" style="color: #5045EC; font-weight: 600; text-decoration: none; font-size: 13px; line-height: 1.4;">Book a Call with Us</a>
                                <a href="https://api.whatsapp.com/send?phone=13527065766" target="_blank" style="color: #5045EC; font-weight: 600; text-decoration: none; font-size: 13px; line-height: 1.4;">WhatsApp: +1 (352) 706-5766</a>
                                <a href="https://www.greatspire.io/support" target="_blank" style="color: #5045EC; font-weight: 600; text-decoration: none; font-size: 13px; line-height: 1.4;">Email Support</a>
                            </div>
                        </small>`;
                    } else {
                        // 1st & 2nd answers: Always show "Read more" with context-aware link
                        let linkTitle = "Terms and Conditions"; // Default
                        let linkUrl = "https://www.greatspire.io/terms-and-conditions";

                        if (response.sources && response.sources.length > 0) {
                            const source = response.sources[0];
                            const url = (source.url || '').toLowerCase();
                            const titleLC = (source.title || '').toLowerCase();
                            const contentLC = (source.content || '').toLowerCase();
                            const combined = titleLC + ' ' + contentLC;

                            // PRIVACY POLICY - data, privacy, rights, sharing, retention, age, GDPR, CCPA
                            if (url.includes('privacy') ||
                                combined.includes('privacy') || combined.includes('personal data') ||
                                combined.includes('gdpr') || combined.includes('ccpa') ||
                                combined.includes('data collect') || combined.includes('data shar') ||
                                combined.includes('data retention') || combined.includes('cookie') ||
                                combined.includes('tracking') || combined.includes('opt out') ||
                                combined.includes('marketing communication') || combined.includes('data protection') ||
                                combined.includes('security measure') || combined.includes('data stored') ||
                                combined.includes('minimum age') || combined.includes('under 16') ||
                                combined.includes('parental') || combined.includes('voice data')) {
                                linkTitle = "Privacy Policy";
                                linkUrl = "https://www.greatspire.io/privacy-policy";

                                // CREATOR TERMS - revenue, fees, payout, rights, licensing, content standards, refunds
                            } else if (url.includes('creator') ||
                                combined.includes('revenue') || combined.includes('payout') ||
                                combined.includes('stripe fee') || combined.includes('100%') || combined.includes('15%') ||
                                combined.includes('earnings') || combined.includes('commission') ||
                                combined.includes('intellectual property') || combined.includes('retain') ||
                                combined.includes('license') && combined.includes('content') ||
                                combined.includes('sell') && combined.includes('platform') ||
                                combined.includes('remove my content') || combined.includes('content standard') ||
                                combined.includes('health claim') || combined.includes('plagiarism') ||
                                combined.includes('quality standard') || combined.includes('refund') ||
                                combined.includes('no-show') || combined.includes('dispute') ||
                                combined.includes('terminate my account') || combined.includes('marketing campaign')) {
                                linkTitle = "Creator Terms";
                                linkUrl = "https://www.greatspire.io/creator-terms";

                                // LICENSES & CREDITS - attribution, CC BY, assets, avatars, emojis, derivative
                            } else if (url.includes('licenses') || url.includes('credits') ||
                                combined.includes('attribution') || combined.includes('cc by') ||
                                combined.includes('creative commons') || combined.includes('avatar') ||
                                combined.includes('emoji') || combined.includes('asset') ||
                                combined.includes('derivative work') || combined.includes('sublicense') ||
                                combined.includes('tasl') || combined.includes('copyright notice') ||
                                combined.includes('original source') || combined.includes('lina') ||
                                combined.includes('noto') || combined.includes('google') && combined.includes('emoji')) {
                                linkTitle = "Licenses & Credits";
                                linkUrl = "https://www.greatspire.io/licenses-credits";

                                // TERMS AND CONDITIONS - clarification, risk, compliance, features (default)
                            } else {
                                // Default catches: terminate, suspended, owns content, payment methods, 
                                // legally responsible, liable, stripe error, consent, laws govern,
                                // disputes, indemnification, binding agreement, sell services,
                                // prohibited content, medical advice, notified of changes
                                linkTitle = "Terms and Conditions";
                                linkUrl = "https://www.greatspire.io/terms-and-conditions";
                            }
                        }

                        footerHtml = `<small style="color: #6B6B8D; margin-top: 8px; padding-top: 8px; display: block; border-top: 1px solid rgba(125, 89, 217, 0.1);">
                            Read more: <a href="${linkUrl}" target="_blank" style="color: #5045EC; text-decoration: none; font-weight: 600;">${linkTitle}</a>
                        </small>`;
                    }

                    answer += footerHtml;

                    this.addMessage(answer, 'bot');
                    this.trackEvent('rag_response', {
                        sourcesCount: response.sources?.length || 0,
                        language: response.language,
                        responseTimeMs: response.responseTimeMs
                    });
                } else {
                    // Backend fallback or error - use local matching
                    this.processLocalFallback(text);
                }

                this.showQuickReplies();
            })
            .catch(error => {
                console.warn('RAG backend unavailable, using local fallback:', error.message);
                this.hideTyping();
                this.processLocalFallback(text);
            });
    }

    async callRAGBackend(message) {
        // Use configured backend URL or default to relative path (standard for single-deployment)
        const apiUrl = (window.GreatSpireConfig && window.GreatSpireConfig.backendUrl)
            || '/api/chat';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message,
                sessionId: this.getSessionId()
            })
        });

        if (!response.ok) {
            throw new Error(`Backend error: ${response.status}`);
        }

        return response.json();
    }

    getSessionId() {
        // Simple session ID for analytics
        if (!this._sessionId) {
            this._sessionId = 'gs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }
        return this._sessionId;
    }

    processLocalFallback(text) {
        // Fall back to local intent matching
        const lang = window.IntentMatcher.detectLanguage(text);
        const matchedIntent = window.IntentMatcher.match(text, window.GreatSpireKB.intents);

        if (matchedIntent) {
            this.addMessage(matchedIntent.response, 'bot', matchedIntent);

            // Show handoff option if applicable
            if (matchedIntent.showHandoff) {
                setTimeout(() => {
                    this.addMessage(window.SupportHandoff.createEmailForm(), 'bot', null, true);
                }, 500);
            }

            this.showFollowUpReplies(matchedIntent.name);
            this.trackEvent('local_intent_matched', { intent: matchedIntent.name, score: matchedIntent.score });
        } else {
            // Fallback
            this.addMessage(window.GreatSpireKB.fallbackResponse, 'bot');
            this.showQuickReplies();
            this.trackEvent('no_intent_matched', { query: text });
        }
    }

    addMessage(content, type, intentData = null, isHtml = false) {
        const message = document.createElement('div');
        message.className = `gs-message ${type}`;

        if (isHtml) {
            message.innerHTML = content;
        } else {
            // Parse markdown-like syntax
            message.innerHTML = this.parseContent(content);
        }

        // Add disclaimer if needed
        if (intentData && intentData.disclaimer && intentData.disclaimerText) {
            const disclaimer = document.createElement('div');
            disclaimer.className = 'gs-disclaimer';
            disclaimer.innerHTML = this.parseContent(intentData.disclaimerText);
            message.appendChild(disclaimer);
        }

        this.messagesContainer.appendChild(message);
        this.scrollToBottom();

        this.messages.push({ content, type, timestamp: new Date() });
    }

    parseContent(text) {
        // Convert **bold** to <strong>
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert newlines to <br>
        text = text.replace(/\n/g, '<br>');
        return text;
    }

    showTyping() {
        const typing = document.createElement('div');
        typing.className = 'gs-typing';
        typing.id = 'gs-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        this.messagesContainer.appendChild(typing);
        this.scrollToBottom();
    }

    hideTyping() {
        const typing = document.getElementById('gs-typing');
        if (typing) typing.remove();
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    trackEvent(event, data = {}) {
        // Analytics tracking
        console.log('Chatbot event:', event, data);

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', event, {
                event_category: 'chatbot',
                ...data
            });
        }
    }
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.GreatSpireChatbot = new GreatSpireChatbot();
        });
    } else {
        window.GreatSpireChatbot = new GreatSpireChatbot();
    }
}
