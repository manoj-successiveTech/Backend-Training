import express from "express";
import healthcheck from "../controllers/healtCheck";

const router  = express.Router();

router.get("/health", healthcheck.pcHealth);

export default router;