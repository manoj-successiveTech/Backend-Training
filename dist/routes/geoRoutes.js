"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateGeoLocation_1 = require("../middleware/validateGeoLocation");
const router = express_1.default.Router();
// Q6 - Geo location validation
router.get("/check", validateGeoLocation_1.validateGeoLocation, (req, res) => {
    res.status(200).json({ message: "Access granted from valid location!" });
});
exports.default = router;
//# sourceMappingURL=geoRoutes.js.map