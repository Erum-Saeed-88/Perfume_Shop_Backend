import Order from '../models/Order.js';
import stripe from '../config/stripe.js';
import sendEmail from '../utils/sendEmail.js'; 

// @desc    Create a new order (Handles COD and Stripe both)
// @route   POST /api/orders
// @access  Public (or Authenticated)
export const createOrder = async (req, res) => {
  try {
    const { customerName, email, shippingAddress, orderItems, totalPrice, paymentMethod, stripeTokenId } = req.body;

    console.log("\n============================================================");
    console.log("👉 1. CREATE ORDER ROUTE HIT HUA!");
    console.log(`👤 Customer Name: ${customerName}`);
    console.log(`📧 Payload Email: "${email}"`);
    console.log(`💳 Payment Method: ${paymentMethod}`);
    console.log("============================================================\n");

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items selected' });
    }

    let isPaid = false;
    let paidAt = null;

    // --- STEP 1: Handle Stripe Payment Flow ---
    if (paymentMethod === 'Stripe') {
      console.log("👉 2. STRIPE PAYMENT METHOD BLOCK INITIALIZED!");

      if (!stripeTokenId) {
        return res.status(400).json({ message: 'Stripe token is missing for online payment' });
      }

      try {
        const charge = await stripe.charges.create({
          amount: Math.round(totalPrice * 100),
          currency: 'usd',
          source: stripeTokenId,
          description: `Payment for order by ${customerName}`,
        });

        if (charge.status === 'succeeded') {
          isPaid = true;
          paidAt = Date.now();
          console.log("👉 3. STRIPE CHARGE SUCCEEDED! PAYMENT STATUS MARKED AS TRUE ✅");
        } else {
          return res.status(400).json({ message: 'Stripe payment failed status received' });
        }
      } catch (stripeError) {
        console.error("❌ STRIPE SDK INTERNAL CRASH CAPTURED:", stripeError.message);
        return res.status(400).json({ message: `Stripe Payment Error: ${stripeError.message}` });
      }
    }

    // 🎯 Data Normalization: Frontend Object ko safe flat String address mein badal rahe hain
    let dbShippingAddress = '';
    if (typeof shippingAddress === 'object') {
      dbShippingAddress = `${shippingAddress.address}, ${shippingAddress.city}, ZIP: ${shippingAddress.zipCode}, Phone: ${shippingAddress.phone}`;
    } else {
      dbShippingAddress = shippingAddress;
    }

    // 🎯 Keys Normalization: Frontend data mapping safely matching the updated schema
    const dbOrderItems = orderItems.map(item => ({
      productId: String(item.product || item.productId || item._id), // Force string conversion
      name: item.name,
      quantity: Number(item.qty || item.quantity), 
      image: item.image,
      price: Number(item.price)
    }));

    const targetEmail = (email && email.trim() !== "") 
      ? email.trim() 
      : (req.body.userEmail || (req.user && req.user.email) || "");

    // --- STEP 2: Create Order in MongoDB Database ---
    const order = new Order({
      customerName,
      email: targetEmail, 
      shippingAddress: dbShippingAddress, 
      orderItems: dbOrderItems,           
      totalPrice,
      paymentMethod,
      isPaid,
      paidAt,
    });

    const createdOrder = await order.save();
    console.log(`👉 4. ORDER SECURELY SAVED IN MONGODB! ID: ${createdOrder._id}`);

    // --- STEP 3: Send Confirmation Email to the Authenticated User ---
    console.log(`👉 5. EMAIL DISPATCH PREPARATION... Target Recipient: "${targetEmail}"`);

    if (!targetEmail || targetEmail === "") {
      console.warn("⚠️ WARNING: Email skipped entirely because target recipient email address is UNDEFINED/EMPTY!");
    } else {
      const emailSubject = `Order Confirmed - Scentsation Premium Fragrance`;
      const emailText = `Dear ${customerName},\n\nThank you for shopping with Scentsation! Your order has been successfully placed.\n\nOrder ID: ${createdOrder._id}\nTotal Amount: Rs. ${totalPrice.toLocaleString()}\nPayment Method: ${paymentMethod}\nPayment Status: ${isPaid ? 'Paid (Stripe Gateway)' : 'Pending Payment (COD)'}\n\nWe will ship your premium fragrance shortly!\n\nBest regards,\nScentsation Team`;

      console.log(`📡 SMTP Handshake Engine firing up for: ${targetEmail}...`);
      
      try {
        await sendEmail(targetEmail, emailSubject, emailText);
        console.log("👉 6. sendEmail FUNCTION SUCCESSFULLY COMPLETED & PASSED AWAIT LAYER ✅");
      } catch (emailError) {
        console.error("❌ NODEMAILER ASYNC RUNTIME CRASH:", emailError.message);
      }
    }

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error("🔥 CRITICAL ORDER ROUTE ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
};