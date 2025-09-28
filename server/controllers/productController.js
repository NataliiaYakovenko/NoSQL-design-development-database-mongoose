const { Product } = require('../models');

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

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const foundProducts = await Product.find();
    if (!foundProducts) {
      return res.status(404).send('Products not found');
    }
    return res.status(200).send({ data: foundProducts });
  } catch (error) {
    next(error);
  }
};
