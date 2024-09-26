import express from 'express';
import { getALLBeepers, getBeeperWithId, getBeeperWithStatus, deleteBeeperById } from '../controllers/beeperController.js';
const router = express.Router();
router.route('/beepers').get(getALLBeepers);
router.route('/beepers/:id').get(getBeeperWithId);
router.route('/beepers/status/:status').get(getBeeperWithStatus);
router.route('/beepers/:id').delete(deleteBeeperById);
export default router;
