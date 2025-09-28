const { Router } = require('express');
const productController = require('../controllers/productController');
const { validateProduct } = require('../middlewares/productValidation');

const productRouter = Router();

productRouter.post('/', validateProduct, productController.createProduct);

module.exports = productRouter;
