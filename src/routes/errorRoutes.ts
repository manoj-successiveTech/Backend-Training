// errorRoutes.ts  - ass5

import express from 'express';
import {
  badRequest,
  unauthorized,
  forbidden,
  conflict,
  internalServer,
  serviceUnavailable
} from '../controllers/errorController';

const router = express.Router();

router.get('/400', badRequest);
router.get('/401', unauthorized);
router.get('/403', forbidden);
router.get('/409', conflict);
router.get('/500', internalServer);
router.get('/503', serviceUnavailable);

export default router;
