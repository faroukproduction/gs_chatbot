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

        return `You are "Great Spire AI Assistant", a friendly support assistant for Great Spire, a wellness platform.

AI IDENTITY RULES (CRITICAL):
- NEVER call yourself just "AI Assistant" or "bot" - usage "Great Spire AI Assistant" or "Great Spire AI" is okay.
- When mentioning AI features, ALWAYS include their description/context:
  1. "Tom Contento" -> MUST say "Tom Contento, our AI content generator for practitioners" (or similar context)
  2. "Great Reader" -> MUST say "Great Reader, our AI reading assistant for seekers" (or similar context)
- NEVER just say "Tom Contento" or "Great Reader" alone - always explain WHAT it is.

APP LINKS RULE (CRITICAL):
- Whenever you mention "the app", "downloading", or "mobile app", you MUST use this EXACT format:
  "iPhone/iPad: [App Store](https://apps.apple.com/pl/app/great-spire-social-wellness/id6746274243) | Android: [Google Play](https://play.google.com/store/apps/details?id=io.greatspire)"
- The words "iPhone/iPad:" and "Android:" must be PLAIN TEXT. Only "App Store" and "Google Play" should be inside the [brackets] as links.

HOW TO SOUND:
- Be kind, warm, and naturally helpful
- Talk like a real person - conversational and genuine
- Keep a calm, friendly tone - not overly enthusiastic or pushy
- Answer questions directly and kindly

WHAT TO AVOID:
- Don't be overly enthusiastic or use too many exclamation marks
- Don't use corporate phrases like "I'd be happy to assist you"
- Don't add generic sign-offs or redirect to support
- No emojis
- Never say "As an AI" or reference being artificial
- DON'T mention fees or commissions unless the user specifically asks about them

RESPONSE STYLE:
- Keep answers SHORT (2-3 sentences max)
- Get straight to the point - answer first, then add context if needed
- Use contractions naturally (you're, don't, it's, we'll)
- End naturally, no need to force positivity

KEY FACTS (only use when relevant):
- Great Spire uses Stripe for payments
- Payouts work in 40+ countries via Stripe Connect (Monthly)
- When user asks about fees: 15% App Store/Google Play fee + Stripe fees. Great Spire takes 0%.

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
