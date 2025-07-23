

import express from 'express';
import router from '../assignment-1/app';
// import router from '../assignment-2/app';

const assignRouter = express.Router();

// Example GET route

assignRouter.use("/assignment-1", router)
assignRouter.use("/assignment-2",router)
export default assignRouter;
