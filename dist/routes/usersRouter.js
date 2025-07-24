"use strict";
// Use validation middleware in a registration route  - routes/userRouter.ts (ass4 -user)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateUser_1 = require("../middleware/validateUser");
const router = express_1.default.Router();
router.post("/register", validateUser_1.validateUser, (req, res) => {
    return res.status(200).json({ message: "User registered successfully!" });
});
exports.default = router;
``;
//# sourceMappingURL=usersRouter.js.map