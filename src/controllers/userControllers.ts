// src/assignment-2/controllers/userControllers.ts

import { Request, Response } from "express";
import { mockUsers } from "../assignment-2/mockData";

// GET /mock
export const getUsers = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: mockUsers,
  });
};
