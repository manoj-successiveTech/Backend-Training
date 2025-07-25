"use strict";
// validateGeoLocation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGeoLocation = void 0;
const validateGeoLocation = (req, res, next) => {
    const ip = req.ip || "";
    // Dummy check (in production use a geo-IP lookup service)
    if (ip.includes("127.0.0.1") || ip.includes("::1")) {
        next();
    }
    else {
        res.status(403).json({ message: "Access denied: Unexpected region" });
    }
};
exports.validateGeoLocation = validateGeoLocation;
//# sourceMappingURL=validateGeoLocation.js.map