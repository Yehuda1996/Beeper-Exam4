import express from 'express';
import { getALLBeepers, getBeeperWithId, getBeeperWithStatus, deleteBeeperById, creatingBeeper } from '../controllers/beeperController.js';
const router = express.Router();
router.route('/beepers').get(getALLBeepers);
router.route('/beepers/:id').get(getBeeperWithId);
router.route('/beepers/status/:status').get(getBeeperWithStatus);
router.route('/beepers/:id').delete(deleteBeeperById);
router.route('/beepers').post(creatingBeeper);
export default router;
