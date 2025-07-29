import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assigRouter";


dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.json());
app.use(cookieParser());
 
app.use("/api/v1", assignRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
