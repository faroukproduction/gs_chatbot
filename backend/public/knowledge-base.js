/**
 * Great Spire Knowledge Base
 * Curated Q&A content from official Great Spire pages
 */

const GreatSpireKB = {
    // Official links
    links: {
        home: 'https://www.greatspire.io/',
        creatorTerms: 'https://www.greatspire.io/creator-terms',
        privacyPolicy: 'https://www.greatspire.io/privacy-policy',
        termsConditions: 'https://www.greatspire.io/terms-and-conditions',
        support: 'https://www.greatspire.io/support',
        tryCreate: 'https://www.greatspire.io/#hero-main',
        supportEmail: 'support@greatspire.io'
    },

    // Intent categories with keywords and responses
    intents: {
        revenue: {
            keywords: ['revenue', 'money', 'earn', 'earning', 'income', 'paid', 'payment', 'payout', 'commission', 'fee', 'fees', 'percentage', 'share', 'split', 'cost', 'pricing', 'price'],
            keywords_es: ['ingreso', 'dinero', 'ganar', 'pago', 'comisión'],
            keywords_fr: ['revenu', 'argent', 'gagner', 'paiement', 'commission'],
            keywords_de: ['einkommen', 'geld', 'verdienen', 'zahlung', 'provision'],
            response: `You keep **100% of your earnings** — no middlemen or hidden fees.

Only standard payment processing fees apply (Stripe fees). Payouts are made monthly via Stripe.

<a href="${this?.links?.creatorTerms || 'https://www.greatspire.io/creator-terms'}" target="_blank">View Creator Terms</a>`,
            disclaimer: false
        },

        contentTypes: {
            keywords: ['content', 'publish', 'create', 'offer', 'type', 'types', 'what can i', 'meditation', 'course', 'audio', 'sound', 'healing', 'journey', 'workbook', 'ritual', 'sleep'],
            keywords_es: ['contenido', 'publicar', 'crear', 'ofrecer', 'meditación', 'curso'],
            keywords_fr: ['contenu', 'publier', 'créer', 'offrir', 'méditation', 'cours'],
            keywords_de: ['inhalt', 'veröffentlichen', 'erstellen', 'anbieten', 'meditation', 'kurs'],
            response: `You can create and publish a variety of digital wellness content:

• **Guided Meditations**
• **Audio Journeys**
• **Short or Full Courses**
• **Sound Healing & Frequencies**
• **Sleep Audios**
• **Rituals, Workbooks & Journals**

Your wisdom becomes timeless resources seekers can access anytime.

<a href="${this?.links?.tryCreate || 'https://www.greatspire.io/#hero-main'}" target="_blank">Try Create Now</a>`,
            disclaimer: false
        },

        publishing: {
            keywords: ['free', 'cost to publish', 'publish for free', 'free to publish', 'how to publish', 'start', 'begin', 'getting started'],
            response: `It's **completely free** to publish on Great Spire.

No upfront costs, no hidden fees. Just bring your expertise and we'll help you turn it into income.

With our AI-powered tools, creating professional content is effortless — over 300 practitioners agree.

<a href="${this?.links?.tryCreate || 'https://www.greatspire.io/#hero-main'}" target="_blank">Start Creating Now</a>`,
            disclaimer: false
        },

        profile: {
            keywords: ['profile', 'account', 'sign up', 'register', 'practitioner', 'become a practitioner', 'join', 'setup', 'set up'],
            response: `Setting up your practitioner profile is simple:

1. **Sign up** with your email or social login
2. **Complete your profile** with accurate info
3. **Start creating** content with our AI tools
4. **Publish** to a global audience instantly

You must be at least 16 years old to use the platform.

<a href="${this?.links?.home || 'https://www.greatspire.io/'}" target="_blank">Get Started</a>`,
            disclaimer: false
        },

        discovery: {
            keywords: ['discover', 'found', 'find me', 'visibility', 'audience', 'reach', 'marketing', 'promote', 'algorithm', 'resonance', 'matching'],
            response: `Great Spire uses **resonance-based matching** to connect your content with the right seekers globally.

Unlike other platforms:
• No algorithm hacks needed
• No constant marketing pressure
• We handle discovery — you focus on creating

Your content gets published instantly to a worldwide audience.

<a href="${this?.links?.home || 'https://www.greatspire.io/'}" target="_blank">Learn More</a>`,
            disclaimer: false
        },

        protection: {
            keywords: ['protected', 'protection', 'copyright', 'ownership', 'ip', 'intellectual property', 'rights', 'secure', 'security', 'safe', 'steal', 'stolen'],
            response: `Your content is fully protected.

• **You retain 100% IP rights** to everything you upload
• Content is stored securely with industry-standard safeguards
• We never sell or share your content without consent
• You can also sell on other platforms unless you choose exclusivity

<a href="${this?.links?.creatorTerms || 'https://www.greatspire.io/creator-terms'}" target="_blank">View Creator Terms</a>`,
            disclaimer: false
        },

        refunds: {
            keywords: ['refund', 'refunds', 'money back', 'return', 'dispute', 'cancel'],
            response: `Refunds are handled by Great Spire — you don't need to manage them directly.

**Digital Products:** Refunds only if content is defective, inaccessible, or misrepresented (not for change of mind).

**Services:** Refunds if the practitioner doesn't attend or there are technical issues.

Requests must be within 14 days of purchase.

<a href="${this?.links?.creatorTerms || 'https://www.greatspire.io/creator-terms'}" target="_blank">View Refund Policy</a>`,
            disclaimer: false
        },

        privacy: {
            keywords: ['privacy', 'data', 'personal information', 'gdpr', 'cookies', 'tracking'],
            response: `Great Spire takes your privacy seriously.

We comply with GDPR, CCPA, and UAE data protection laws. Your rights include:
• Access & correct your data
• Delete your account
• Opt out of marketing
• Data portability

We don't sell your personal data.

<a href="${this?.links?.privacyPolicy || 'https://www.greatspire.io/privacy-policy'}" target="_blank">Read Privacy Policy</a>`,
            disclaimer: false
        },

        support: {
            keywords: ['support', 'help', 'contact', 'email', 'assistance', 'problem', 'issue', 'talk to someone', 'human', 'agent'],
            response: `I'm here to help. If you need personalized assistance:

**Email:** support@greatspire.io
**Response time:** Within 7 business days

<a href="${this?.links?.support || 'https://www.greatspire.io/support'}" target="_blank">Visit Support Page</a>

Would you like me to help you draft a message to support?`,
            disclaimer: false,
            showHandoff: true
        },

        wellness: {
            keywords: ['medical', 'health', 'therapy', 'therapist', 'diagnosis', 'treatment', 'cure', 'heal', 'anxiety', 'depression', 'mental health'],
            response: `Great Spire offers wellness and educational content to support your journey.

Our platform helps practitioners share meditations, courses, and healing practices with seekers worldwide.`,
            disclaimer: true,
            disclaimerText: '**Wellness Disclaimer:** Content on Great Spire is for educational purposes only and does not substitute professional medical, legal, or financial advice. Please consult qualified professionals for specific concerns.'
        },

        greeting: {
            keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings'],
            response: `Hello and welcome to Great Spire.

I'm here to help you learn about our platform for wellness practitioners. What would you like to know?

• How revenue works
• What content you can publish
• How to get started
• Content protection

Just ask away.`,
            disclaimer: false
        },

        thanks: {
            keywords: ['thank', 'thanks', 'thank you', 'appreciate', 'helpful', 'great'],
            response: `You're welcome. 

Is there anything else I can help you with? Feel free to ask about publishing, revenue, or getting started.`,
            disclaimer: false
        }
    },

    // Welcome message
    welcomeMessage: `Welcome to your wellness journey with Great Spire.

I'm here to help you share your healing practice with the world. How can I support you today?`,

    // Quick reply suggestions
    quickReplies: [
        { text: 'How does revenue work?', intent: 'revenue' },
        { text: 'What can I publish?', intent: 'contentTypes' },
        { text: 'How to get started?', intent: 'publishing' },
        { text: 'Is my content protected?', intent: 'protection' }
    ],

    // Context-aware prompts based on page
    contextPrompts: {
        'creator-terms': [
            { text: 'Revenue details', intent: 'revenue' },
            { text: 'Content protection', intent: 'protection' },
            { text: 'Refund policy', intent: 'refunds' }
        ],
        'privacy-policy': [
            { text: 'My data rights', intent: 'privacy' },
            { text: 'Contact support', intent: 'support' }
        ],
        'support': [
            { text: 'Contact support', intent: 'support' },
            { text: 'Common questions', intent: 'greeting' }
        ]
    },

    // Fallback response
    fallbackResponse: `I'm not sure I understood that. Here's what I can help with:

• Revenue & pricing
• Content types you can publish
• Getting started
• Content protection
• Privacy & data

Or if you need personalized help:
<a href="https://www.greatspire.io/support" target="_blank">Contact Support</a>`,

    // Get context based on current URL
    getContext() {
        const url = window.location.pathname;
        for (const [key, prompts] of Object.entries(this.contextPrompts)) {
            if (url.includes(key)) {
                return { key, prompts };
            }
        }
        return null;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.GreatSpireKB = GreatSpireKB;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GreatSpireKB;
}
