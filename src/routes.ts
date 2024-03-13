import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/multer';

import Authenticated from './middlewares/Authenticated';

import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';
import CreateProductController from './controllers/product/CreateProductController';
import ListByCategoryController from './controllers/product/ListByCategoryController';
import CreateOrderController from './controllers/order/CreateOrderController';
import CloseOrderController from './controllers/order/CloseOrderController';
import AddItemController from './controllers/order/AddItemController';
import RemoveItemController from './controllers/order/RemoveItemController';
import SendOrderController from './controllers/order/SendOrderController';
import ListOrderController from './controllers/order/ListOrderController';
import DetailOrderController from './controllers/order/DetailOrderController';
import DoneOrderController from './controllers/order/DoneOrderController';

const router = Router();
const upload = multer(uploadConfig.upload('./uploads'))

router.post('/users', CreateUserController.handle);
router.get('/me', Authenticated, DetailUserController.handle);
router.post('/auth', AuthUserController.handle);

router.post('/categories', Authenticated, CreateCategoryController.handle);
router.get('/categories', Authenticated, ListCategoryController.handle);

router.post('/products', Authenticated, upload.single('file'), CreateProductController.handle);
router.get('/products', Authenticated, ListByCategoryController.handle);

router.get('/orders', Authenticated, ListOrderController.handle);
router.get('/orders/:id', Authenticated, DetailOrderController.handle);
router.post('/orders', Authenticated, CreateOrderController.handle);
router.delete('/orders', Authenticated, CloseOrderController.handle);
router.post('/orders/items', Authenticated, AddItemController.handle);
router.delete('/orders/items', Authenticated, RemoveItemController.handle);
router.put('/orders', Authenticated, SendOrderController.handle);
router.put('/orders/done', Authenticated, DoneOrderController.handle);

export default router;