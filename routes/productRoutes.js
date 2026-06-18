import express from 'express';
const router = express.Router();
import { upload } from '../config/cloudinary.js'; 

// 🎯 FIXED: Imported all dynamic MongoDB handlers from your productController
import { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct, 
  toggleBlockProduct 
} from '../controllers/productController.js'; 
// (Tasalli kar lein aapke controller ka path exactly yahi ho)

// 🚀 1. GET ALL PRODUCTS (Ab yeh database se dynamic filtered products layega)
router.get('/', getProducts);

// 🚀 2. CREATE PRODUCT (Admin Dashboard Secure Endpoint with Cloudinary handling)
router.post('/', (req, res, next) => {
  upload.single('image')(req, res, function (err) {
    if (err) {
      console.error("❌ CLOUDINARY/MULTER ERROR LOG:", err.message);
      return res.status(400).json({ 
        success: false, 
        message: "Cloudinary image upload breakdown!", 
        error: err.message 
      });
    }
    next();
  });
}, createProduct); // 🎯 FIXED: Controller map inject kar diya jo MongoDB mein save karega

// 🚀 3. UPDATE PRODUCT BY ID
router.put('/:id', upload.single('image'), updateProduct); // 🎯 FIXED: Connected to controller

// 🚀 4. DELETE PRODUCT BY ID
router.delete('/:id', deleteProduct); // 🎯 FIXED: Connected to controller

// 🚀 5. TOGGLE BLOCK/UNBLOCK PRODUCT
router.patch('/:id/toggle-block', toggleBlockProduct); // 🎯 FIXED: Connected to controller

export default router;