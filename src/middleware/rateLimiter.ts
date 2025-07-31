import { Request, Response, NextFunction } from "express";

const rateLimitMap = new Map<string, number[]>();

export const rateLimiter = (limit: number , interval: number ) => {
  return (err:Error,req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || "unknown";
    const currentTime = Date.now();

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, []);
    }

    const timestamps = rateLimitMap.get(ip)!.filter(t => currentTime - t < interval);
    timestamps.push(currentTime);
    rateLimitMap.set(ip, timestamps);

    if (timestamps.length > limit) {
      return res.status(429).json({ err: "Too many requests" });
    }

    next(err);
  };
};
