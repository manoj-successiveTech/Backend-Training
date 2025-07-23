"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const rateLimitMap = new Map();
const rateLimiter = (limit = 5, interval = 60000) => {
    return (req, res, next) => {
        const ip = req.ip || "unknown";
        const currentTime = Date.now();
        if (!rateLimitMap.has(ip)) {
            rateLimitMap.set(ip, []);
        }
        const timestamps = rateLimitMap.get(ip).filter(t => currentTime - t < interval);
        timestamps.push(currentTime);
        rateLimitMap.set(ip, timestamps);
        if (timestamps.length > limit) {
            return res.status(429).json({ error: "Too many requests" });
        }
        next();
    };
};
exports.rateLimiter = rateLimiter;
//# sourceMappingURL=rateLimiter.js.map