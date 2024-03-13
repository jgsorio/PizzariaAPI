import { Router } from 'express';
import multer from 'multer';

import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';
import CreateProductController from './controllers/product/CreateProductController';
import uploadConfig from './config/multer';

import Authenticated from './middlewares/Authenticated';
import ListByCategoryController from './controllers/product/ListByCategoryController';

const router = Router();
const upload = multer(uploadConfig.upload('./uploads'))

router.post('/users', CreateUserController.handle);
router.get('/me', Authenticated, DetailUserController.handle);
router.post('/auth', AuthUserController.handle);

router.post('/categories', Authenticated, CreateCategoryController.handle);
router.get('/categories', Authenticated, ListCategoryController.handle);

router.post('/products', Authenticated, upload.single('file'), CreateProductController.handle);
router.get('/products', Authenticated, ListByCategoryController.handle);

export default router;