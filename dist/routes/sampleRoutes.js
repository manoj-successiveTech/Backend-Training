"use strict";
// src/routes/sampleRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../middleware/authenticate");
const logger_1 = require("../middleware/logger");
const customHeader_1 = require("../middleware/customHeader");
const router = express_1.default.Router();
/**
 * GET /api/protected
 * Middleware applied: logger → customHeader → authenticate
 * Response: success message + user info from JWT
 */
router.get("/protected", logger_1.logger, (0, customHeader_1.customHeader)("X-Server", "ExpressTS"), authenticate_1.authenticate, (req, res) => {
    const user = req.user; // `user` added by authenticate middleware
    res.status(200).json({
        message: "Access granted to protected route.",
        user
    });
});
exports.default = router;
//# sourceMappingURL=sampleRoutes.js.map