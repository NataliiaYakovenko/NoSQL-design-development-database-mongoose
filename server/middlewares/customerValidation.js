const {CUSTOMER_VALIDATION_SCHEMA}= require('../schemas/customerSchema')

module.exports.validateCustomer = async (req, res, next) => {
  try {
    const validatedCustomer = await CUSTOMER_VALIDATION_SCHEMA.validate(
      req.body,
      { abortEarly: false }
    );
    req.body = validatedCustomer;
    next();
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
};
