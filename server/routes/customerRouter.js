const { Router } = require('express');
const { hashPassword } = require('../middlewares/hashPassword');
const customerController = require('../controllers/costumerController');

const customerRouter = Router();

customerRouter.post('/', hashPassword, customerController.createCustomer);
customerRouter.get('/:id',customerController.getOneCustomer)

module.exports = customerRouter;
