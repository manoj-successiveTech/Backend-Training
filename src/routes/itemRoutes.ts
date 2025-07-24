//itemRoutes.ts 

import express from "express";
import { validateQueryParams } from "../middleware/validateQueryParams";

const router = express.Router();

// Q5 - Validate numeric query params
router.get("/", validateQueryParams, (req, res) => {
  res.status(200).json({ message: "Query params validated successfully!" });
});

export default router;
