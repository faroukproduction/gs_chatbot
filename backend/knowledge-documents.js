/**
 * Great Spire Knowledge Documents
 * Structured content from official Great Spire pages for RAG
 */

export const knowledgeDocuments = [
    // === REVENUE & PRICING ===
    {
        id: 'revenue-1',
        category: 'revenue',
        title: 'Revenue Share Model',
        content: `Great Spire offers 100% revenue share to creators. You keep all your earnings from paid sales of your content. The only deductions are standard Stripe processing fees (available at stripe.com/ae/pricing). Unlike traditional platforms that take 10-50% commissions, Great Spire lets you keep everything you earn.`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['revenue', 'earnings', 'money', 'income', 'commission', 'fee', 'percentage', 'share', '100%']
    },
    {
        id: 'revenue-2',
        category: 'revenue',
        title: 'Payout Schedule',
        content: `Payouts are made monthly via Stripe or another supported payment method, based on the prior month's net revenue. Apple Pay or Google Play commissions will be deducted from net revenue only if the seeker made a purchase through those payment gateways.`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['payout', 'payment', 'monthly', 'stripe', 'when paid']
    },
    {
        id: 'revenue-3',
        category: 'revenue',
        title: 'No Hidden Fees',
        content: `Great Spire has no hidden fees or upfront costs. It's completely free to publish on the platform. Traditional platforms often take 10-40% cuts, but Great Spire handles marketing for you at no additional cost. Your content ownership (IP) remains fully yours, unlike other platforms where it's often shared or restricted.`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['free', 'cost', 'hidden fees', 'upfront', 'no cost']
    },

    // === CONTENT TYPES ===
    {
        id: 'content-1',
        category: 'content',
        title: 'Types of Digital Products',
        content: `Great Spire enables practitioners to create and monetize various digital wellness content: 
    
1. Guided Meditations - calming, transformative meditation experiences
2. Audio Journeys - immersive audio experiences that inspire and heal
3. Short or Full Courses - package your knowledge into educational content
4. Sound Healing & Frequencies - sessions that promote wellness through sound
5. Sleep Audios - soothing content and bedtime stories to help seekers rest
6. Rituals, Workbooks & Journals - guide daily practices with interactive content

Your years of wisdom become timeless resources that seekers can access anytime, anywhere.`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['content', 'meditation', 'course', 'audio', 'sound healing', 'sleep', 'workbook', 'ritual', 'journal', 'create', 'publish']
    },
    {
        id: 'content-2',
        category: 'content',
        title: 'AI-Powered Content Creation',
        content: `Great Spire's AI-powered content creator makes it "shockingly easy" to turn your expertise into digital products. Over 300 practitioners have tried this feature and found it remarkably simple. You can turn voice notes into structured meditations, courses, and other offerings. The platform acts as your co-creator, not another tech hurdle. You don't need technical or marketing skills - we support you throughout the process.`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['ai', 'easy', 'create', 'voice note', 'simple', 'technology', 'support']
    },

    // === PUBLISHING ===
    {
        id: 'publish-1',
        category: 'publishing',
        title: 'Publishing Process',
        content: `Publishing on Great Spire is completely free with no upfront costs. The platform provides Done-for-You AI Support for content creation, unlike traditional platforms where you figure it out alone. You can publish instantly to a global audience without the marketing burnout that comes with other platforms. Great Spire handles discovery and marketing so you can focus on creating quality content.`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['publish', 'free', 'global', 'audience', 'marketing', 'instant']
    },
    {
        id: 'publish-2',
        category: 'publishing',
        title: 'Content Standards',
        content: `When publishing content on Great Spire, creators must:
- Upload original, high-quality educational content that complies with legal and ethical standards
- Avoid plagiarism, false claims, or unsubstantiated health claims
- Not infringe upon intellectual property or third-party rights
- Not post content that is offensive, discriminatory, or unlawful

Great Spire reserves the right to remove content that violates policies or suspend accounts that breach these standards.`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['standards', 'quality', 'original', 'rules', 'policy', 'guidelines']
    },

    // === CONTENT PROTECTION ===
    {
        id: 'protection-1',
        category: 'protection',
        title: 'Intellectual Property Rights',
        content: `Creators retain full intellectual property (IP) rights to all content they upload to Great Spire. You grant Great Spire a non-exclusive, royalty-free, worldwide license to host, market, distribute, and sell your content on the platform. Importantly, you can also sell the same content on other platforms unless you enter into a separate exclusivity agreement.`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['ip', 'intellectual property', 'rights', 'ownership', 'copyright', 'license']
    },
    {
        id: 'protection-2',
        category: 'protection',
        title: 'Content Security & Storage',
        content: `Great Spire is committed to protecting the integrity and confidentiality of your content:
- Content is stored securely using appropriate technical and organizational safeguards
- Protection against unauthorized access, alteration, disclosure, or destruction
- Content will not be sold, licensed, or disclosed to any third party without explicit consent (unless required by law)
- Your content remains exclusively within the platform's infrastructure and is used solely in accordance with the terms`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['secure', 'security', 'storage', 'protected', 'safe', 'confidential']
    },

    // === DISCOVERY ===
    {
        id: 'discovery-1',
        category: 'discovery',
        title: 'Resonance-Based Matching',
        content: `Great Spire uses resonance-based matching to connect practitioners with seekers. Unlike traditional platforms that rely on algorithm hacks and constant marketing, Great Spire's discovery system naturally matches your content with the right audience based on resonance and relevance. Your content gets published instantly to a worldwide audience, and Great Spire handles the marketing so you don't experience the burnout of constant self-promotion.`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['discovery', 'found', 'audience', 'reach', 'matching', 'resonance', 'visibility']
    },

    // === PROFILE & ACCOUNT ===
    {
        id: 'account-1',
        category: 'account',
        title: 'Account Requirements',
        content: `To use Great Spire services, you must be at least 16 years old (or older if required by your local law). Users must register an account to access specific features and agree to provide truthful, accurate information. You are responsible for safeguarding your credentials and for all activity conducted through your account. Great Spire reserves the right to suspend or terminate accounts that violate policies.`,
        source: 'Terms and Conditions',
        sourceUrl: 'https://www.greatspire.io/terms-and-conditions',
        keywords: ['account', 'register', 'sign up', 'age', 'requirements', 'profile']
    },
    {
        id: 'account-2',
        category: 'account',
        title: 'Account Termination',
        content: `Great Spire may suspend or terminate accounts in case of policy violations or inactivity. Upon termination:
- Your content will no longer be offered for sale
- Existing customers will retain access to previously purchased content
- Great Spire may continue to use promotional materials already created unless you request removal`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['terminate', 'suspend', 'close account', 'delete', 'deactivate']
    },

    // === REFUNDS ===
    {
        id: 'refund-1',
        category: 'refunds',
        title: 'Digital Product Refunds',
        content: `Refunds for digital products (courses, meditations, downloads) are handled by Great Spire - practitioners don't manage them directly. Refunds are only issued if:
- The product is defective (file is broken or unplayable)
- Content is inaccessible due to a platform error
- Product is materially different from its description

Refunds are NOT issued for change of mind, user error, or dissatisfaction with teaching style. Requests must be submitted within 14 days of purchase and are processed through Stripe to the original payment method.`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['refund', 'money back', 'return', 'dispute', 'cancel purchase']
    },
    {
        id: 'refund-2',
        category: 'refunds',
        title: 'Service Refunds',
        content: `Refunds for practitioner services (consultations, coaching, live sessions) are issued only if:
- The practitioner does not attend the scheduled session
- The session is undelivered or inaccessible due to technical issues
- The service was clearly misrepresented in the listing

Practitioners are notified before a refund is issued and may submit proof within 72 hours. Refunds for no-shows or undelivered sessions are non-negotiable.`,
        source: 'Creator Terms',
        sourceUrl: 'https://www.greatspire.io/creator-terms',
        keywords: ['refund', 'service', 'session', 'consultation', 'no show']
    },

    // === PRIVACY & DATA ===
    {
        id: 'privacy-1',
        category: 'privacy',
        title: 'Data Collection',
        content: `Great Spire collects various types of personal data depending on your interaction:
- Identity & Contact Data: Name, email, phone number, profile photo
- Account Credentials: Username, encrypted password
- Payment Data: Card details (last 4 digits), billing address, transaction metadata
- Usage Data: App interactions, content engagement, referral links
- Technical Data: IP address, device ID, browser type, OS
- Voice Data: If you record voice messages (stored with metadata, no voice recognition unless consented)

Great Spire does NOT sell your personal data.`,
        source: 'Privacy Policy',
        sourceUrl: 'https://www.greatspire.io/privacy-policy',
        keywords: ['data', 'privacy', 'personal information', 'collect', 'tracking']
    },
    {
        id: 'privacy-2',
        category: 'privacy',
        title: 'User Rights (GDPR/CCPA)',
        content: `Great Spire complies with GDPR, CCPA, and UAE data protection laws. Depending on your jurisdiction, you have the right to:
- Access your data
- Correct inaccuracies
- Delete your data (with some exceptions)
- Restrict or object to processing
- Withdraw consent
- Data portability
- Opt out of personalized advertising or AI-based recommendations
- Request access to or deletion of voice messages

To exercise your rights, contact privacy@greatspirits.com`,
        source: 'Privacy Policy',
        sourceUrl: 'https://www.greatspire.io/privacy-policy',
        keywords: ['rights', 'gdpr', 'ccpa', 'data rights', 'privacy', 'delete data', 'access data']
    },

    // === SUPPORT ===
    {
        id: 'support-1',
        category: 'support',
        title: 'Getting Support',
        content: `If you need assistance with your Great Spire account or have questions, you can:
1. Fill out the support form at greatspire.io/support
2. Email directly at support@greatspire.io

Once submitted, the support team will review your message and reply via email, usually within 7 business days. They may contact you for additional details if needed.`,
        source: 'Support Page',
        sourceUrl: 'https://www.greatspire.io/support',
        keywords: ['support', 'help', 'contact', 'email', 'assistance', 'problem']
    },
    {
        id: 'support-2',
        category: 'support',
        title: 'Account Deletion',
        content: `To delete your Great Spire account and all associated data:
1. Visit the support page at greatspire.io/support
2. Select "Account deletion" as the topic
3. Confirm that deletion is permanent and cannot be undone

Your account and all related personal data will be permanently deleted within 30 days, and you'll receive a confirmation email when complete.`,
        source: 'Support Page',
        sourceUrl: 'https://www.greatspire.io/support',
        keywords: ['delete account', 'remove account', 'close account', 'account deletion']
    },

    // === WELLNESS DISCLAIMER ===
    {
        id: 'wellness-1',
        category: 'wellness',
        title: 'Wellness Disclaimer',
        content: `Great Spire's services are designed to support general wellness and education. They do NOT substitute for professional medical, legal, or financial advice. Content on the platform is for informational and educational purposes only. If you have specific health concerns, please consult qualified healthcare professionals. Great Spire helps practitioners share wellness content but does not provide medical diagnoses or treatment.`,
        source: 'Terms and Conditions',
        sourceUrl: 'https://www.greatspire.io/terms-and-conditions',
        keywords: ['wellness', 'medical', 'health', 'disclaimer', 'professional advice']
    },

    // === PLATFORM BENEFITS ===
    {
        id: 'benefits-1',
        category: 'benefits',
        title: 'Why Choose Great Spire',
        content: `Great Spire is the first social wellness app designed for seasoned practitioners. Key benefits:

REVENUE: Keep 100% of your earnings (vs 10-40% cuts on other platforms)
CONTENT CREATION: AI-powered, done-for-you support (vs figuring it out alone)
DISCOVERY: Resonance-based matching (vs algorithm hacks)
MARKETING: We handle it for you (vs constant self-promotion burnout)
IP OWNERSHIP: Fully yours (vs often shared/restricted elsewhere)
TECH SUPPORT: We support you (vs you figuring it out alone)

Over 300 practitioners call the content creation experience "shockingly easy."`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['why', 'benefits', 'advantages', 'choose', 'better', 'comparison']
    },

    // === TESTIMONIALS ===
    {
        id: 'testimonial-1',
        category: 'testimonials',
        title: 'Practitioner Testimonials',
        content: `Real feedback from Great Spire practitioners:

"From creating the course to building the challenge, the whole process has been a valuable learning journey — from hands-on recording to editing. I must say, it all truly came to life thanks to Great Spire." - Deepti Serai

"I used GreatSpire AI to create my audio meditation, and it was a wonderful experience." - Mridula Bose

"Collaborating with GreatSpire has been an inspiring and seamless experience. The platform provided the right tools and guidance to bring my ideas into a structured, professional online course." - Hend`,
        source: 'Homepage',
        sourceUrl: 'https://www.greatspire.io/',
        keywords: ['testimonial', 'review', 'feedback', 'experience', 'practitioners say']
    }
];

// Category metadata for better organization
export const categories = {
    revenue: { name: 'Revenue & Earnings', icon: '💰' },
    content: { name: 'Content Types', icon: '📚' },
    publishing: { name: 'Publishing', icon: '🚀' },
    protection: { name: 'Content Protection', icon: '🛡️' },
    discovery: { name: 'Discovery', icon: '🌍' },
    account: { name: 'Account & Profile', icon: '👤' },
    refunds: { name: 'Refunds', icon: '↩️' },
    privacy: { name: 'Privacy & Data', icon: '🔒' },
    support: { name: 'Support', icon: '📧' },
    wellness: { name: 'Wellness', icon: '🌿' },
    benefits: { name: 'Platform Benefits', icon: '✨' },
    testimonials: { name: 'Testimonials', icon: '💬' }
};
