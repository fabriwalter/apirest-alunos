import { Router } from 'express';
import userControler from '../controllers/UserController';

const router = new Router();

router.post('/', userControler.store);

export default router;
