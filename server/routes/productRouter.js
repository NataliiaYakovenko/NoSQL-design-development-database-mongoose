const { Router } = require('express');
const productController = require('../controllers/productController');


const productRouter = Router();

productRouter.post('/',productController.createProduct);



module.exports = productRouter;
