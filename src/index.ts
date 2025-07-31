// src/index.ts

import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assignRouter";
import { customHeader } from "./middleware/customHeader";
import { errorHandleMiddleware } from "./middleware/errorMiddleware";
import connectDB from "./config/db"; // we import MongoDB connection function

// Load environment variables from .env
dotenv.config();

// Get port from env or default to 4000
const PORT = process.env.PORT || 4000;

// ✅ Connect to MongoDB before starting the server
connectDB();

const app = express();

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Custom header middleware
app.use(customHeader("Assignment-3-Header", "ExpressTS"));

// Log every request's method and URL
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next();
});

// Use assignment routes
app.use("/assign", assignRouter);

// Global error handler (should be last middleware)
app.use(errorHandleMiddleware);

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
