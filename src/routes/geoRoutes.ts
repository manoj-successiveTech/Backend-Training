import express from "express";
import { validateGeoLocation } from "../middleware/validateGeoLocation";

const router = express.Router();

// Q6 - Geo location validation

router.get("/check-geo", validateGeoLocation, (req, res) => {
  res.status(200).json({ message: "Access granted from valid location!" });
});

export default router;
