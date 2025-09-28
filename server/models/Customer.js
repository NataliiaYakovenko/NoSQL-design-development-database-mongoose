const mongoose = require('mongoose');

const {Schema} = mongoose

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 64,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 64,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => {
          return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value);
        },
        message: 'Email is not valid.',
      },
    },
    password: {
      type: String,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
      trim: true,
    },

    wishList: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
