"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = void 0;
const mockData_1 = __importDefault(require("../mockData"));
const getUserData = (req, res) => {
    res.status(200).json(mockData_1.default);
};
exports.getUserData = getUserData;
//# sourceMappingURL=userControllers.js.map