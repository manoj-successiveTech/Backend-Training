// src/assignment-2/app.ts (use the controller)

import express from "express";
import cookieParser from "cookie-parser";
import { getUsers } from "../controllers/userControllers";

const app = express();
const PORT = 3500;

app.use(cookieParser());

// Route: /mock
app.get("/mock", getUsers);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
