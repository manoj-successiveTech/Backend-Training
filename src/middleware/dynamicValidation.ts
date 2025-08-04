import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { validationRules } from "../config/validationRules";

class DynamicValidationMiddleware{
dynamicValidation = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const rules = validationRules[req.path];

  if (!rules) return next();

  const schema = Joi.object(rules);
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next(err);
};
}
const dynaicValidationMiddleware =  new DynamicValidationMiddleware();
export default dynaicValidationMiddleware;