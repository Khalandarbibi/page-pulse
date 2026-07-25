const { auditWebsite } = require("../services/audit.service");

exports.auditUrl = async (req, res, next) => {
    try {
        const { url } = req.body;

        const result = await auditWebsite(url);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
    next(error);
}
};