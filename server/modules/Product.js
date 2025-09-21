const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 64,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 250,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 64,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: 'Amount must be integer',
      },
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
