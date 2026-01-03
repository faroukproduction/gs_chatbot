/**
 * Great Spire Knowledge Base Documents
 * Source content for RAG vector store
 * Updated with user-provided content
 */

export const knowledgeDocuments = [
    // CATEGORY 1: ACCOUNT CREATION & REGISTRATION
    {
        id: 'account_creation',
        title: 'What is Great Spire?',
        content: 'Great Spire is the first wellness social media platform and marketplace for digital wellness products. It creates a space for safe, meaningful wellness conversations through threads, connects you with trusted practitioners for 1-1 or group sessions, and gives you access to hundreds of digital wellness products such as courses, meditations, audio journeys, and rituals.',
        keywords: ['Platform', 'Wellness', 'Marketplace', 'Social Media', 'Products'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },
    {
        id: 'how_to_create_account',
        title: 'How do I create an account on Great Spire?',
        content: 'Download the Great Spire app from the App Store (iOS) or Google Play (Android), tap "Sign Up" on the welcome screen, register with your email to receive a magic link (a secure, one-time login code), copy the code from your email and paste it back into the app to verify your email, choose a username and answer onboarding questions about your wellness goals, needs, and interests.',
        keywords: ['Register', 'Sign Up', 'Magic Link', 'App', 'Account'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },
    {
        id: 'magic_link_issues',
        title: 'I didn’t receive my magic link. What should I do?',
        content: 'Check your spam or promotions folder, ensure you entered the correct email address, and wait a few minutes before trying to resend. If still stuck, contact support at support@greatspire.io.',
        keywords: ['Magic Link', 'Email', 'Spam', 'Support', 'Login'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },
    {
        id: 'registration_errors',
        title: 'How can I fix registration errors?',
        content: 'Double-check that your email hasn’t already been used to create an account and ensure the email address is typed correctly. If everything looks right and you’re still facing issues, reach out to Customer Support at support@greatspire.io using the same email address you’re trying to register with.',
        keywords: ['Error', 'Registration', 'Support', 'Email'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },
    {
        id: 'guest_access',
        title: 'Can I use the app without registering?',
        content: 'Yes, you can explore a limited version of the app as a guest. However, to engage with content, post in threads, save favorites, or join groups, you’ll need to create a free account.',
        keywords: ['Guest', 'Access', 'Limited', 'Register'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },
    {
        id: 'real_name_policy',
        title: 'Can I use the app without sharing my real name?',
        content: 'Yes. You can create an account using a username. Great Spire never requires your legal name to participate in the community or engage with AI agents.',
        keywords: ['Real Name', 'Username', 'Privacy', 'Anonymity'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },
    {
        id: 'desktop_compatibility',
        title: 'Is Great Spire compatible with desktop or laptop computers?',
        content: 'Currently, Great Spire is designed primarily for mobile use. You cannot access the full platform experience on desktop or laptop computers, except if you are a practitioner uploading or managing your content. For the most comprehensive experience, download the Great Spire app on a supported mobile device.',
        keywords: ['Desktop', 'Laptop', 'Mobile', 'App', 'Device'],
        category: 'Account Creation',
        source: 'Great Spire Support'
    },

    // CATEGORY 2: PRICING & MEMBERSHIP
    {
        id: 'cost_membership',
        title: 'How much does Great Spire cost?',
        content: 'Great Spire is completely free to join and accessible to all. You can download the app and create your account with no subscriptions or hidden fees. Free membership includes access to the library, practitioners, community threads, and the AI Great Reader.',
        keywords: ['Cost', 'Free', 'Price', 'Subscription', 'Fees'],
        category: 'Pricing & Membership',
        source: 'Great Spire Support'
    },
    {
        id: 'account_benefits',
        title: 'What are the benefits of having a Great Spire account?',
        content: 'Access to full app features (engage in threads, post questions), AI Great Reader (personalized readings), bookmark and save content, purchase wellness products/sessions, and join supportive communities.',
        keywords: ['Benefits', 'Features', 'Community', 'Readings'],
        category: 'Pricing & Membership',
        source: 'Great Spire Support'
    },
    {
        id: 'course_subscription',
        title: 'Do I need a subscription to purchase a course?',
        content: 'No subscription is required. Great Spire offers both free and paid wellness courses created by trusted practitioners with one-time payments only.',
        keywords: ['Subscription', 'Course', 'One-time Payment', 'Purchase'],
        category: 'Pricing & Membership',
        source: 'Great Spire Support'
    },
    {
        id: 'subscription_fees',
        title: 'Do you charge subscription fees?',
        content: 'No. There are no subscriptions or hidden fees. You only pay for the content you choose through one-time payments.',
        keywords: ['Fees', 'Subscription', 'Payment', 'Hidden'],
        category: 'Pricing & Membership',
        source: 'Great Spire Support'
    },

    // CATEGORY 3: FEATURES & NAVIGATION
    {
        id: 'feed_works',
        title: 'How does the Feed work?',
        content: 'The Feed is your personalized wellness space that includes threads from seekers and practitioners, trending communities, wellness courses, and audio releases. It grows smarter as you interact.',
        keywords: ['Feed', 'Personalized', 'Threads', 'Content'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'what_are_threads',
        title: 'What are Threads?',
        content: 'Threads are where conversations happen. You can ask questions, share experiences, react, reply, and save valuable threads to your library.',
        keywords: ['Threads', 'Conversation', 'Social', 'Community'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'ai_great_reader',
        title: 'What is the AI Great Reader?',
        content: 'The Great Reader is your personal reading-focused chatbot that answers questions and provides insights using numerology, tarot, human design, and astrology.',
        keywords: ['AI', 'Reader', 'Chatbot', 'Astrology', 'Tarot'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'free_reading',
        title: 'How do I get a free reading from the AI Great Reader?',
        content: 'Access the AI Great Reader from the main app interface on your feed to receive instant free readings in astrology, human design, tarot, runes, numerology, and cosmogram.',
        keywords: ['Free Reading', 'AI', 'Access', 'Astrology'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'join_communities',
        title: 'How do I join or follow wellness threads or communities?',
        content: 'Navigate to the Community Wall, join active threads based on topics you like, and tap "Follow" or "Join" on any thread or seeker circle.',
        keywords: ['Join', 'Follow', 'Community', 'Threads'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'save_threads',
        title: 'How do I save Threads?',
        content: 'Tap the bookmark icon (🔖) in the bottom right corner of the thread. Access saved threads in your Profile under the "Posts" tab.',
        keywords: ['Save', 'Bookmark', 'Threads', 'Library'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'write_post',
        title: 'How do I write a post and publish in the community?',
        content: 'Tap the "+" button on the home screen, select a community, write your title and message, add topics/tags, optionally add media, and tap "Post".',
        keywords: ['Post', 'Publish', 'Write', 'Community'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },
    {
        id: 'digital_products_list',
        title: 'What are the digital products offered on Great Spire?',
        content: 'Eight core categories: Courses, Audio Journeys, Guided Meditations, Sound Healings, Sleep Aids, Podcasts, Videos, and Workbooks.',
        keywords: ['Products', 'Courses', 'Meditations', 'Audio'],
        category: 'Features & Navigation',
        source: 'Great Spire Support'
    },

    // CATEGORY 4: PURCHASING & PRODUCTS
    {
        id: 'how_to_purchase',
        title: 'How do I purchase a digital product?',
        content: 'Browse the Marketplace, select an item to view details, tap "Buy" or "Purchase", and complete a secure one-time payment through Stripe. It will appear in your My Library tab.',
        keywords: ['Purchase', 'Buy', 'Marketplace', 'Stripe'],
        category: 'Purchasing & Products',
        source: 'Great Spire Support'
    },
    {
        id: 'payment_methods',
        title: 'What payment methods are supported?',
        content: 'Stripe (credit/debit cards) for secure one-time payments.',
        keywords: ['Payment', 'Stripe', 'Credit Card'],
        category: 'Purchasing & Products',
        source: 'Great Spire Support'
    },
    {
        id: 'offline_access',
        title: 'Can I access Great Spire content offline?',
        content: 'Currently, the platform requires an internet connection to stream content. Offline access is not yet supported.',
        keywords: ['Offline', 'Internet', 'Access', 'Stream'],
        category: 'Purchasing & Products',
        source: 'Great Spire Support'
    },

    // CATEGORY 5: PRACTITIONERS & BOOKINGS
    {
        id: 'find_practitioner',
        title: 'How do I find the right practitioner?',
        content: 'Browse Practitioner carousels in the Feed by modality or search by name. View bios, reviews, and expertise to see who resonates.',
        keywords: ['Find', 'Practitioner', 'Search', 'Modality'],
        category: 'Practitioners & Bookings',
        source: 'Great Spire Support'
    },
    {
        id: 'practitioner_verification',
        title: 'Are practitioners on Great Spire verified?',
        content: 'Yes. Practitioners go through a verification process. While not all modalities require formal credentials, Great Spire emphasizes authenticity and ethical responsibility.',
        keywords: ['Verified', 'Certified', 'Credentials', 'Safety'],
        category: 'Practitioners & Bookings',
        source: 'Great Spire Support'
    },
    {
        id: 'book_session',
        title: 'How do I book a 1:1 session?',
        content: 'Go to the practitioner\'s profile, select "Appointments", tap "Buy" to pay. You will receive a Calendly link to select a time.',
        keywords: ['Book', 'Session', '1:1', 'Appointment', 'Calendly'],
        category: 'Practitioners & Bookings',
        source: 'Great Spire Support'
    },
    {
        id: 'spirituality_requirement',
        title: 'Do I need to be spiritual to use Great Spire?',
        content: 'Not at all. Great Spire is non-dogmatic and inclusive. The focus is on healing and personal sovereignty, not belief systems.',
        keywords: ['Spiritual', 'Belief', 'Inclusive', 'Non-dogmatic'],
        category: 'Practitioners & Bookings',
        source: 'Great Spire Support'
    },
    {
        id: 'greatspire_difference',
        title: 'How Is Great Spire Different from Other Wellness Apps?',
        content: 'It uses an earn-what-you-deserve model (practitioners keep 100%), has no subscriptions, is practitioner-led, and combines social community with a marketplace.',
        keywords: ['Difference', 'Unique', 'Model', 'Practitioner-led'],
        category: 'Practitioners & Bookings',
        source: 'Great Spire Support'
    },

    // CATEGORY 6: REFUNDS & PRIVACY
    {
        id: 'refund_policy_products',
        title: 'What is your refund policy for digital products?',
        content: 'Refunds are generally not issued unless the product was not delivered, had a technical issue, or was significantly misrepresented. Contact Support within 7 days.',
        keywords: ['Refund', 'Policy', 'Digital Product', 'Support'],
        category: 'Refunds & Privacy',
        source: 'Great Spire Support'
    },
    {
        id: 'refund_policy_sessions',
        title: 'What is your refund policy for 1:1 sessions?',
        content: 'Refunds are issued if the practitioner misses the session, fails to show up, or cancels without rescheduling. No refunds for change of mind or client no-shows.',
        keywords: ['Refund', 'Session', 'Cancellation', 'No-show'],
        category: 'Refunds & Privacy',
        source: 'Great Spire Support'
    },
    {
        id: 'data_privacy',
        title: 'Is my personal data private?',
        content: 'Yes. Great Spire does not sell or share personal data, run ads, or track behavior for marketing. Your privacy is protected.',
        keywords: ['Privacy', 'Data', 'Security', 'Ads'],
        category: 'Refunds & Privacy',
        source: 'Great Spire Support'
    },
    {
        id: 'data_usage',
        title: 'How does Great Spire use my data?',
        content: 'Data is used only to deliver purchases, session access, and match you with relevant products/threads. We do NOT sell data to advertisers.',
        keywords: ['Data Usage', 'Privacy', 'Collection'],
        category: 'Refunds & Privacy',
        source: 'Great Spire Support'
    },

    // CATEGORY 7: PRACTITIONER ONBOARDING
    {
        id: 'create_practitioner_profile',
        title: 'How do I create a practitioner profile?',
        content: 'Register as a user, click "Are you a practitioner?" on the main wall, fill out your profile, add offerings, and use AI Content Creation to help.',
        keywords: ['Practitioner', 'Profile', 'Onboarding', 'Create'],
        category: 'Practitioner Onboarding',
        source: 'Great Spire Support'
    },
    {
        id: 'practitioner_cost',
        title: 'Is it free to publish my work on the platform?',
        content: 'Yes. There are no upfront costs or listing fees.',
        keywords: ['Free', 'Cost', 'Publish', 'Practitioner'],
        category: 'Practitioner Onboarding',
        source: 'Great Spire Support'
    },
    {
        id: 'upload_content',
        title: 'How do I upload a course or audio?',
        content: 'Login to the Practitioner Dashboard (https://gs-nu.vercel.app/auth/login), choose "Create New Product", select format, upload content, set price, and publish.',
        keywords: ['Upload', 'Course', 'Audio', 'dashboard'],
        category: 'Practitioner Onboarding',
        source: 'Great Spire Support'
    },
    {
        id: 'practitioner_revenue',
        title: 'How does revenue work for practitioners?',
        content: 'Practitioners keep 100% of earnings (minus Stripe fees). Payouts are monthly.',
        keywords: ['Revenue', 'Earnings', 'Commission', 'Stripe'],
        category: 'Practitioner Onboarding',
        source: 'Great Spire Support'
    },
    {
        id: 'ai_course_assistant',
        title: 'How does the AI Course Assistant work?',
        content: 'Open the AI Course Assistant at https://content.greatspire.app/ to create course outlines, descriptions, and promotional material using AI.',
        keywords: ['AI', 'Course Assistant', 'Tools', 'Creation'],
        category: 'Practitioner Onboarding',
        source: 'Great Spire Support'
    },

    // CATEGORY 8: PRACTITIONER HELP CORNER
    {
        id: 'intro_video',
        title: 'How should I craft a strong practitioner introduction video?',
        content: 'Create a 1-2 minute direct-to-camera video introducing yourself, your expertise, and the transformation clients can expect.',
        keywords: ['Video', 'Introduction', 'Practitioner', 'Tips'],
        category: 'Practitioner Help',
        source: 'Great Spire Support'
    },
    {
        id: 'collect_reviews',
        title: 'How do I collect reviews?',
        content: 'Ask clients to leave a review on your profile after a session or course. Send them a direct link and a polite request.',
        keywords: ['Reviews', 'Feedback', 'Practitioner'],
        category: 'Practitioner Help',
        source: 'Great Spire Support'
    },
    {
        id: 'practitioner_engagement',
        title: 'What is the recommended engagement plan?',
        content: 'Daily: 15 mins (thread, reply, story). Weekly: 1 community post, 1 product reminder, 1 question.',
        keywords: ['Engagement', 'Plan', 'Growth', 'Practitioner'],
        category: 'Practitioner Help',
        source: 'Great Spire Support'
    },
    {
        id: 'promote_products',
        title: 'How should practitioners promote their products?',
        content: 'Mention free products weekly, paid offers 1-2x month. Use stories for testimonials.',
        keywords: ['Promote', 'Marketing', 'Products'],
        category: 'Practitioner Help',
        source: 'Great Spire Support'
    },

    // CATEGORY 9: PRICING UPDATE - APPLE/GOOGLE STORE
    {
        id: 'app_store_commission',
        title: 'Why is there a price adjustment on mobile apps?',
        content: 'Apple/Google charge a 15% commission on in-app purchases. To ensure practitioners keep 100% of their earnings, a +15% price adjustment is applied to digital products bought inside the mobile apps.',
        keywords: ['Commission', 'Apple', 'Google', 'Price Adjustment', '15%'],
        category: 'App Store Pricing',
        source: 'Great Spire Support'
    },
    {
        id: 'great_spire_commission',
        title: 'What is Great Spire’s commission?',
        content: 'Great Spire does NOT take any fees or commissions. You receive 100% of your earnings.',
        keywords: ['Commission', 'Fees', 'Earnings', 'Zero'],
        category: 'App Store Pricing',
        source: 'Great Spire Support'
    },

    // CATEGORY 10: UPDATES & SUPPORT
    {
        id: 'contact_support',
        title: 'How can I contact Great Spire?',
        content: 'Tap "Help & Support" in the app, email support@greatspire.io, or visit the Help Center. Response time is typically 12-24 hours.',
        keywords: ['Contact', 'Support', 'Help', 'Email'],
        category: 'Updates & Support',
        source: 'Great Spire Support'
    }
];
