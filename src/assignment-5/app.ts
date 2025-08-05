import express, { Request, Response, NextFunction } from "express";
import HttpError from "http-errors";

const router = express.Router();

// Correct regular route (GET /error)
router.get("/error", (req: Request, res: Response) => {
  return res.status(400).json({
    message: "Hello from assignment",
  });
});

// Async route (GET /fail)
router.get("/fail", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await new Promise((_, reject) => {
      setTimeout(() => {
        reject(HttpError(500, "Intentional async error"));
      }, 500);
    });
  } catch (error) {
    next(error); // Pass the error to middleware
  }
});

// validate routes -post

router.post("/validate", (req: Request, res: Response, next: NextFunction) => {
  const { username, age } = req.body;

  // Validate username
  if (!username || typeof username !== "string") {
    return next(HttpError(422, "Validation Error: 'username' is required and must be a string."));
  }

  // Validate age
  if (!age || typeof age !== "number") {
    return next(HttpError(422, "Validation Error: 'age' is required and must be a number."));
  }

  // If valid, respond with success
  res.status(200).json({
    success: true,
    message: "Validation passed successfully",
    data: { username, age },
  });
});

export default router;
