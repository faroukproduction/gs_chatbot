/**
 * Support Handoff Module for Great Spire Chatbot
 * Handles escalation to human support
 */

const SupportHandoff = {
    supportEmail: 'support@greatspire.io',
    supportUrl: 'https://www.greatspire.io/support',

    /**
     * Generate handoff message with options
     */
    getHandoffMessage() {
        return `Still need help? I can connect you with our support team:

📧 **Email:** ${this.supportEmail}
🌐 **Support Page:** <a href="${this.supportUrl}" target="_blank">Visit Support ↗</a>

Would you like me to help collect your email for follow-up?`;
    },

    /**
     * Create email collection form HTML
     */
    createEmailForm() {
        return `
      <div class="gs-support-form">
        <input type="email" placeholder="Your email address" id="gs-support-email" required>
        <input type="text" placeholder="Brief description of your issue" id="gs-support-issue">
        <button onclick="SupportHandoff.submitEmail()">Request Follow-up</button>
      </div>
    `;
    },

    /**
     * Handle email submission
     */
    submitEmail() {
        const emailInput = document.getElementById('gs-support-email');
        const issueInput = document.getElementById('gs-support-issue');

        if (!emailInput || !emailInput.value) {
            return;
        }

        const email = emailInput.value;
        const issue = issueInput ? issueInput.value : '';

        // Store for analytics (in production, send to backend)
        console.log('Support request:', { email, issue });

        // Show confirmation
        if (window.GreatSpireChatbot) {
            window.GreatSpireChatbot.addMessage(`Thanks! We've noted your email (${email}). Our support team will reach out within 7 business days.

In the meantime, you can also email us directly at:
📧 <a href="mailto:${this.supportEmail}">${this.supportEmail}</a>`, 'bot');
        }
    },

    /**
     * Open email client with prefilled subject
     */
    openEmailClient(subject = 'Great Spire Support Request') {
        const mailtoLink = `mailto:${this.supportEmail}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink, '_blank');
    },

    /**
     * Track support handoff for analytics
     */
    trackHandoff(reason) {
        // In production, send to analytics backend
        console.log('Support handoff:', { reason, timestamp: new Date().toISOString() });

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'support_handoff', {
                event_category: 'chatbot',
                event_label: reason
            });
        }
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.SupportHandoff = SupportHandoff;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SupportHandoff;
}
