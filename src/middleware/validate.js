const Joi = require("joi");

const auditSchema = Joi.object({
    url: Joi.string()
        .uri({
            scheme: ["http", "https"]
        })
        .required()
});

const validateAudit = (req, res, next) => {
    const { error } = auditSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    next();
};

module.exports = validateAudit;