/**
 * Great Spire Knowledge Base Documents
 * Source content for RAG vector store
 * MERGED CHUNKS 1-7: COMPLETE COMPREHENSIVE GUIDE (Web Resources Added)
 */

export const knowledgeDocuments = [
    // === ABOUT & DIFFERENTIATORS ===
    {
        id: 'mission_statement',
        title: 'What is the mission of Great Spire?',
        content: 'To be the "Powerful, Easy-to-Use AI That Turns Your Expertise Into Income." It is the first social wellness app helping seasoned practitioners expand beyond 1:1 sessions into scalable, digital income streams.',
        keywords: ['Mission', 'Vision', 'Income', 'Scalable'],
        category: 'About Great Spire',
        source: 'Great Spire Website',
        url: 'https://www.greatspire.io/'
    },
    {
        id: 'great_spire_difference',
        title: 'How is Great Spire different from other wellness apps?',
        content: '1. No Subscriptions: Access free and paid products without monthly fees. 2. Practitioner-Led: Verified healers. 3. Earn-What-You-Deserve: Practitioners keep 100% of earnings. 4. Wellness Communities: Grounded in presence. 5. AI-Supported Tools: Free readings and practitioner content support.',
        keywords: ['Difference', 'Unique', 'No Subscription', '100% Earnings'],
        category: 'About Great Spire',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/#our-advantages'
    },
    {
        id: 'app_availability',
        title: 'Is Great Spire available in my country or language?',
        content: 'Available worldwide on iOS/Android. Content is primarily English, but non-verbal offerings (sound healing) differ. Regional expansion planned.',
        keywords: ['Availability', 'Country', 'Language', 'English'],
        category: 'About Great Spire',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'download_app_links',
        title: 'Where can I download the Great Spire app?',
        content: 'iOS App Store: https://apps.apple.com/pl/app/great-spire-social-wellness/id6746274243 \nGoogle Play Store: https://play.google.com/store/apps/details?id=io.greatspire',
        keywords: ['Download', 'App Store', 'Google Play', 'iOS', 'Android', 'Links'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === LEGAL & POLICIES (Chunk 7) ===
    {
        id: 'legal_governance',
        title: 'What laws govern Great Spire?',
        content: 'Great Spire (Great Spirits Limited) is governed by the laws of the Abu Dhabi Global Market (ADGM). Disputes are resolved by ADGM courts.',
        keywords: ['Legal', 'Law', 'Governance', 'ADGM', 'Abu Dhabi'],
        category: 'Legal & Policies',
        source: 'Terms and Conditions',
        url: 'https://www.greatspire.io/terms-and-conditions'
    },
    {
        id: 'eligibility_age',
        title: 'What is the minimum age to use Great Spire?',
        content: 'You must be at least 16 years old to use the Services. The app is not intended for children under 16.',
        keywords: ['Age', 'Eligibility', '16', 'Minors'],
        category: 'Legal & Policies',
        source: 'Terms and Conditions',
        url: 'https://www.greatspire.io/terms-and-conditions'
    },
    {
        id: 'privacy_voice_analytics',
        title: 'Does Great Spire analyze my voice messages or use tracking?',
        content: 'Voice messages are processed only for playback; we do not analyze content beyond that. We use tools like Microsoft Clarity for analytics (heatmaps/usage patterns) to improve services.',
        keywords: ['Privacy', 'Voice', 'Analytics', 'Tracking', 'Microsoft Clarity'],
        category: 'Legal & Policies',
        source: 'Privacy Policy',
        url: 'https://www.greatspire.io/privacy-policy'
    },
    {
        id: 'content_attribution',
        title: 'Are there specific credits for app assets?',
        content: 'Yes. The app uses "500 AI-generated avatars" by Lina (CC BY 4.0) and "Animated Noto Emojis" based on Google’s set (CC BY 4.0).',
        keywords: ['Credits', 'Attribution', 'Assets', 'Avatars'],
        category: 'Legal & Policies',
        source: 'Licenses & Credits',
        url: 'https://www.greatspire.io/licenses-credits'
    },

    // === GETTING STARTED ===
    {
        id: 'create_account',
        title: 'How do I create a Great Spire account?',
        content: '1. Download App. 2. Tap "Sign Up". 3. Register with Email (Magic Link). 4. Enter Code. 5. Create Profile.',
        keywords: ['Account', 'Sign Up', 'Register', 'Magic Link'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'magic_link_help',
        title: 'I didn’t get my magic link – what should I do?',
        content: 'Check spam. Ensure email is correct. Wait a few minutes. Contact support@greatspire.com if issues persist.',
        keywords: ['Magic Link', 'Issue', 'Support'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },

    // === PRODUCTS, PAYMENTS & REFUNDS ===
    {
        id: 'payment_methods',
        title: 'How do payments and refunds work?',
        content: 'Payments via Stripe (secure one-time). No subscription fees. Refunds for products generally NOT issued (instant access). Refunds for sessions issued if practitioner cancels. Request refund via Support within 7 days.',
        keywords: ['Payment', 'Refund', 'Stripe', 'Policy'],
        category: 'Payments & Refunds',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },
    {
        id: 'purchase_product',
        title: 'How do I purchase a product?',
        content: 'Browse Marketplace -> Tap item -> Tap "Buy" -> Complete secure one-time payment. Item appears in "My Products".',
        keywords: ['Purchase', 'Buy', 'Product', 'Stripe'],
        category: 'Products & Bookings',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === PRACTITIONER OPERATIONS & REVENUE ===
    {
        id: 'practitioner_revenue',
        title: 'How does revenue work for practitioners?',
        content: 'You keep 100% of what you earn. No platform commission. Stripe fees apply (~3%). Payouts given monthly.',
        keywords: ['Revenue', 'Earnings', '100%', 'Commission'],
        category: 'Practitioner Operations',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'app_store_pricing',
        title: 'Why is there a price adjustment on Apple/Google stores?',
        content: 'Apple/Google charge 15% commission. To ensure you receive your full 100% earnings, a +15% price adjustment is added to in-app purchases on mobile.',
        keywords: ['Pricing', 'Commission', 'Apple', 'Google', '15%'],
        category: 'Practitioner Operations',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'content_protection',
        title: 'Is my content protected?',
        content: 'Yes. You retain full IP ownership. You grant Great Spire a non-exclusive license to host/distribute. No lock-in.',
        keywords: ['IP', 'Ownership', 'Content', 'License'],
        category: 'Practitioner Operations',
        source: 'Creator Terms',
        url: 'https://www.greatspire.io/creator-terms'
    },
    {
        id: 'uae_license',
        title: 'Is a license required?',
        content: 'UAE-based practitioners in specific categories may need a trade license.',
        keywords: ['UAE', 'License', 'Trade License'],
        category: 'Practitioner Operations',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === PRACTITIONER TOOLS & ONBOARDING ===
    {
        id: 'practitioner_dashboard',
        title: 'How do I access the Practitioner Dashboard?',
        content: 'Login at https://gs-nu.vercel.app/auth/login to upload products and manage your profile.',
        keywords: ['Dashboard', 'Login', 'Upload'],
        category: 'Practitioner Tools',
        source: 'Great Spire Guide',
        url: 'https://gs-nu.vercel.app/auth/login'
    },
    {
        id: 'tom_contento',
        title: 'What is Tom Contento (AI Great Creator)?',
        content: 'AI assistant to help structure courses, write descriptions, and create promo content.',
        keywords: ['AI', 'Tom Contento', 'Creator'],
        category: 'Practitioner Tools',
        source: 'Great Spire Guide',
        url: 'https://content.greatspire.app/'
    },
    {
        id: 'create_free_product',
        title: 'Why create a free product?',
        content: 'Builds credibility, acts as a funnel, and is evergreen. Use AI Assistant to create quickly.',
        keywords: ['Free Product', 'Growth', 'Funnel'],
        category: 'Practitioner Growth',
        source: 'Great Spire Guide',
        url: 'https://content.greatspire.app/'
    },
    {
        id: 'course_creation_steps',
        title: 'How do I create a course?',
        content: '1. Use AI Assistant for outline. 2. Record content. 3. Upload via Dashboard. 4. Publish.',
        keywords: ['Course Creation', 'Steps', 'How to'],
        category: 'Practitioner Growth',
        source: 'Great Spire Guide',
        url: 'https://content.greatspire.app/'
    },
    {
        id: 'recording_tools',
        title: 'What recording tools do you recommend?',
        content: 'Video: CapCut, VLLO. Audio: Voice Memos, Dolby On. AI Edit: Descript, Wisecut.',
        keywords: ['Tools', 'Apps', 'Recording'],
        category: 'Practitioner Tools',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'community_strategy',
        title: 'What is a good community engagement strategy?',
        content: 'Micro-dose content: Mon (Practice), Wed (Tool), Fri (AMA). Monthly Challenge. Consistency is key.',
        keywords: ['Strategy', 'Weekly', 'Plan', 'Engagement'],
        category: 'Practitioner Success',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === SUPPORT & PRIVACY ===
    {
        id: 'contact_support',
        title: 'How to contact support?',
        content: 'App: "Help & Support" in Profile. Email: support@greatspire.io. Response time: ~7 business days (general) or 12-24h (urgent).',
        keywords: ['Support', 'Contact'],
        category: 'Support',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },
    {
        id: 'data_privacy',
        title: 'Is my data private?',
        content: 'Yes. No selling data. No targeted ads. Secure payments. Private by default.',
        keywords: ['Privacy', 'Data', 'Security'],
        category: 'Privacy & Data',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/privacy'
    }
];
