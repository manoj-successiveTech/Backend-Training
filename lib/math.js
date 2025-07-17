// Q8). Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js. 
// Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.

const _ = require('lodash');

// Addition
const add = (num1, num2) => _.add(num1, num2);

// Subtraction
const sub = (num1, num2) => _.subtract(num1, num2);

// Multiplication
const mult = (num1, num2) => _.multiply(num1, num2);

// Division
const div = (num1, num2) => _.divide(num1, num2);

module.exports = { add, sub, mult, div };