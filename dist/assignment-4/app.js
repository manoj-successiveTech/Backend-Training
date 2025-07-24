"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const itemRoutes_1 = __importDefault(require("../routes/itemRoutes"));
const geoRoutes_1 = __importDefault(require("../routes/geoRoutes"));
const router = express_1.default.Router();
// Q4 + Q7 - Register routes
router.use("/user", userRoutes_1.default);
// Q5 - Query params validation
router.use("/items", itemRoutes_1.default);
// Q6 - Geolocation validation
router.use("/geo", geoRoutes_1.default);
exports.default = router;
// // app.ts of ass4
// import express, { Request, Response , NextFunction } from "express";
// import userRoutes from "../routes/usersRouter";
// import itemRoutes from "../routes/itemRoutes";
// import geoRoutes from "../routes/geoRoutes";
// const app = express();
// const PORT = 3500;
// app.use(express.json());
// // Register Route (Q4 & Q7 - user input + dynamic validation)
// app.use("/api/v1/user", userRoutes);
// // Items Route (Q5 - query param validation)
// app.use("/api/v1/items", itemRoutes);
// // Geo Check Route (Q6 - geo location validation)
// app.use("/api/v1/geo", geoRoutes);
// // Default test route
// app.get("/", (req: Request, res: Response) => {
//   res.send("🚀 Assignment-4 Validation Middleware API is running!");
// });
//# sourceMappingURL=app.js.map