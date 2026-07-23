import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API client lazy initialization
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        aiClient = new GoogleGenAI({ apiKey });
      }
    }
    return aiClient;
  }

  // API Endpoint for AI Chat Assistant
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Mensagem necessária' });
      }

      const client = getGeminiClient();
      if (client) {
        const response = await client.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Você é o assistente oficial do sistema "Empresa Turbinada por IA", especialista em automação corporativa, chat com IA, extração de documentos, integração de sistemas e hospedagem na Vercel/Netlify. Responda em português de forma clara, profissional e objetiva em 2 a 3 frases à pergunta do cliente:\n\nCliente: ${message}`
        });

        const reply = response.text || 'Entendido! Podemos estruturar a automação ideal para a sua empresa.';
        return res.json({ reply });
      } else {
        // Fallback response when GEMINI_API_KEY is not configured
        return res.json({
          reply: `Excelente pergunta! Com o sistema Empresa Turbinada por IA, nós conectamos seu WhatsApp, CRM e banco de dados para automatizar o atendimento e processos. O projeto gerado também é 100% pronto para publicação na Vercel!`
        });
      }
    } catch (error) {
      console.error('Error handling /api/chat:', error);
      return res.json({
        reply: 'Conseguimos automatizar o atendimento e integração da sua empresa com facilidade. Gostaria de solicitar um diagnóstico gratuito?'
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
