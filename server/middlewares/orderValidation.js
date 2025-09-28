const { ORDER_VALIDATION_SCHEMA } = require('../schemas/orderSchema');

module.exports.validateOrder = async (req, res, next) => {
  try {
    const validatedOrder = await ORDER_VALIDATION_SCHEMA.validate(
      req.body,
      { abortEarly: false }
    );
    req.body = validatedOrder;
    next();
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
};
