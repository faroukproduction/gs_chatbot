/**
 * Great Spire Knowledge Base Documents
 * Source content for RAG vector store
 * MERGED CHUNKS 1-8: COMPLETE COMPREHENSIVE GUIDE (Restored & Polished)
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
        id: 'app_cost',
        title: 'How much does Great Spire cost?',
        content: 'Great Spire is completely free to join with no subscriptions. Free membership includes library access and community features.',
        keywords: ['Cost', 'Free', 'Price', 'Subscription'],
        category: 'About Great Spire',
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
        id: 'download_app_links',
        title: 'Where can I download the Great Spire app?',
        content: 'Download Great Spire for free! iPhone/iPad: [App Store](https://apps.apple.com/pl/app/great-spire-social-wellness/id6746274243). Android: [Google Play](https://play.google.com/store/apps/details?id=io.greatspire).',
        keywords: ['Download', 'App Store', 'Google Play', 'iOS', 'Android', 'Links', 'Install', 'Get the app'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'create_account',
        title: 'How do I create a Great Spire account?',
        content: '1. Download App. 2. Tap "Sign Up". 3. Register with Email (We will send an activation link to your email). 4. Click the link to verify. 5. Create Profile.',
        keywords: ['Account', 'Sign Up', 'Register', 'Magic Link', 'Activation'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'magic_link_help',
        title: 'I didn’t get my activation link (magic link) – what should I do?',
        content: 'Check spam folder. Ensure email address is correct. Wait a few minutes. Contact support@greatspire.com if you still don\'t see the activation email.',
        keywords: ['Magic Link', 'Issue', 'Support'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },
    {
        id: 'registration_errors',
        title: 'How can I fix registration errors?',
        content: 'Double-check email typo. Ensure email not already used. Contact support if stuck.',
        keywords: ['Error', 'Registration', 'Support'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },
    {
        id: 'guest_access',
        title: 'Can I use the app without registering?',
        content: 'Yes, as a guest with limited access. Registration required to post, save, or buy.',
        keywords: ['Guest', 'Access', 'Register'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'real_name',
        title: 'Can I use the app without sharing my real name?',
        content: 'Yes. You can use a pseudonym/username. Legal name not required publicly.',
        keywords: ['Real Name', 'Username', 'Privacy'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'account_benefits',
        title: 'What are the benefits of a Great Spire account?',
        content: '1. Full App Features (Threads). 2. AI Great Reader (Readings). 3. Bookmark Content. 4. Purchase Products/Sessions. 5. Join Communities.',
        keywords: ['Benefits', 'Features', 'Community'],
        category: 'Getting Started',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === PRODUCTS & BOOKINGS ===
    {
        id: 'digital_products_list',
        title: 'What digital products are available?',
        content: 'Courses, Audio Journeys, Guided Meditations, Sound Healings, Sleep Aids, Podcasts, Videos, Workbooks.',
        keywords: ['Products', 'Courses', 'Meditations', 'Sound', 'Sleep'],
        category: 'Products & Bookings',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
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
    {
        id: 'subscription_check',
        title: 'Do I need a subscription?',
        content: 'No. All purchases are one-time payments.',
        keywords: ['Subscription', 'One-time', 'Payment'],
        category: 'Products & Bookings',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'find_practitioner',
        title: 'How do I find a practitioner?',
        content: 'Browse feed, search by modality, or view trending profiles.',
        keywords: ['Find', 'Practitioner', 'Search'],
        category: 'Products & Bookings',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'book_session',
        title: 'How do I book a 1-1 session?',
        content: '1:1 Coaching and Calls are **coming soon**! This feature is currently under development and will be available in the near future.',
        keywords: ['Book', 'Session', '1:1', 'Appointment', 'Coaching', 'Coming Soon'],
        category: 'Products & Bookings',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === PAYMENTS & REFUNDS ===
    {
        id: 'payment_methods',
        title: 'How do payments and refunds work?',
        content: 'Payments uses Stripe (secure one-time). You keep 100% minus fees (15% App Store/Google Play fee + Stripe fees). No platform fees. Refunds generally NOT issued for digital products.',
        keywords: ['Payment', 'Refund', 'Stripe', 'Policy', '15%', 'Fees'],
        category: 'Payments & Refunds',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },
    {
        id: 'refund_policy_digital',
        title: 'What is the refund policy for digital products?',
        content: 'Refunds generally NOT issued (instant access). Exceptions: Technical failure or misrepresentation. Contact Support within 7 days.',
        keywords: ['Refund', 'Policy', 'Digital Product'],
        category: 'Payments & Refunds',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },
    {
        id: 'refund_policy_sessions',
        title: 'What is the refund policy for 1:1 sessions?',
        content: 'Refund issued if practitioner cancels/misses. NO refund for client no-show or change of mind.',
        keywords: ['Refund', 'Session', 'Cancellation'],
        category: 'Payments & Refunds',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io/support'
    },

    // === PRACTITIONER OPERATIONS & REVENUE ===
    {
        id: 'practitioner_revenue',
        title: 'How does revenue work for practitioners?',
        content: 'You keep 100% of your earnings after external fees. For digital product sales in the app, there is a **15% fee** from Apple/Google. Standard Stripe processing fees (~3%) also apply. Great Spire takes 0%.',
        keywords: ['Revenue', 'Earnings', '100%', 'Commission', 'Fees', '15%'],
        category: 'Practitioner Operations',
        source: 'Creator Terms',
        url: 'https://www.greatspire.io/creator-terms'
    },
    {
        id: 'app_store_pricing',
        title: 'What are the fees for selling on Great Spire?',
        content: 'For digital products sold in the app, there is a **15% fee** charged by Apple/Google. In addition, standard Stripe processing fees apply (~3%). There are NO platform fees from Great Spire itself (we take 0%). You keep 100% of the remaining revenue.',
        keywords: ['Pricing', 'Commission', 'Apple', 'Google', '15%', 'Fees', 'Stripe'],
        category: 'Practitioner Operations',
        source: 'Creator Terms',
        url: 'https://www.greatspire.io/creator-terms'
    },
    {
        id: 'payment_flow',
        title: 'How do I get paid?',
        content: 'Payments go to Great Spire -> Transferred to you monthly. Deductions: 15% App Store/Google Play fee (for in-app sales) + standard Stripe fees. You keep the rest.',
        keywords: ['Payment Flow', 'Stripe', 'Payout', 'Fees', '15%'],
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
        id: 'sales_visibility',
        title: 'Can I see who bought my products?',
        content: 'Currently, you **cannot** see individual customer details for product sales. This feature does not exist yet. You can see total sales numbers in your dashboard.',
        keywords: ['Sales', 'Customer', 'Who bought', 'Dashboard'],
        category: 'Practitioner Tools',
        source: 'Great Spire Guide',
        url: 'https://gs-nu.vercel.app/auth/login'
    },
    {
        id: 'tom_contento',
        title: 'What is the Great Spire AI Assistant?',
        content: 'The Great Spire AI Assistant (formerly Tom Contento) helps structure courses, write descriptions, and create promo content.',
        keywords: ['AI', 'Great Spire AI Assistant', 'Creator'],
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

    // === PRACTITIONER SUCCESS & MARKETING ===
    {
        id: 'community_strategy',
        title: 'What is a good community engagement strategy?',
        content: 'Micro-dose content: Mon (Practice), Wed (Tool), Fri (AMA). Monthly Challenge. Consistency is key.',
        keywords: ['Strategy', 'Weekly', 'Plan', 'Engagement'],
        category: 'Practitioner Success',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'social_media_promo',
        title: 'How do I promote on social media?',
        content: 'Share snippets/quotes on Insta/FB. Direct people to app for "deeper" content. Don\'t be pushy.',
        keywords: ['Social Media', 'Promotion', 'Marketing'],
        category: 'Practitioner Success',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'collect_reviews',
        title: 'How do I get reviews?',
        content: 'Ask clients after sessions. Message them: "Search my name -> Write Review".',
        keywords: ['Reviews', 'Testimonials'],
        category: 'Practitioner Success',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },

    // === FEATURES & USAGE ===
    {
        id: 'feed_info',
        title: 'How does the Feed work?',
        content: 'Personalized wellness space with threads, communities, and practitioners.',
        keywords: ['Feed', 'Personalized'],
        category: 'Features & Usage',
        source: 'Great Spire Guide',
        url: 'https://www.greatspire.io'
    },
    {
        id: 'ai_reader',
        title: 'What is the AI Great Reader?',
        content: 'Free readings in Astrology, Tarot, Human Design, etc.',
        keywords: ['AI', 'Reader', 'Readings', 'Tarot'],
        category: 'Features & Usage',
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
        id: 'contact_practitioner',
        title: 'How can people message me?',
        content: 'There is **no in-app messaging** system yet. Seekers cannot message you directly on Great Spire. You can add your **WhatsApp number** or **Email** to your bio so they can contact you externally. You can also interact via Threads and Comments.',
        keywords: ['Message', 'Contact', 'WhatsApp', 'Email', 'Bio', 'Communication'],
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
        url: 'https://www.greatspire.io/privacy-policy'
    }
];
