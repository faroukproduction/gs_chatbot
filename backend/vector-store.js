/**
 * Vector Store for Great Spire Chatbot
 * In-memory vector store with cosine similarity search
 */

import { knowledgeDocuments } from './knowledge-documents.js';

class VectorStore {
    constructor() {
        this.documents = [];
        this.embeddings = [];
        this.isInitialized = false;
    }

    /**
     * Initialize the vector store with embeddings
     * @param {Function} embeddingFn - Function to generate embeddings
     */
    async initialize(embeddingFn) {
        console.log('Initializing vector store with', knowledgeDocuments.length, 'documents...');

        for (const doc of knowledgeDocuments) {
            // Create embedding text from title + content + keywords
            const embeddingText = `${doc.title} ${doc.content} ${doc.keywords.join(' ')}`;

            try {
                const embedding = await embeddingFn(embeddingText);
                this.documents.push(doc);
                this.embeddings.push(embedding);
            } catch (error) {
                console.error(`Failed to embed document ${doc.id}:`, error.message);
            }
        }

        this.isInitialized = true;
        console.log('Vector store initialized with', this.documents.length, 'embeddings');
    }

    /**
     * Calculate cosine similarity between two vectors
     */
    cosineSimilarity(vecA, vecB) {
        let dotProduct = 0;
        let normA = 0;
        let normB = 0;

        for (let i = 0; i < vecA.length; i++) {
            dotProduct += vecA[i] * vecB[i];
            normA += vecA[i] * vecA[i];
            normB += vecB[i] * vecB[i];
        }

        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    /**
     * Search for most relevant documents
     * @param {Array} queryEmbedding - Query embedding vector
     * @param {number} topK - Number of results to return
     * @param {number} threshold - Minimum similarity threshold
     */
    search(queryEmbedding, topK = 3, threshold = 0.7) {
        if (!this.isInitialized) {
            throw new Error('Vector store not initialized');
        }

        const results = [];

        for (let i = 0; i < this.embeddings.length; i++) {
            const similarity = this.cosineSimilarity(queryEmbedding, this.embeddings[i]);

            if (similarity >= threshold) {
                results.push({
                    document: this.documents[i],
                    similarity
                });
            }
        }

        // Sort by similarity and return top K
        results.sort((a, b) => b.similarity - a.similarity);
        return results.slice(0, topK);
    }

    /**
     * Get documents by category
     */
    getByCategory(category) {
        return this.documents.filter(doc => doc.category === category);
    }

    /**
     * Get all document IDs
     */
    getDocumentIds() {
        return this.documents.map(doc => doc.id);
    }
}

// Singleton instance
export const vectorStore = new VectorStore();
