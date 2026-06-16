import express from 'express';
const router = express.Router();
import LuxuryProducts from '../data/productData.js';
import { upload } from '../config/cloudinary.js'; 

// 🚀 1. GET ALL PRODUCTS
router.get('/', (req, res) => {
  try {
    res.status(200).json(LuxuryProducts);
  } catch (error) {
    res.status(500).json({ message: "Error streaming master vault products", error: error.message });
  }
});

// 🚀 2. CREATE PRODUCT (Admin Dashboard Secure Endpoint)
// 🎯 FIXED: Wrapped upload middleware inside an error handler to intercept Cloudinary crashes
router.post('/', (req, res, next) => {
  upload.single('image')(req, res, function (err) {
    if (err) {
      // 🔥 Agar Cloudinary configuration (API Key/Cloud Name) ya upload mein galti hui toh yahan terminal par print hoga
      console.error("❌ CLOUDINARY/MULTER ERROR LOG:", err.message);
      return res.status(400).json({ 
        success: false, 
        message: "Cloudinary image upload breakdown! Check your credentials/file format.", 
        error: err.message 
      });
    }
    // Agar koi error nahi aayi, toh agle function par jao
    next();
  });
}, async (req, res) => {
  try {
    const { name, brand, description, price, category, countInStock, gender, isLatest } = req.body;
    
    // Cloudinary image URL parsing
    const imagePath = req.file ? req.file.path : ''; 

    // Safety validation block
    if (!name || !brand || !price) {
      return res.status(400).json({ message: "Required fields (Name, Brand, Price) are missing!" });
    }

    const newProduct = {
      _id: (LuxuryProducts.length + 1).toString(), // Temporary mock ID generator
      name,
      brand: brand || "Generic House",                      // 🎯 Brand mapped properly
      description: description || "Premium authentic fragrance imported directly for luxury connoisseurs.",
      price: Number(price) || 0,
      category: category || "Eau De Perfume",
      countInStock: Number(countInStock) || 0,
      gender: gender || "Men",
      isLatest: isLatest === 'true' || isLatest === true,   // 🎯 Safely converted string to Boolean
      image: imagePath || "https://via.placeholder.com/300" // Fallback placeholder if upload lags
    };

    // Push into your server side data matrix array
    LuxuryProducts.push(newProduct);

    // Directly return the single created object so frontend context array sets up instantly
    res.status(201).json(newProduct);

  } catch (error) {
    console.error("🔥 ROUTE CRASH ERROR:", error.message);
    res.status(500).json({ message: "Failed to inject product into database matrix.", error: error.message });
  }
});

// 🚀 3. GET SINGLE PRODUCT BY ID 
router.get('/:id', (req, res) => {
  const product = LuxuryProducts.find(p => p._id === req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not located inside the database matrix." });
  }
});

export default router;