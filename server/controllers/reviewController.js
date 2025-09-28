const { Review } = require('../models');

module.exports.createReview = async (req, res, next) => {
  try {
    const { body } = req;

    const createdReview = await Review.create(body);

    if (!createdReview) {
      return res.status(400).send('Review creation wrong');
    }
    return res.status(201).send({ data: createdReview });
  } catch (error) {
    next(error);
  }
};
