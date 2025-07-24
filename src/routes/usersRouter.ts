// Use validation middleware in a registration route  - routes/userRouter.ts (ass4 -user)

import express, { Request, Response } from "express";
import { validateUser } from "../middleware/validateUser";
import { dynamicValidation } from "../middleware/dynamicValidation";


const router = express.Router();

router.get("/register", validateUser, (req, res) => {
  return res.status(200).json({ message: "User registered successfully!" });
});


export default router;
``