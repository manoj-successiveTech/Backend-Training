"use strict";
//  src/routes/userRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const authenticate_1 = require("../middleware/authenticate");
const router = express_1.default.Router();
router.post("/seed", authenticate_1.authenticate, UserController_1.seedData);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map