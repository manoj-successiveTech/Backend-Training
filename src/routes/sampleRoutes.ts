// src/routes/sampleRoutes.ts -assign-3

import express, { Request, Response } from "express";
import authenticatore from "../middleware/authenticate";
import { logger } from "../middleware/logger";
import customHeaderMiddleware  from "../middleware/customHeader";



const router = express.Router();

/**
 * GET /api/protected
 * Middleware applied: logger → customHeader → authenticate
 * Response: success message + user info from JWT
 */
router.get(
  "/protected",
  logger,
  customHeaderMiddleware.customHeader ("X-Server", "ExpressTS"),
  authenticatore.authenticate,
  (req: Request, res: Response) => {
    const user = (req as any).user; // `user` added by authenticate middleware
    res.status(200).json({
      message: "Access granted to protected route.",
      user
    });
  }
);

export default router;
