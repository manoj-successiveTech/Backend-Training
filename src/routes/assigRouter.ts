import express from 'express';
import assign1router from '../assignment-1/app';
import assign2router from '../assignment-2/app';
import assign3router from '../assignment-3/app';
import assign4router from '../assignment-4/app';
import assign5router from '../assignment-5/app';


const assignRouter = express.Router();

// Example GET route

assignRouter.use("/assignment-1", assign1router)
assignRouter.use("/assignment-2", assign2router)
assignRouter.use("/assignment-3", assign3router)
assignRouter.use("/assignment-4", assign4router)
assignRouter.use("/assignment-4", assign4router)
assignRouter.use("/assignment-5", assign5router)


export default assignRouter;
