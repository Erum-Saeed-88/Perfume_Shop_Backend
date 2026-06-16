// 🎯 FIXED: Imported as default module first to ensure Node.js v26 standard resolution
import cloudinaryModule from 'cloudinary';
const cloudinary = cloudinaryModule.v2;

import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

// env variables ko load karne ke liye config initializing
dotenv.config();

/**
 * 🛰️ CLOUDINARY CONFIGURATION MATRIX
 * Environment variables se aapke secure keys fetch karega.
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * 📦 STORAGE ENGINE SETUP
 * Yeh engine automatic images ko optimized formats mein convert karke 
 * direct Scentsation Vault ke folder mein push karega.
 */
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Scentsation_Products', // Cloudinary par aapka custom folder name
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'], // Transmissions protocols
    transformation: [
      { width: 800, height: 800, crop: 'limit' }, // Auto responsive scaling limit
      { quality: 'auto' }, // Core AI compression optimization
    ],
  },
});

/**
 * 🛡️ FILE FILTER MATRIX
 * Server security framework taake koi user/admin malicious code script text 
 * ya wrong file extension upload na kar sake.
 */
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid vector. Only image files are authorized for upload!'), false);
  }
};

// Multer Upload Middleware Blueprint
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Maximum payload limit: 5MB per image
});

export { cloudinary, upload };