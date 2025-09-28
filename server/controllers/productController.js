const Product = require('../models/Product');

module.exports.createProduct = async (req, res, next) => {
  try {
    const { body } = req;

    const createdProduct = await Product.create(body);

    if (!createdProduct) {
      return res.status(400).send('Product creation wrong');
    }
    return res.status(201).send({ data: createdProduct });
  } catch (error) {
    next(error);
  }
};
