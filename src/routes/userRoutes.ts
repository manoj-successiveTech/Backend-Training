//  src/routes/userRoutes.ts

import express from "express";
import { seedData } from "../controllers/UserController";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

router.post("/seed", authenticate, seedData);

export default router;
