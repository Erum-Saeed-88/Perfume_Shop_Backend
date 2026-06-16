import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  // 🎯 ULTRA-SAFE INNER WRAPPER: Kisi bhi haal mein crash nahi hone dega
  try {
    if (!to) {
      console.error("❌ NODEMAILER ERROR: Recipient email ('to') is missing!");
      return false;
    }

    // Transporter initialization inside try block
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Aapka 16-digit Google App Password
      },
    });

    // Email options setup
    const mailOptions = {
      from: `"Scentsation Premium Store" <${process.env.EMAIL_USER}>`,
      to: to.trim(),
      subject: subject,
      text: text,
    };

    console.log(`📡 SMTP Link setup check completed. Attempting dispatch to: ${to}...`);

    // 🎯 FIXED: Direct secure await injection to handle third-party promise breaks cleanly
    const info = await transporter.sendMail(mailOptions);
    
    console.log(`✅ SUCCESS: Confirmation email sent to ${to}. MessageID: ${info.messageId}`);
    return true;

  } catch (error) {
    // 🎯 CRITICAL FIX: Yeh line ab app ko crash nahi hone degi, balki terminal par error dikhaye gi!
    console.error("====================================================");
    console.error("❌ NODEMAILER CONFIG/SMTP DISPATCH ERROR:");
    console.error(error.message);
    console.error("====================================================");
    return false;
  }
};

export default sendEmail;