/**
 * Great Spire Chatbot Backend Server
 * Express server with RAG API endpoints
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { vectorStore } from './vector-store.js';
import { llmService } from './llm-service.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend files with absolute path

// Request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
    next();
});

// Root route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        vectorStoreReady: vectorStore.isInitialized,
        documentsCount: vectorStore.documents.length
    });
});

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Check if API key is configured
        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: 'OpenAI API key not configured',
                fallback: true,
                answer: 'The AI backend is not configured. Please set up your OpenAI API key.'
            });
        }

        // Generate response using RAG
        const startTime = Date.now();
        const response = await llmService.chat(message);
        const responseTime = Date.now() - startTime;

        // Log for analytics (in production, store this)
        console.log({
            sessionId,
            query: message,
            language: response.language,
            sourcesCount: response.sources?.length || 0,
            fallback: response.fallback || false,
            responseTimeMs: responseTime,
            tokensUsed: response.tokensUsed || 0
        });

        res.json({
            success: true,
            ...response,
            responseTimeMs: responseTime
        });

    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({
            error: 'Failed to generate response',
            answer: 'Sorry, I encountered an error. Please try again or contact support@greatspire.io',
            fallback: true
        });
    }
});

// Get available categories
app.get('/api/categories', (req, res) => {
    res.json({
        categories: Object.keys(vectorStore.documents.reduce((acc, doc) => {
            acc[doc.category] = true;
            return acc;
        }, {}))
    });
});

// Initialize and start server
async function start() {
    try {
        // Check for API key
        if (!process.env.OPENAI_API_KEY) {
            console.warn('⚠️  OPENAI_API_KEY not set. RAG features will not work.');
            console.warn('   Create a .env file with your OpenAI API key.');
        } else {
            // Initialize LLM service
            llmService.initialize(process.env.OPENAI_API_KEY);

            // Initialize vector store with embeddings
            console.log('Loading embeddings...');
            await vectorStore.initialize((text) => llmService.generateEmbedding(text));
            console.log('✅ Vector store ready');
        }

        // Start server
        app.listen(PORT, () => {
            console.log(`\n🚀 Great Spire Chatbot Backend running on http://localhost:${PORT}`);
            console.log(`   Health check: http://localhost:${PORT}/api/health`);
            console.log(`   Chat API: POST http://localhost:${PORT}/api/chat\n`);
        });

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

start();
