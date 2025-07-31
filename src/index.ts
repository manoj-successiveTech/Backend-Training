// src/index.ts

import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assignRouter";
import { customHeader } from "./middleware/customHeader";

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

/** Middleware to log request method and URL & Uses basic types: Request, Response, and NextFunction from express */

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next(); // Move to the next middleware or route
});

// Use routes
app.use("/assign", assignRouter);

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Welcome to the Express.js Tutorial", // JSON response
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});