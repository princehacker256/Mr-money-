
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json({ limit: "100kb" }));

// Serve website files from the public folder only
app.use(express.static(path.join(__dirname, "public")));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "running",
    service: "Mr Money Backend"
  });
});

// Payment request - disabled until MarzPay is verified
app.post("/api/payment/request", (req, res) => {
  res.status(503).json({
    success: false,
    message: "MarzPay payment integration is not ready yet."
  });
});

// Payment callback - no automatic activation
app.post("/api/payment/callback", (req, res) => {
  res.status(503).json({
    success: false,
    message: "Payment verification is not configured yet."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Mr Money server running on port ${PORT}`);
});
