// src/index.ts

import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assignRouter";
import  customHeaderMiddleware  from "./middleware/customHeader";
import { errorHandleMiddleware } from "./middleware/errorMiddleware";  // Import error middleware
import connectDB from "./config/db";
import seedOrders from "./controllers/seedingdata";
import runAllAggregations from "./controllers/aggregationController";
import cors from "cors";
import helmet from "helmet";

// Load environment variables from .env
dotenv.config();

// Get port from env or default to 4000
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI as string

//  Connect to MongoDB before starting the server

connectDB(MONGO_URI);

const app = express();
app.use(helmet())
app.use(cors({
  methods:["GET", "POST", "PUT","PATCH", "DELETE" ], allowedHeaders:["content-type", "authorization"]
}));

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

app.use(customHeaderMiddleware.customHeader("Assignment-3-Header", "ExpressTS")); 
 
app.use(customHeaderMiddleware.customHeader("Assignment-3-Header", "ExpressTS"));
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next();
});

console.log("1");
app.use("/assign", assignRouter);
app.use(errorHandleMiddleware);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
