import express from 'express';
import  seedOrders  from '../controllers/seedingdata';
import runAllAggregations from '../controllers/aggregationController';

const router = express.Router();

// routes if seedOders controller
console.log("3");
router.get("/get-seed-orders", seedOrders, runAllAggregations );



export default router;
