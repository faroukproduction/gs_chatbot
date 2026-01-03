/**
 * Intent Matcher for Great Spire Chatbot
 * Simple keyword-based intent detection with multilingual support
 */

const IntentMatcher = {
    /**
     * Find the best matching intent for a user query
     * @param {string} query - User's input text
     * @param {object} intents - Intent definitions from knowledge base
     * @returns {object|null} - Matched intent or null
     */
    match(query, intents) {
        const normalizedQuery = query.toLowerCase().trim();
        let bestMatch = null;
        let bestScore = 0;

        for (const [intentName, intentData] of Object.entries(intents)) {
            const score = this.calculateScore(normalizedQuery, intentData);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = { name: intentName, ...intentData, score };
            }
        }

        // Require minimum score threshold
        return bestScore >= 1 ? bestMatch : null;
    },

    /**
     * Calculate match score for an intent
     * @param {string} query - Normalized query
     * @param {object} intentData - Intent definition
     * @returns {number} - Match score
     */
    calculateScore(query, intentData) {
        let score = 0;
        const allKeywords = [
            ...(intentData.keywords || []),
            ...(intentData.keywords_es || []),
            ...(intentData.keywords_fr || []),
            ...(intentData.keywords_de || [])
        ];

        for (const keyword of allKeywords) {
            if (query.includes(keyword.toLowerCase())) {
                // Exact word match scores higher
                const wordBoundary = new RegExp(`\\b${this.escapeRegex(keyword)}\\b`, 'i');
                if (wordBoundary.test(query)) {
                    score += 2;
                } else {
                    score += 1;
                }
            }
        }

        return score;
    },

    /**
     * Escape special regex characters
     */
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },

    /**
     * Detect language from query
     * @param {string} query - User's input
     * @returns {string} - Language code (en, es, fr, de)
     */
    detectLanguage(query) {
        const languagePatterns = {
            es: ['hola', 'qué', 'cómo', 'puedo', 'quiero', 'gracias', 'ayuda'],
            fr: ['bonjour', 'comment', 'puis-je', 'merci', 'aide', 'quel'],
            de: ['hallo', 'wie', 'kann ich', 'danke', 'hilfe', 'was']
        };

        const normalizedQuery = query.toLowerCase();

        for (const [lang, patterns] of Object.entries(languagePatterns)) {
            for (const pattern of patterns) {
                if (normalizedQuery.includes(pattern)) {
                    return lang;
                }
            }
        }

        return 'en';
    },

    /**
     * Get a response based on intent and language
     * @param {object} intent - Matched intent
     * @param {string} lang - Detected language
     * @returns {string} - Response text
     */
    getResponse(intent, lang = 'en') {
        // For now, return English response
        // Future: add localized responses
        return intent.response;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.IntentMatcher = IntentMatcher;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = IntentMatcher;
}
