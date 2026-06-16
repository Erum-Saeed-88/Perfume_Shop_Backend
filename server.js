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

// Global Middlewares
app.use(cors());
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