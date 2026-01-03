# Great Spire Chatbot Backend

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

3. Seed the vector embeddings:
```bash
npm run seed
```

4. Start the server:
```bash
npm start
```

## API Endpoints

- `POST /api/chat` - Send a message and get AI response
- `GET /api/health` - Health check

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key
- `PORT` - Server port (default: 3001)
