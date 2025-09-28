const { Router } = require('express');
const { hashPassword } = require('../middlewares/hashPassword');
const customerController = require('../controllers/costumerController');
const {validateCustomer} = require('../middlewares/customerValidation')

const customerRouter = Router();

customerRouter.post('/',validateCustomer, hashPassword, customerController.createCustomer);
customerRouter.get('/:id',customerController.getOneCustomer)

module.exports = customerRouter;
