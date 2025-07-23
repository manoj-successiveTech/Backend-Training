"use strict";
// src/assignment-2/controllers/userControllers.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const mockData_1 = require("../assignment-2/mockData");
// GET /mock
const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        data: mockData_1.mockUsers,
    });
};
exports.getUsers = getUsers;
//# sourceMappingURL=userControllers.js.map