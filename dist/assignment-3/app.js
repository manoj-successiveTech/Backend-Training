"use strict";
// assignment-3/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../middleware/authenticate");
const logger_1 = require("../middleware/logger");
const errorHandler_1 = require("../middleware/errorHandler");
const customHeader_1 = require("../middleware/customHeader");
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
// Assignment-3 specific middlewares
router.use(logger_1.logger); // Q9 - Log requests
// router.use(rateLimiter);                       // Q13 - Rate limiting
router.use((0, customHeader_1.customHeader)("Assignment-3-Header", "ExpressTS")); // Q12 - Custom header
// Q5 - POST API with Authentication Middleware
router.post("/seed", authenticate_1.authenticate, UserController_1.seedData); // Q6/Q7
// Q11 - Chained Middleware Example
router.get("/chain", errorHandler_1.errorHandler, logger_1.logger, authenticate_1.authenticate, (req, res) => {
    res.json({ message: "Chained middleware executed successfully." });
});
// Sample error route to trigger error handler
router.get("/error", errorHandler_1.errorHandler, (req, res) => {
    throw new Error("Intentional error for testing error handler");
});
// Error handling middleware (Q10)
// router.use(errorHandler);
exports.default = router;
//# sourceMappingURL=app.js.map