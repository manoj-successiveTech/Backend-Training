// src/assignment-2/app.ts (use the controller)

import express from "express";
import { getUsers } from "../controllers/userControllers";

const router = express.Router();

// Route: /mock
router.get("/mock", getUsers);
export default router
