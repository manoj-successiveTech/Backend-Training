"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mockData_1 = require("../utils/mockData");
const router = express_1.default.Router();
router.post("/seed", (req, res) => {
    res.json({ data: mockData_1.mockData });
});
exports.default = router;
//# sourceMappingURL=dataRoutes.js.map