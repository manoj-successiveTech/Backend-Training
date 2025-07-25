"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("./controllers/userControllers");
const userRouter = express_1.default.Router();
// This is my backend mock data get api
userRouter.get('/data', userControllers_1.getUserData);
exports.default = userRouter;
//# sourceMappingURL=mockData.js.map