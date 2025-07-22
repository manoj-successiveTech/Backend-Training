import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import assignRouter from "./routes/assigRouter";
import router from "./assignment-1/app";

dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.json());
app.use(cookieParser());
 
app.use("/api/v1", assignRouter);
// app.use(router)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
