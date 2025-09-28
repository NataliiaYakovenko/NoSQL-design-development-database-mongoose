const { Order } = require('../models');

module.exports.createOrder = async (req, res, next) => {
  try {
    const { body } = req;

    const createdOrder = await Order.create(body);

    if (!createdOrder) {
      return res.status(400).send('Order creation wrong');
    }
    return res.status(201).send({ data: createdOrder });
  } catch (error) {
    next(error);
  }
};