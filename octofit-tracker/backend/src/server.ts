import express, { Express, Request, Response } from 'express';
import connectDatabase from './config/database';

const app: Express = express();
const PORT = 8000;
const CODESPACE_NAME = process.env.CODESPACE_NAME;

// Build API base URL for Codespaces and localhost
const getApiBaseUrl = (): string => {
  if (CODESPACE_NAME) {
    return `https://${CODESPACE_NAME}-8000.app.github.dev`;
  }
  return `http://localhost:${PORT}`;
};

const API_BASE_URL = getApiBaseUrl();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDatabase()
  .then(() => {
    console.log('Server initialized successfully');
    console.log(`API Base URL: ${API_BASE_URL}`);
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'OctoFit Tracker API',
    apiBaseUrl: API_BASE_URL,
    codespaced: !!CODESPACE_NAME
  });
});

// API Routes for Users
app.get('/api/users', (req: Request, res: Response) => {
  res.json({ 
    message: 'Users endpoint',
    users: []
  });
});

app.post('/api/users', (req: Request, res: Response) => {
  res.json({ 
    message: 'User created',
    user: req.body
  });
});

// API Routes for Activities
app.get('/api/activities', (req: Request, res: Response) => {
  res.json({ 
    message: 'Activities endpoint',
    activities: []
  });
});

app.post('/api/activities', (req: Request, res: Response) => {
  res.json({ 
    message: 'Activity created',
    activity: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${API_BASE_URL}`);
  console.log(`Codespace: ${CODESPACE_NAME || 'Not in Codespaces'}`);
});
