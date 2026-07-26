const express = require("express");
const pinoHttp = require("pino-http");

const logger = require("./logger/logger");
const requestId = require("./middleware/requestId");
const errorHandler = require("./middleware/errorHandler");
const auditRoutes = require("./routes/audit.routes");
const limiter = require("./middleware/rateLimiter");

const app = express();

// Parse JSON request bodies
app.use(express.json());
app.use(limiter);
// Add Request ID
app.use(requestId);

// HTTP Logging
app.use(
    pinoHttp({
        logger
    })
);

// Routes
app.use("/api/v1", auditRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Page Pulse API is running 🚀",
        project: "Built for Digital Heroes Training Task",
        website: "https://digitalheroesco.com"
    });
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;