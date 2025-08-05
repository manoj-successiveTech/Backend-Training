// src/index.ts

import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assignRouter";
import { customHeader } from "./middleware/customHeader";
import { errorHandleMiddleware } from "./middleware/errorMiddleware";  // Import error middleware

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// Create express app
const app = express();

// Middleware to handle JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Custom header middleware
app.use(customHeader("Assignment-3-Header", "ExpressTS"));

/** Middleware to log request method and URL */
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next(); // Move to the next middleware or route
});

// Use routes
app.use("/assign", assignRouter);

// app.get('/', (req: Request, res: Response) => {
//   throw new Error ("You got error!")
//   return res.status(200).json({
//     message: "Welcome to the Express.js Tutorial", // JSON response
//   });
// });

// --- Use error-handling middleware AFTER all routes ---
app.use(errorHandleMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
