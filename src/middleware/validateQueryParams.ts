// validateQueryParams  -Middleware to validate query parameters


import { Request, Response, NextFunction } from "express";

export const validateQueryParams = (req: Request, res: Response, next: NextFunction) => {
  const { page, limit } = req.query;

  if ((page && isNaN(Number(page))) || (limit && isNaN(Number(limit)))) {
    return res.status(400).json({ message: "Query params 'page' and 'limit' must be numeric" });
  }

  next();
};
