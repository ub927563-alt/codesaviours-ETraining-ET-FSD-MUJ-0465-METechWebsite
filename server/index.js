
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const serviceRoutes = require("./routes/serviceRoutes");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to ME Technologies API",
  });
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "ME Technologies server is running",
  });
});

// Services API routes
app.use("/api/services", serviceRoutes);
app.use("/api/leads", leadRoutes);

// Start server after connecting to MongoDB
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
