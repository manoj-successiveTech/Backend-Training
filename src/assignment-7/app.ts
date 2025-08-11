import express, { Request, Response } from "express";
import healthRoute from "../routes/healthRoute";
import router from "../assignment-1/app";



const app  = express.Router();

app.use("/health", healthRoute);

export default router;