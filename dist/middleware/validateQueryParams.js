"use strict";
// validateQueryParams  -Middleware to validate query parameters
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryParams = void 0;
const validateQueryParams = (req, res, next) => {
    const { page, limit } = req.query;
    if ((page && isNaN(Number(page))) || (limit && isNaN(Number(limit)))) {
        return res.status(400).json({ message: "Query params 'page' and 'limit' must be numeric" });
    }
    next();
};
exports.validateQueryParams = validateQueryParams;
//# sourceMappingURL=validateQueryParams.js.map