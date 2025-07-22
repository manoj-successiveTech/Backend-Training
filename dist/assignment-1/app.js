"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const math_1 = require("../lib/math"); // Adjust the path if needed
const router = express_1.default.Router();
router.get("/getData", (req, res) => {
    return res.status(200).json({
        messsage: "heello"
    });
});
router.post("/calculate", (req, res) => {
    console.log("reached the request");
    const { n1, n2 } = req.query;
    const num1 = Number(n1);
    const num2 = Number(n2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both n1 and n2 must be valid numbers" });
    }
    const addResult = (0, math_1.add)(num1, num2);
    const subResult = (0, math_1.sub)(num1, num2);
    const multResult = (0, math_1.mult)(num1, num2);
    let divResult = "Cannot divide by 0";
    if (num2 !== 0) {
        divResult = (0, math_1.div)(num1, num2);
    }
    console.log(`Add: ${addResult}`);
    console.log(`Sub: ${subResult}`);
    console.log(`Mult: ${multResult}`);
    console.log(`Div: ${divResult}`);
    // Prepare CSV content
    const csv = `add,${num1},${num2},${addResult}\n` +
        `sub,${num1},${num2},${subResult}\n` +
        `mult,${num1},${num2},${multResult}\n` +
        `div,${num1},${num2},${divResult}\n`;
    const filePath = path_1.default.join(process.cwd(), "results.csv");
    // Write to file
    fs_1.default.appendFile(filePath, csv, (err) => {
        if (err) {
            console.error(" Error writing to CSV:", err);
            return res.status(500).json({ error: "Failed to write results to CSV" });
        }
        console.log(" Results saved to results.csv");
        return res.status(200).json({
            message: "Calculation successful",
            data: {
                add: addResult,
                sub: subResult,
                mult: multResult,
                div: divResult,
            },
        });
    });
});
exports.default = router;
//# sourceMappingURL=app.js.map