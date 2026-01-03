/**
 * Great Spire Chatbot Widget
 * Main widget controller
 */

class GreatSpireChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
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
        this.messagesContainer = panel.querySelector('#gs-messages');
        this.quickRepliesContainer = panel.querySelector('#gs-quick-replies');
        this.input = panel.querySelector('#gs-input');
        this.sendButton = panel.querySelector('#gs-send');
    }

    bindEvents() {
        // Toggle chat
        this.button.addEventListener('click', () => this.toggle());

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

        // Get response for intent
        const intent = window.GreatSpireKB.intents[reply.intent];
        if (intent) {
            this.showTyping();
            setTimeout(() => {
                this.hideTyping();
                this.addMessage(intent.response, 'bot', intent);
            }, 800);
        }

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

                    // Add source attribution if available (deduplicated)
                    if (response.sources && response.sources.length > 0) {
                        // Deduplicate sources by source name
                        const uniqueSources = response.sources.reduce((acc, s) => {
                            if (!acc.find(existing => existing.source === s.source)) {
                                acc.push(s);
                            }
                            return acc;
                        }, []);

                        const sourcesList = uniqueSources
                            .map(s => `<a href="${s.url}" target="_blank">${s.source} ↗</a>`)
                            .join(' | ');
                        answer += `\n\n<small style="color: #A0A0B0;">Sources: ${sourcesList}</small>`;
                    }

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
