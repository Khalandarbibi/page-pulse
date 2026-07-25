const { auditWebsite } = require("../services/audit.service");

exports.auditUrl = async (req, res, next) => {
    try {
        const { url } = req.body;

        const result = await auditWebsite(url);

    res.status(200).json({
        success: true,
        requestId: req.requestId,
        data: result
    });

    } catch (error) {
    next(error);
}
};