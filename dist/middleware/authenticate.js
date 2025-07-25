"use strict";
// middleware/authenticate.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token)
        return res.status(401).json({ error: "Access Denied. No token provided." });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "secret123");
        req.user = decoded; // attach to req
        next();
    }
    catch (err) {
        res.status(400).json({ error: "Invalid token." });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.js.map