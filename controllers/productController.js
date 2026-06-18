import Product from '../models/Product.js';

// @desc    Get all active/unblocked products (With Filtering & Sorting)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    // 🎯 FIX: Unblocked filters handles fields safely if 'isBlocked' is undefined/missing in database entries
    let query = { isBlocked: { $ne: true } };

    // 1. Filtering by Category
    if (req.query.category && req.query.category !== 'undefined') {
      query.category = req.query.category;
    }

    // 2. Sorting Setup
    let sortCriteria = '-createdAt'; // Default dynamic sort by newest
    if (req.query.sort) {
      sortCriteria = req.query.sort === 'priceAsc' ? 'price' : '-price';
    }

    // 🎯 FIX: Directly execution in single await pool to prevent Vercel Serverless decoupling freeze
    const products = await Product.find(query).sort(sortCriteria);

    if (!products) {
      return res.status(200).json([]);
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("❌ CRITICAL DATABASE FETCH FAILURE:", error.message);
    res.status(500).json({ 
      success: false, 
      message: "Database pipeline breakdown!", 
      error: error.message 
    });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Admin
export const createProduct = async (req, res) => {
  try {
    const { name, brand, price, description, category, gender, isLatest, countInStock } = req.body;

    let finalImageUrl = req.body.image || req.body.imageUrl || "";
    if (req.file) {
      finalImageUrl = req.file.path || req.file.location; 
    }

    const product = new Product({
      name,
      brand,
      price,
      description,
      category,
      gender,                               
      isLatest: isLatest === 'true' || isLatest === true, 
      image: finalImageUrl,                 
      countInStock: Number(countInStock) || 0,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Admin
export const updateProduct = async (req, res) => {
  try {
    const { name, brand, price, description, category, gender, isLatest, countInStock } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      let finalImageUrl = product.image;
      if (req.file) {
        finalImageUrl = req.file.path || req.file.location;
      } else if (req.body.image || req.body.imageUrl) {
        finalImageUrl = req.body.image || req.body.imageUrl;
      }

      product.name = name || product.name;
      product.brand = brand || product.brand;
      product.price = price || product.price;
      product.description = description || product.description;
      product.category = category || product.category;
      product.gender = gender || product.gender; 
      product.isLatest = isLatest !== undefined ? (isLatest === 'true' || isLatest === true) : product.isLatest; 
      product.image = finalImageUrl; 
      product.countInStock = countInStock !== undefined ? Number(countInStock) : product.countInStock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed permanently' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Toggle Block/Unblock a product
// @route   PATCH /api/products/:id/toggle-block
// @access  Admin
export const toggleBlockProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.isBlocked = !product.isBlocked;
      const updatedProduct = await product.save();
      res.json({
        message: `Product has been successfully ${updatedProduct.isBlocked ? 'Blocked' : 'Unblocked'}`,
        product: updatedProduct,
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};