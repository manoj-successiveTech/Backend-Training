import express from 'express';
import router from '../assignment-1/app';

const assignRouter = express.Router();

// Example GET route

assignRouter.use("/assignment-1", router)
// assignRouter.use("/assignment-2", )
export default assignRouter;
