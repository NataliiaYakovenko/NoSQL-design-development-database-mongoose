const { Router } = require('express');
const orderController = require('../controllers/orderController');
const { validateOrder } = require('../middlewares/orderValidation');

const orderRouter = Router();

orderRouter.post('/', validateOrder, orderController.createOrder);

module.exports = orderRouter;
