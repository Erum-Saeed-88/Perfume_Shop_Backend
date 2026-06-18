import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js'; // Aapka model path
import LuxuryProducts from './data/productData.js'; // Aapka local data file path

dotenv.config();

const seedData = async () => {
  try {
    // 1. Database se connect karein
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected for Seeding...");

    // 2. Purana koi kachra data ho toh saaf karein (Optional)
    await Product.deleteMany();
    console.log("🗑️ Old products cleared.");

    // 3. Local file wala data MongoDB mein insert karein
    // Hum _id ko delete kar rahe hain taake MongoDB apni unique ID generate kare
    const dataToImport = LuxuryProducts.map(p => {
        const { _id, ...rest } = p;
        return rest;
    });

    await Product.insertMany(dataToImport);
    console.log("🚀 Data Successfully Uploaded to MongoDB Atlas!");

    process.exit(); // Script band karein
  } catch (error) {
    console.error("❌ Seeding Failed:", error.message);
    process.exit(1);
  }
};

seedData();