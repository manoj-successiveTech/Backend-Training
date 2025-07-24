"use strict";
// sample =Router.ts (ass4)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateQueryParams_1 = require("../middleware/validateQueryParams"); // import the validateQueryParams
const router = express_1.default.Router();
router.get("/items", validateQueryParams_1.validateQueryParams, (req, res) => {
    res.status(200).json({ message: "Items fetched successfully" });
});
exports.default = router;
//# sourceMappingURL=sampleRouter.js.map