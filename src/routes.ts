import { Router } from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';

const router = Router();

router.post('/users', CreateUserController.handle);
router.post('/auth', AuthUserController.handle);

export default router;