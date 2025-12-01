const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Admin dashboard route
router.get("/admin/dashboard", authMiddleware, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  res.json({ message: "Welcome Admin Dashboard!" });
});

// User dashboard route
router.get("/user/dashboard", authMiddleware, (req, res) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Access denied. Users only." });
  }
  res.json({ message: "Welcome User Dashboard!" });
});

module.exports = router;
