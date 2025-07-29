// for https error controller -ass5

import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';


export const badRequest = (req: Request, res: Response, next: NextFunction) => {
  next(createError(400, 'Bad Request'));
};

export const unauthorized = (req: Request, res: Response, next: NextFunction) => {
  next(createError(401, 'Unauthorized'));
};

export const forbidden = (req: Request, res: Response, next: NextFunction) => {
  next(createError(403, 'Forbidden'));
};

export const conflict = (req: Request, res: Response, next: NextFunction) => {
  next(createError(409, 'Conflict'));
};

export const internalServer = (req: Request, res: Response, next: NextFunction) => {
  next(createError(500, 'Internal Server Error'));
};

export const serviceUnavailable = (req: Request, res: Response, next: NextFunction) => {
  next(createError(503, 'Service Unavailable'));
};
