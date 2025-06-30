const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// middleware verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token dibutuhkan" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token tidak valid" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token tidak valid" });
    req.user = decoded;
    next();
  });
};

// GET /user/dashboard
router.get("/SideBar", verifyToken, (req, res) => {
  res.json({
    message: `Halo ${req.user.name}, kamu login sebagai ${req.user.role}`,
  });
});

module.exports = router;
