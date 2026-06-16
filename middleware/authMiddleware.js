import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// 1. Route ko protect karne ka middleware (Check token)
export const protect = async (req, res, next) => {
  let token;

  // Check karein ke header me Authorization token hai ya nahi
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // "Bearer <token>" me se token alag karein
      token = req.headers.authorization.split(' ')[1];

      // Token decode aur verify karein
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // User ka data database se nikal kar request object (req.user) me save karein (password chor kar)
      req.user = await User.findById(decoded.id).select('-password');

      // Agle function/controller par jao
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

// 2. Sirf Admin routes ke liye access control middleware
export const admin = (req, res, next) => {
  if (req.user && req.user?.role?.toLowerCase() === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an Admin' });
  }
};