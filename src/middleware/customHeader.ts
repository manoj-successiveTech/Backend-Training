// src/middleware/customHeader.ts

import { Request, Response, NextFunction } from "express";

/**
 * Adds a custom header to every response.
 * @param name Header name
 * @param value Header value
 */
export const customHeader = (name: string, value: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(name, value);
    next();
  };
};
