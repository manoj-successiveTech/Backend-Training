// Q8). Create four methods: add(num1, num2), sub(num1, num2), mult(num1, num2), and div(num1, num2), which perform addition, subtraction, multiplication, and division, respectively in math.js. 
// Utilize the lodash dependency for executing the aforementioned operations. Export all the above methods to make them accessible in any file.

const _ = require('lodash');

export function add(a: number, b: number): number {
  return a + b;
}
export function sub(a: number, b: number): number {
  return a - b;
}
export function mult(a: number, b: number): number {
  return a * b;
}
export function div(a: number, b: number): number {
  return b !== 0 ? a / b : Infinity;
}
