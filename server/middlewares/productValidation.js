const { PRODUCT_VALIDATION_SCHEMA } = require('../schemas/productSchema');

module.exports.validateProduct = async (req, res, next) => {
  try {
    const validatedProduct = await PRODUCT_VALIDATION_SCHEMA.validate(
      req.body,
      { abortEarly: false }
    );
    req.body = validatedProduct;
    next();
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
};
