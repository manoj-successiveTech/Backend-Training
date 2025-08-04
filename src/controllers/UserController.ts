

import { Request, Response } from "express";
import { getMockData } from "../utils/dataSeeder";

export const seedData = (req: Request, res: Response) => {
  const data = getMockData();
  res.status(200).json({ success: true, data });
};
