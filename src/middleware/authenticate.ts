// middleware/authenticate.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Access Denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "secret123");
    (req as any).user = decoded; // attach to req
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
};
