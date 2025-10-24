import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { ChatMessageSchema, ChatResponseSchema, EnvSchema } from '@netia/shared';
import { ChatService } from './services/chat-service';
import { FAQService } from './services/faq-service';
import { IntentService } from './services/intent-service';

dotenv.config();

const env = EnvSchema.parse(process.env);
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/chat', limiter);

// Initialize services
const faqService = new FAQService();
const intentService = new IntentService();
const chatService = new ChatService(env.OPENAI_API_KEY, env.ANTHROPIC_API_KEY, faqService);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    // Validate request
    const chatMessage = ChatMessageSchema.parse(req.body);
    
    // Get FAQ context
    const faqContext = await faqService.getRelevantFAQ(chatMessage.message);
    
    // Determine intent
    const intent = await intentService.determineIntent(chatMessage.message);
    
    // Generate response
    const response = await chatService.generateResponse({
      message: chatMessage.message,
      sessionId: chatMessage.sessionId,
      context: {
        ...chatMessage.context,
        faqContext,
        intent,
      },
    });

    // Validate response
    const validatedResponse = ChatResponseSchema.parse(response);
    
    res.json(validatedResponse);
  } catch (error) {
    console.error('❌ Chat error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      res.status(400).json({ error: 'Invalid request format' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// FAQ endpoint
app.get('/faq', async (req, res) => {
  try {
    const faqs = await faqService.getAllFAQs();
    res.json(faqs);
  } catch (error) {
    console.error('❌ FAQ error:', error);
    res.status(500).json({ error: 'Failed to load FAQs' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🤖 Bot server running on port ${PORT}`);
  console.log(`📚 FAQ service initialized`);
  console.log(`🧠 Intent service initialized`);
  console.log(`💬 Chat service initialized`);
});

export default app;
