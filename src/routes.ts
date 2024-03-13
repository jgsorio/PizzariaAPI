import { Router } from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';

import Authenticated from './middlewares/Authenticated';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';

const router = Router();

router.post('/users', CreateUserController.handle);
router.get('/me', Authenticated, DetailUserController.handle);
router.post('/auth', AuthUserController.handle);

router.post('/categories', Authenticated, CreateCategoryController.handle);
router.get('/categories', Authenticated, ListCategoryController.handle);

export default router;