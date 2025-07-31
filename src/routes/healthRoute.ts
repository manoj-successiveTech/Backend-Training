// routes/healthRoutes.ts

import { Request, Response, Router } from "express";

class HealthRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/health", this.healthCheck);
  }

  private healthCheck(req: Request, res: Response): void {
    res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
  }
}

export default new HealthRoute().router;
