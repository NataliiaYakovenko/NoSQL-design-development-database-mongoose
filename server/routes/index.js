const { Router } = require('express');
const productRouter = require('./productRouter');
const customerRouter = require('./customerRouter');
const orderRouter = require('./orderRouter');
const reviewRouter = require('./reviewRouter');

const router = Router();

router.use('/products', productRouter);
router.use('/customers', customerRouter);
router.use('/orders', orderRouter);
router.use('/reviews', reviewRouter);

module.exports = router;
