import Product from '../models/Product.js';

// @desc    Get all active/unblocked products (With Filtering & Sorting)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    // Sirf wahi products aayenge jo blocked nahi hain (isBlocked: false)
    let query = { isBlocked: false };

    // 1. Filtering by Category
    if (req.query.category) {
      query.category = req.query.category;
    }

    let apiQuery = Product.find(query);

    // 2. Sorting by Price
    if (req.query.sort) {
      // Example: ?sort=priceAsc (Low to High) or ?sort=priceDesc (High to Low)
      const sortBy = req.query.sort === 'priceAsc' ? 'price' : '-price';
      apiQuery = apiQuery.sort(sortBy);
    } else {
      apiQuery = apiQuery.sort('-createdAt'); // Default dynamic sort by newest
    }

    const products = await apiQuery;
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Admin
export const createProduct = async (req, res) => {
  try {
    // 🎯 FIXED: Added 'gender' and 'isLatest' fields which were completely missing from destruction matrix
    const { name, brand, price, description, category, gender, isLatest, countInStock } = req.body;

    // 🛠️ FILE HANDLING FIX: Detect if multer uploaded file path exists, otherwise fallback to text URL
    let finalImageUrl = req.body.image || req.body.imageUrl || "";
    if (req.file) {
      // Agar aap standard diskStorage use kar rahe hain ya Cloudinary config
      finalImageUrl = req.file.path || req.file.location; 
    }

    const product = new Product({
      name,
      brand,
      price,
      description,
      category,
      gender,                               // 🎯 FIXED: Saved gender route maps
      isLatest: isLatest === 'true' || isLatest === true, // 🎯 FIXED: Form data sends strings, converted to Boolean safely
      image: finalImageUrl,                 // 🎯 FIXED: Mapping image data to your strict database keys
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
      // 🛠️ Updating Image parameters if new asset binary is passed during updates
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
      product.gender = gender || product.gender; // 🎯 FIXED
      product.isLatest = isLatest !== undefined ? (isLatest === 'true' || isLatest === true) : product.isLatest; // 🎯 FIXED
      product.image = finalImageUrl; // 🎯 FIXED
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