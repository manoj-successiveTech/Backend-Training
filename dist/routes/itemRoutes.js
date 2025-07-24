"use strict";
//itemRoutes.ts 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateQueryParams_1 = require("../middleware/validateQueryParams");
const router = express_1.default.Router();
// Q5 - Validate numeric query params
router.get("/", validateQueryParams_1.validateQueryParams, (req, res) => {
    res.status(200).json({ message: "Query params validated successfully!" });
});
exports.default = router;
//# sourceMappingURL=itemRoutes.js.map