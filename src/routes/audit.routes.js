const express = require("express");
const router = express.Router();

const auditController = require("../controllers/audit.controller");
const validateAudit = require("../middleware/validate");

router.post("/audit", validateAudit, auditController.auditUrl);

module.exports = router;