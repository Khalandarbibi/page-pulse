const express = require("express");
const auditRoutes = require("./routes/audit.routes");
const app = express();
const errorHandler = require("./middleware/errorHandler");

// Parse JSON request bodies
app.use(express.json());
app.use(express.json());
app.use("/api/v1", auditRoutes);
app.use(errorHandler);

// Health check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Page Pulse API is running 🚀"
    });
});

module.exports = app;