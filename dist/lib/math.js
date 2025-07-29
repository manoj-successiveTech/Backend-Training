"use strict";
// Q8). Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js. 
// Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
const _ = require('lodash');
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return b !== 0 ? a / b : Infinity;
}
//# sourceMappingURL=math.js.map