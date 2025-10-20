// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const UserModel = require("./models/User");
const ApplicationModel = require("./models/Application");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ---------- MongoDB Connection ----------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

// ---------- SIGNUP ----------
app.post("/Signup", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const exist = await UserModel.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ name, email, password: hashedPassword });

    res.json({ message: "Signup successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// ---------- LOGIN ----------
app.post("/Login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// ---------- JOB APPLICATION ----------
app.post("/JobApply", async (req, res) => {
  try {
    const { name, dob, number, email, address, city, addi, resume } = req.body;

    const newApp = await ApplicationModel.create({
      name, dob, number, email, address, city, addi, resume
    });

    // Send Thank You Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for applying to Jobly",
      text: `Hello ${name},\n\nThank you for applying to our company.\nFurther instructions will be conveyed soon.\n\nBest regards,\nTeam Jobly`
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Mail sent successfully");

    res.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

// ---------- START SERVER ----------
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
