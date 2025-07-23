"use strict";
// src/middleware/customHeader.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHeader = void 0;
const customHeader = (name, value) => {
    return (req, res, next) => {
        res.setHeader(name, value);
        next();
    };
};
exports.customHeader = customHeader;
//# sourceMappingURL=customHeader.js.map