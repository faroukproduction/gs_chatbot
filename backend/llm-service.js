/**
 * LLM Service for Great Spire Chatbot
 * OpenAI integration for embeddings and chat completion
 */

import OpenAI from 'openai';
import { vectorStore } from './vector-store.js';


class LLMService {
    constructor() {
        this.openai = null;
        this.model = 'gpt-4o-mini'; // Cost-effective model
        this.embeddingModel = 'text-embedding-3-small';
    }

    /**
     * Initialize with API key
     */
    initialize(apiKey) {
        this.openai = new OpenAI({ apiKey });
        console.log('LLM Service initialized');
    }

    /**
     * Generate embedding for text
     */
    async generateEmbedding(text) {
        if (!this.openai) {
            throw new Error('LLM Service not initialized');
        }

        const response = await this.openai.embeddings.create({
            model: this.embeddingModel,
            input: text.slice(0, 8000) // Token limit safety
        });

        return response.data[0].embedding;
    }

    /**
     * Detect language from text
     */
    detectLanguage(text) {
        const patterns = {
            es: /\b(hola|qué|cómo|puedo|quiero|gracias|ayuda|como)\b/i,
            fr: /\b(bonjour|comment|merci|aide|quel|je|vous)\b/i,
            de: /\b(hallo|wie|kann|danke|hilfe|was|ich)\b/i,
            ar: /[\u0600-\u06FF]/
        };

        for (const [lang, pattern] of Object.entries(patterns)) {
            if (pattern.test(text)) {
                return lang;
            }
        }
        return 'en';
    }

    /**
     * Build system prompt for RAG
     */
    buildSystemPrompt(language) {
        const languageInstructions = {
            en: 'Respond in English.',
            es: 'Responde en español.',
            fr: 'Réponds en français.',
            de: 'Antworte auf Deutsch.',
            ar: 'أجب باللغة العربية.'
        };

        return `You are the Great Spire AI Assistant, a professional chatbot for wellness practitioners.

ROLE:
- Help practitioners understand Great Spire's platform for creating and selling digital wellness content
- Answer questions using the provided context AND your general knowledge when needed
- For payment/banking questions about specific countries, use your knowledge about Stripe's global availability

TONE:
- Professional, warm, and helpful
- Do not use emojis
- Be direct and concise

RESPONSE FORMAT:
- Keep answers SHORT (2-3 sentences max)
- Do NOT add generic sign-offs like "For more details, visit Support"
- Do NOT append links at the end of every response
- Only include a link if it directly answers the question
- End your answer naturally without redirecting to support

KEY FACTS:
- Great Spire uses Stripe for payments (100% earnings kept, only Stripe fees apply)
- Payouts work in 40+ countries via Stripe Connect
- Monthly payouts

${languageInstructions[language] || languageInstructions.en}`;
    }

    /**
     * Generate RAG response
     */
    async generateResponse(query, context, language = 'en') {
        if (!this.openai) {
            throw new Error('LLM Service not initialized');
        }

        // Build context from retrieved documents (may be empty)
        let contextText = '';
        if (context && context.length > 0) {
            contextText = context.map(item => {
                const doc = item.document;
                return `[${doc.title}] (Source: ${doc.source})\n${doc.content}\nLink: ${doc.sourceUrl}`;
            }).join('\n\n---\n\n');
        }

        // Build user message - with or without context
        let userMessage;
        if (contextText) {
            userMessage = `Based on the following context about Great Spire, answer this question concisely:\n\nCONTEXT:\n${contextText}\n\nQUESTION: ${query}\n\nProvide a brief, helpful answer. Keep it to 2-3 sentences or a few bullet points.`;
        } else {
            userMessage = `Answer this question about Great Spire (a wellness content platform) using your general knowledge:\n\nQUESTION: ${query}\n\nProvide a brief, helpful answer. Keep it to 2-3 sentences. If it's about payments/banking, mention that Great Spire uses Stripe.`;
        }

        const messages = [
            {
                role: 'system',
                content: this.buildSystemPrompt(language)
            },
            {
                role: 'user',
                content: userMessage
            }
        ];

        const response = await this.openai.chat.completions.create({
            model: this.model,
            messages,
            temperature: 0.7,
            max_tokens: 250  // Shorter responses
        });

        return {
            answer: response.choices[0].message.content,
            sources: context.map(item => ({
                title: item.document.title,
                source: item.document.source,
                url: item.document.url,
                similarity: item.similarity
            })),
            language,
            tokensUsed: response.usage?.total_tokens || 0
        };
    }

    /**
     * Full RAG pipeline: query -> embedding -> search -> generate
     */
    async chat(query) {
        // Detect language
        const language = this.detectLanguage(query);

        // Generate query embedding
        const queryEmbedding = await this.generateEmbedding(query);

        // Search vector store
        const searchResults = vectorStore.search(queryEmbedding, 3, 0.3);

        // Always generate AI response - use context if available, general knowledge if not
        return await this.generateResponse(query, searchResults, language);
    }
}

// Singleton instance
export const llmService = new LLMService();
