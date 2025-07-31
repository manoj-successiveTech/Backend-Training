// src/index.ts

import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assignRouter";
import { customHeader } from "./middleware/customHeader";


dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(customHeader("Assignment-3-Header", "ExpressTS")); 
 
app.use("/", assignRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
