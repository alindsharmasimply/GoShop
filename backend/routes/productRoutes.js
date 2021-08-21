import express from 'express';
const router = express.Router();
import {
    getProducts,
    getProductById,
  } from '../controllers/productController.js'


//Fetch all the products
router.route('/').get(getProducts);

//Fetch a single product with an id
router.route('/:id').get(getProductById);

export default router;