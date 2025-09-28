const { Router } = require('express');
const productRouter = require('./productRouter');
const customerRouter = require('./customerRouter');
const orderRouter = require('./orderRouter');

const router = Router();

router.use('/products', productRouter);
router.use('/customers', customerRouter);
router.use('/orders', orderRouter);

module.exports = router;
