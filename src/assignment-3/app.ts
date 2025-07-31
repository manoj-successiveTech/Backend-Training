// assignment-3/app.ts

import express, { Request, Response } from "express";
import { authenticate } from "../middleware/authenticate";
import { logger } from "../middleware/logger";
import { errorHandler } from "../middleware/errorHandler";
import { customHeader } from "../middleware/customHeader";
import { rateLimiter } from "../middleware/rateLimiter";
import { seedData } from "../controllers/UserController";

const router = express.Router();

// Assignment-3 specific middlewares

router.use(logger);                                             // Q9 - Log requests       // Q13 - Rate limiting(limit , interval)
router.use(customHeader("Assignment-3-Header", "ExpressTS"));   // Q12 - Custom header

// Q5 - POST API with Authentication Middleware
router.post("/seed", authenticate, seedData);  // Q6/Q7

// Q11 - Chained Middleware Example

router.get(
  "/chain",
  errorHandler,
  rateLimiter(5, 60),               // user request - 5 
  logger,
  authenticate,
  (req:Request, res:Response) => {
    res.json({ message: "Chained middleware executed successfully." });
  }
);

// Sample error route to trigger error handler

router.get("/error", errorHandler, (req:Request, res:Response) => {
  throw new Error("Intentional error for testing error handler");
});

// Error handling middleware (Q10)

router.use(errorHandler);

export default router;
