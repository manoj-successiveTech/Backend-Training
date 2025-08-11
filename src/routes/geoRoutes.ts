import express , {Request,Response} from "express";
import validationGeolocationMiddleware  from "../middleware/validateGeoLocation";

const router = express.Router();

// Q6 - Geo location validation

router.get("/check-geo", validationGeolocationMiddleware.validateGeoLocation, (req:Request, res:Response) => {
 return res.status(200).json({ message: "Access granted from valid location!" });
});

export default router;
