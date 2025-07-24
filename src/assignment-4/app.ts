

import express from "express";
import userRoutes from "../routes/usersRouter";


const app = express();
app.use(express.json());

app.use("/api/v1/user", userRoutes);

export default app;
