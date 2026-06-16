import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },
  brand: { 
    type: String, 
    required: true,
    trim: true
  },
  price: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  description: { 
    type: String, 
    required: true 
  },
  // 🎯 FIXED: Category se 'Men'/'Women' hata kar text kiya kyunki aap 'Body Spray', 'Eau De Perfume' bhej rahe hain
  category: { 
    type: String, 
    required: true,
    enum: ['Body Spray', 'Eau De Perfume', 'Attar Perfume'] // Frontend dropdown values se match kar diya
  },
  // 🎯 FIXED: Gender field bilkul missing thi, isey add kiya aur strict validation lagayi
  gender: {
    type: String,
    required: true,
    enum: ['Men', 'Women'],
    default: 'Men'
  },
  // 🎯 FIXED: Frontend 'image' naam se data bhej raha hai, humne isey 'image' kar diya aur validation tight rakhi
  image: { 
    type: String, 
    required: true 
  },
  countInStock: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  // 🎯 FIXED: isLatest missing thi jis se form save karte waqt crash ho raha tha
  isLatest: {
    type: Boolean,
    required: true,
    default: false
  },
  isBlocked: { 
    type: Boolean, 
    required: true, 
    default: false 
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;