import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';


//Fetch all the products
router.get('/',(req, res) => {
    Product.find({}).then((products) =>{
        console.log('Products retrieved');
        res.json(products);
    });
});

//Fetch a single product with an id
router.get('/:id',(req, res) => {
    Product.findById(req.params.id).then((product) => {
        if(product)
        {
            res.json(product);
        }
        else
        {
            res.status(404).json({message: 'Product not found' })
        }
        res.json(product);
    })
    
});

export default router;