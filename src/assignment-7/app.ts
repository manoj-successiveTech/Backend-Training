import express, { Application } from "express";
import healthRoute from "../routes/healthRoute";

const app: Application = express();
const PORT = 3000;

app.use("/", healthRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
