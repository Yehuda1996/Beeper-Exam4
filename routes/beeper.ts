import express, {Router} from 'express';
import { getALLBeepers, getBeeperWithId, getBeeperWithStatus, deleteBeeperById, creatingBeeper, updateBeeper } from '../controllers/beeperController.js';

const router: Router = express.Router();

router.route('/beepers').get(getALLBeepers);
router.route('/beepers/:id').get(getBeeperWithId);
router.route('/beepers/status/:status').get(getBeeperWithStatus);
router.route('/beepers/:id').delete(deleteBeeperById);
router.route('/beepers').post(creatingBeeper);
router.route('/beepers/:id/status').put(updateBeeper);

export default router;