<<<<<<< HEAD
import express ,{Request, Response} from "express";
import { validateGeoLocation } from "../middleware/validateGeoLocation";
=======
import express , {Request,Response} from "express";
import validationGeolocationMiddleware  from "../middleware/validateGeoLocation";
>>>>>>> df50fb18660d096058c06bb275b62ea659ac476c

const router = express.Router();

// Q6 - Geo location validation

<<<<<<< HEAD
router.get("/check-geo", validateGeoLocation, (req:Request, res:Response) => {
=======
router.get("/check-geo", validationGeolocationMiddleware.validateGeoLocation, (req:Request, res:Response) => {
>>>>>>> df50fb18660d096058c06bb275b62ea659ac476c
  res.status(200).json({ message: "Access granted from valid location!" });
});

export default router;
