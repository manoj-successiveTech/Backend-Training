"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
const dataSeeder_1 = require("../utils/dataSeeder");
const seedData = (req, res) => {
    const data = (0, dataSeeder_1.getMockData)();
    res.status(200).json({ success: true, data });
};
exports.seedData = seedData;
//# sourceMappingURL=UserController.js.map