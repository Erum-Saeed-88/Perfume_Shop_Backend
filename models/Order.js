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
  shippingAddress: { 
    type: String, 
    required: true 
  },
  orderItems: [
    {
      productId: { 
        type: String, // 🎯 FIXED: ObjectId se badal kar String kar diya taake "m_bs_1" jaise format accept ho sakein
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
    enum: ['COD', 'Stripe'] 
  },
  isPaid: { 
    type: Boolean, 
    required: true, 
    default: false 
  },
  paidAt: { 
    type: Date 
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;