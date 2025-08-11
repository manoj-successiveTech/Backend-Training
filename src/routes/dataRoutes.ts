import express from "express";
import { mockData } from "../utils/mockData";

const router = express.Router();

router.post("/seed", (req, res) => {
 return res.json({ data: mockData });
});

export default router;
