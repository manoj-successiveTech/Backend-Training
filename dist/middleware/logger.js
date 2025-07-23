"use strict";
// src/middleware/logger.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next();
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map