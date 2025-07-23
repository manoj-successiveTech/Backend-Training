

import express from 'express';
import assign1router from '../assignment-1/app';
import assign2router from '../assignment-2/app'
// import router from '../assignment-2/app';

const assignRouter = express.Router();

// Example GET route

assignRouter.use("/assignment-1", assign1router)
assignRouter.use("/assignment-2", assign2router)
export default assignRouter;
