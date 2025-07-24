// sample =Router.ts (ass4)

import express from "express";
import { validateQueryParams } from "../middleware/validateQueryParams";     // import the validateQueryParams

const router = express.Router();

router.get("/items", validateQueryParams, (req, res) => {
  res.status(200).json({ message: "Items fetched successfully" });
});

export default router;