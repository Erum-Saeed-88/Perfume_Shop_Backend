import express from 'express';
import { createOrder } from '../controllers/orderController.js';

const router = express.Router();

// POST /api/orders -> Order generation route (Handles COD & Stripe)
router.post('/', createOrder);

export default router;