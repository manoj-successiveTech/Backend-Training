"use strict";
// Dynamic validation middleware from config of ass4
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRules = void 0;
exports.validationRules = {
    "/api/v1/user/register": {
        username: { type: "string", min: 3, max: 30, required: true },
        email: { type: "string", format: "email", required: true },
        password: { type: "string", pattern: /^[a-zA-Z0-9]{3,30}$/, required: true },
    },
};
//# sourceMappingURL=validationRules.js.map