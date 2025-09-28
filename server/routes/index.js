const { Router } = require('express');
const productRouter = require('./productRouter');
const customerRouter = require('./customerRouter');

const router = Router();

router.use('/products', productRouter);
router.use('/customers', customerRouter);

module.exports = router;
