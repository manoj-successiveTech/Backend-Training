"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const validationRules_1 = require("../config/validationRules");
const dynamicValidation = (req, res, next) => {
    const rules = validationRules_1.validationRules[req.path];
    if (!rules)
        return next();
    const schema = joi_1.default.object(rules);
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.dynamicValidation = dynamicValidation;
//# sourceMappingURL=dynamicValidation.js.map