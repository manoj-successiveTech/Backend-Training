// src/middleware/customHeader.ts

import { Request, Response, NextFunction } from "express";


export const customHeader = (name: string, value: string) => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.setHeader(name, value);
    next(err);
  };
};
