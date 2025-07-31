// validateGeoLocation.ts

import { Request, Response, NextFunction } from "express";

export const validateGeoLocation = (err:Error,req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip || "";

  // Dummy check (in production use a geo-IP lookup service)

  if (ip.includes("127.0.0.1") || ip.includes("::1")) {
    next();
  } else {
    res.status(403).json({ message: "Access denied: Unexpected region" });
  }
  next(err);
};
