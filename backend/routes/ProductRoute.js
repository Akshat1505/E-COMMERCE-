import express from 'express';
import { listProducts, addProduct,RemoveProducts,SingleProduct } from '../controllers/ProductController.js';

const productRouter = express.Router();

productRouter.post('/add',addProduct);
productRouter.post('/remove',RemoveProducts);
productRouter.post('/single',SingleProduct);
productRouter.get('/list',listProducts);

export default productRouter;
