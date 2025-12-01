const Login = require("../models/Login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // 1. Find user with email + role
    const user = await Login.findOne({ email, role });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or role" });
    }

    // 2. Validate password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: "Invalid password" });
    // }

    // 3. Create JWT
    const token = jwt.sign(
      { id: user._id, name:user.name, role: user.role },
       process.env.JWT_SECRET, // 🔐 move to .env later
      { expiresIn: "1h" }
    );

    // 4. Send success response
    res.json({
      message: "Login successful",
      token,
      redirectUrl: user.role === "admin" ? "/admin/dashboard" : "/user/dashboard",
      // console.log("✅ User logged in:", user.email, "as", user.role)
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };
