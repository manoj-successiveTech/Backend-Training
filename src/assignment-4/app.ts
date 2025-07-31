import express, { Request, Response } from "express";
import geoRoutes from "../routes/geoRoutes";
import { validateQueryParams } from "../middleware/validateQueryParams";
import { validateUser } from "../middleware/validateUser";

const router = express.Router();

// Q4 + Q7 - Register routes
router.post("/register", validateUser, (req:Request, res:Response) => {
 
  
  return res.status(200).json({ message: "User registered successfully!" });
});

// Q5 - Query params validation

router.get("/items", validateQueryParams, (req: Request, res:Response) => {
  return res.status(200).json({ message: "Query paramameter validated successfully!" });
});

// Q6 - Geolocation validation
router.use("/geo", geoRoutes);

export default router;







































// // app.ts of ass4

// import express, { Request, Response , NextFunction } from "express";


// import userRoutes from "../routes/usersRouter";
// import itemRoutes from "../routes/itemRoutes";
// import geoRoutes from "../routes/geoRoutes";

// const app = express();
// const PORT = 3500;

// app.use(express.json());

// // Register Route (Q4 & Q7 - user input + dynamic validation)
// app.use("/api/v1/user", userRoutes);

// // Items Route (Q5 - query param validation)
// app.use("/api/v1/items", itemRoutes);

// // Geo Check Route (Q6 - geo location validation)
// app.use("/api/v1/geo", geoRoutes);

// // Default test route
// app.get("/", (req: Request, res: Response) => {
//   res.send("🚀 Assignment-4 Validation Middleware API is running!");
// });
