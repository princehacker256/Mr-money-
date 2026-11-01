
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(__dirname));

// Website health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "running",
    service: "Mr Money Backend"
  });
});

// Payment endpoint is intentionally disabled
// until the official MarzPay API and verification
// requirements are configured.
app.post("/api/payment/request", (req, res) => {
  res.status(503).json({
    success: false,
    message: "Payment integration is not configured yet."
  });
});

// Do not activate accounts from an unverified request.
app.post("/api/payment/callback", (req, res) => {
  res.status(503).json({
    success: false,
    message: "Payment verification is not configured yet."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Mr Money server running on port ${PORT}`);
});
