const logger = require("../logger/logger");

const errorHandler = (err, req, res, next) => {
    logger.error({
        requestId: req.requestId,
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });

    res.status(err.status || 500).json({
        success: false,
        requestId: req.requestId,
        statusCode: err.status || 500,
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;