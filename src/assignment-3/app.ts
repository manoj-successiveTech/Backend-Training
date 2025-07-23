// assignment-3/app.ts

import express from "express";
import { authenticate } from "../middleware/authenticate";
import { logger } from "../middleware/logger";
// import { errorHandler } from "../middleware/errorHandler";
import { customHeader } from "../middleware/customHeader";
// import { rateLimiter } from "../middleware/rateLimiter";
import { seedData } from "../controllers/UserController";

const router = express.Router();

// Assignment-3 specific middlewares
router.use(logger);                            // Q9 - Log requests
// router.use(rateLimiter);                       // Q13 - Rate limiting
router.use(customHeader("Assignment-3-Header", "ExpressTS"));// Q12 - Custom header

// Q5 - POST API with Authentication Middleware
router.post("/seed", authenticate, seedData);  // Q6/Q7

// Q11 - Chained Middleware Example
router.get(
  "/chain",
  logger,
  authenticate,
  (req, res) => {
    res.json({ message: "Chained middleware executed successfully." });
  }
);

// Sample error route to trigger error handler
router.get("/error", (req, res) => {
  throw new Error("Intentional error for testing error handler");
});

// Error handling middleware (Q10)
// router.use(errorHandler);

export default router;
