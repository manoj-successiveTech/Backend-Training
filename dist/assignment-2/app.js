"use strict";
// src/assignment-2/app.ts (use the controller)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
// Route: /mock
router.get("/mock", userControllers_1.getUsers);
exports.default = router;
//# sourceMappingURL=app.js.map