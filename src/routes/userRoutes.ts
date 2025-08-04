//  src/routes/userRoutes.ts -assign-3

import express from "express";
import { seedData } from "../controllers/UserController";
import authenticatore from "../middleware/authenticate";

const router = express.Router();

router.post("/seed", authenticatore.authenticate, seedData);

export default router;
