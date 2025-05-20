const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { name, email, password } = req.body;

  // Logic login kamu di sini
  if (
    name === "Raka" &&
    email === "guru@example.com" &&
    password === "password123"
  ) {
    return res.json({ message: "Login berhasil", token: "dummy-jwt-token" });
  } else {
    return res.status(401).json({ message: "Email atau password salah" });
  }
});

module.exports = router;
