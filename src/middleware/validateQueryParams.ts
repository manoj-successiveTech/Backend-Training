// validateQueryParams  -Middleware to validate query parameters


import { Request, Response, NextFunction } from "express";


class ValidQueryMiddleware {
validateQueryParams = (err:Error,req: Request, res: Response, next: NextFunction) => {
  const { page, limit } = req.query;
console.log(limit, "validate Query Parameter running",page);

  if ((page && isNaN(Number(page))) || (limit && isNaN(Number(limit)))) {
    return res.status(400).json({ message: "Query params 'page' and 'limit' must be numeric" });
  }
  next(err);
};
}
const validQueryMiddleware = new ValidQueryMiddleware
export default validQueryMiddleware;