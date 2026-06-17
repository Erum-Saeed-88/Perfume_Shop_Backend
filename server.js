import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Database se connect karein
connectDB();

const app = express();

// =========================================================================
// 🎛️ PRODUCTION-READY CORS SECURITY MATRIX
// =========================================================================
const allowedOrigins = [
  'http://localhost:5173', // Vite Local Client
  'http://localhost:3000', // React Common Local Client
  'https://perfume-store-frontend-chi.vercel.app' // 🔥 AAPKA LIVE FRONTEND DOMAIN
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, postman, or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(`❌ CORS Security Layer Blocked Origin: ${origin}`);
      callback(new Error('Not allowed by CORS policy infrastructure'));
    }
  },
  credentials: true, // Cookies ya Auth Headers allow karne ke liye
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Pre-flight pre-routing check mapping


// Global Middlewares
app.use(express.json()); // JSON payload parse karne ke liye

// API Base Routes Injection
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Base Test Route
app.get('/', (req, res) => {
  res.send('Welcome To Scentsation Premium Perfume Store...!');
});

// Custom Error Handling Middlewares (Routes ke baad lagana mandatory hai)
app.use(notFound);
app.use(errorHandler);

// Server Listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Perfume Store Server running on port ${PORT}`);
});