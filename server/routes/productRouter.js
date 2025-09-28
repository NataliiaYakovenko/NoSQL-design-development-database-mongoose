const { Router } = require('express');
const productController = require('../controllers/productController');
const { validateProduct } = require('../middlewares/productValidation');

const productRouter = Router();

productRouter.post('/', validateProduct, productController.createProduct);
productRouter.get('/', productController.getAllProducts);

module.exports = productRouter;
