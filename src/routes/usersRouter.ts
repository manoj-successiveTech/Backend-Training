// Use validation middleware in a registration route  - routes/userRouter.ts (ass4 -user)

import express from "express";
import { validateUser } from "../middleware/validateUser";

const router = express.Router();

router.post("/register", validateUser, (req, res) => {
  return res.status(200).json({ message: "User registered successfully!" });
});

export default router;
``