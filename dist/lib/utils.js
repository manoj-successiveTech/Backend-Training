"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeResultsToCSV = writeResultsToCSV;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Writes an array of [operation, result] pairs to a CSV file.
 * @param results - Array of [string, number] tuples
 */
function writeResultsToCSV(results) {
    const csvContent = results.map((row) => row.join(',')).join('\n');
    const filePath = path_1.default.join(process.cwd(), 'results.csv');
    fs_1.default.writeFileSync(filePath, csvContent, 'utf8');
    console.log(`✅ CSV saved to ${filePath}`);
}
//# sourceMappingURL=utils.js.map