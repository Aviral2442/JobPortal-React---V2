const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connectDB = require("./connection");
const Login = require("./models/Login");

const createAdmin = async () => {
  await connectDB();

  const hashedPassword = await bcrypt.hash("admin@login", 10);

  const admin = new Login({
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin",
  });

  await admin.save();
  console.log("✅ Admin user created");
  process.exit();
};

createAdmin();
