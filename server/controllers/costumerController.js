const bcrypt = require('bcrypt');
const { Customer } = require('../models');

module.exports.createCustomer = async (req, res, next) => {
  try {
    const { body } = req;

    const createdCustomer = await Customer.create({
      ...body,
      password: req.passwordHash,
    });

    if (!createdCustomer) {
      return res.status(400).send('Customer creation wrong');
    }
    return res.status(201).send({ data: createdCustomer });
  } catch (error) {
    next(error);
  }
};

module.exports.getOneCustomer = async (req, res, next) => {
  try {
    const { _id } = req;

    const foundCustomer = await Customer.findOne(_id);
    if (!foundCustomer) {
      return res.status(404).send('Customer not found');
    }
    return res.status(200).send({ data: foundCustomer });
  } catch (error) {
    next(error);
  }
};
