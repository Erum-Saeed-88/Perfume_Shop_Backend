import express from 'express';
import { registerUser, authUser } from '../controllers/authController.js';

const router = express.Router();

// Public routes for user onboarding
router.post('/register', registerUser);
router.post('/login', authUser);

export default router;