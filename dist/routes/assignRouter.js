"use strict";
//routes/assignRouter.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("../assignment-1/app"));
const app_2 = __importDefault(require("../assignment-2/app"));
const app_3 = __importDefault(require("../assignment-3/app"));
// import router from '../assignment-2/app';
const assignRouter = express_1.default.Router();
// Example GET route
assignRouter.use("/assignment-1", app_1.default);
assignRouter.use("/assignment-2", app_2.default);
assignRouter.use("/assignment-3", app_3.default);
exports.default = assignRouter;
//# sourceMappingURL=assignRouter.js.map