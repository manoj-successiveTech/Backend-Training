import { Request, Response } from "express";
import { User } from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }


  const user = await User.create({ name, email, password});

  const token = jwt.sign({ id: user._id }, "jwt_secret", { expiresIn: "7d" });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not exists" });
  }

  
  const isMatch = await bcrypt.compare(password,user.password);
  console.log(isMatch);
  
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user._id }, "jwt_secret", { expiresIn: "7d" });

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
};
