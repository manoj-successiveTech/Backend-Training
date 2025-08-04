// src/index.ts

import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assignRouter";
import  customHeaderMiddleware  from "./middleware/customHeader";
import { errorHandleMiddleware } from "./middleware/errorMiddleware";  // Import error middleware
import connectDB from "./config/db";

// Load environment variables from .env
dotenv.config();

<<<<<<< HEAD

// ✅ Connect to MongoDB before starting the server
connectDB();
const PORT = process.env.PORT || 4000;
=======
// Get port from env or default to 4000
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI as string

//  Connect to MongoDB before starting the server

connectDB(MONGO_URI);
>>>>>>> df50fb18660d096058c06bb275b62ea659ac476c

const app = express();

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

app.use(customHeaderMiddleware.customHeader("Assignment-3-Header", "ExpressTS")); 
 
app.use("/", assignRouter);


// Custom header middleware
app.use(customHeaderMiddleware.customHeader("Assignment-3-Header", "ExpressTS"));

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
