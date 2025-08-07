// routes/healthRoutes.ts (ass7)

import express from "express"
import healthCheck from "../controllers/healtCheck";

const router = express.Router()
router.get("/health-check", healthCheck.pcHealth)

export default router;