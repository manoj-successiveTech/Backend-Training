// Create a validation schema using Joi (ass4)- middleware/validateUser.ts


import Joi from "joi";
import { Request, Response, NextFunction } from "express";

// Registration Schema

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

export const validateUser = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if(req.body.username !== "johnDoe123"){

    next(err);
    // return res.status(400).json({ message: "Invalid user data" });
  }
  next(err);
};
