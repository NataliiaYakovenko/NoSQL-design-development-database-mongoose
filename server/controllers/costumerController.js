const bcrypt = require('bcrypt');
const { Customer } = require('../models');
const { hashPassword } = require('../middlewares/hashPassword');

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

// module.exports.getAllProducts = async (req, res, next) => {
//   try {
//     const foundProducts = await Product.find();
//     if (!foundProducts) {
//       return res.status(404).send('Products not found');
//     }
//     return res.status(200).send({ data: foundProducts });
//   } catch (error) {
//     next(error);
//   }
// };
