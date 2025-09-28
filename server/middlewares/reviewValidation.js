const { REVIEW_VALIDATION_SCHEMA } = require('../schemas/reviewSchema');

module.exports.validateReview = async (req, res, next) => {
  try {
    const validatedReview = await REVIEW_VALIDATION_SCHEMA.validate(req.body, {
      abortEarly: false,
    });
    req.body = validatedReview;
    next();
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ errors: error.errors });
    }
    next(error);
  }
};
