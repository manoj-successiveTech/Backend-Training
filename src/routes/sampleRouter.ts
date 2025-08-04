// sample =Router.ts (ass4)

import express, {Request,Response} from "express";
import validQueryMiddleware from "../middleware/validateQueryParams";     // import the validateQueryParams

const router = express.Router();

router.get("/items", validQueryMiddleware.validateQueryParams, (req:Request, res:Response) => {
  res.status(200).json({ message: "Items fetched successfully" });
});

export default router;