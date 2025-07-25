"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("../assignment-1/app"));
const assignRouter = express_1.default.Router();
// Example GET route
assignRouter.use("/assignment-1", app_1.default);
// assignRouter.use("/assignment-2", )
exports.default = assignRouter;
//# sourceMappingURL=assigRouter.js.map