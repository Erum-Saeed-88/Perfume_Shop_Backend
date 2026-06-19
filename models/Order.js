import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  // 🎯 NOTE: Frontend handles object payload string formats seamlessly
  shippingAddress: { 
    type: String, 
    required: true 
  },
  orderItems: [
    {
      productId: { 
        type: String, // 🎯 FIXED: Accepts raw string formats like "m_bs_1" perfectly
        required: true 
      },
      name: { 
        type: String, 
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true 
      },
      image: { 
        type: String 
      },
      price: { 
        type: Number, 
        required: true 
      }
    }
  ],
  totalPrice: { 
    type: Number, 
    required: true 
  },
  paymentMethod: { 
    type: String, 
    required: true, 
    enum: ['COD', 'Stripe'], // 💳 Accepts both Cash on Delivery and Credit Cards
    default: 'Stripe'
  },
  isPaid: { 
    type: Boolean, 
    required: true, 
    default: false // COD orders will always default to false until delivered
  },
  paidAt: { 
    type: Date 
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;