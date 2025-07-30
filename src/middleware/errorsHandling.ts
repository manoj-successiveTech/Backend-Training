//errorsHandling.ts of Setup Error Handling Middleware ass5

import { Request, Response, NextFunction } from 'express';

export const errorsHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

