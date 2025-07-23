import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { add, sub, mult, div } from "../lib/math" // Adjust the path if needed

const router= express.Router();

router.get("/getData", (req:Request, res:Response)=>{
  return res.status(200).json({
    messsage:"heello"
  })
})
router.post("/calculate", (req: Request, res: Response) => {
  console.log("reached the request");
  const { n1, n2 } = req.query;

  const num1: number = Number(n1);
  const num2: number = Number(n2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Both n1 and n2 must be valid numbers" });
  }

  const addResult: number = add(num1, num2);
  const subResult: number = sub(num1, num2);
  const multResult: number = mult(num1, num2);
  let divResult: number | string = "Cannot divide by 0";

  if (num2 !== 0) {
    divResult = div(num1, num2);
  }

  console.log(`Add: ${addResult}`);
  console.log(`Sub: ${subResult}`);
  console.log(`Mult: ${multResult}`);
  console.log(`Div: ${divResult}`);

  // Prepare CSV content
  const csv =
    `add,${num1},${num2},${addResult}\n` +
    `sub,${num1},${num2},${subResult}\n` +
    `mult,${num1},${num2},${multResult}\n` +
    `div,${num1},${num2},${divResult}\n`;
const filePath = path.join(process.cwd(), "src", "assignment-1", "results.csv");

  // Write to file
  fs.appendFile(filePath, csv, (err) => {
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

export default router;
