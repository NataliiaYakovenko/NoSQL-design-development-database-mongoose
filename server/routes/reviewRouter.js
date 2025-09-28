const { Router } = require('express');
const { validateReview } = require('../middlewares/reviewValidation');
const reviewController = require('../controllers/reviewController');

const reviewRouter = Router();

reviewRouter.post('/', validateReview, reviewController.createReview);

module.exports = reviewRouter;
