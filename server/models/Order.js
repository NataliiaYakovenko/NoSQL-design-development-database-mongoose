const mongoose = require('mongoose');
const {Schema} = mongoose
const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        amount: {
          type: Number,
          required: true,
          min: 1,
          validation: {
            validate: Number.isInteger,
            message: 'Amount must be in integer',
          },
        },
      },
    ],
    totalSumma: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['new', 'processing', 'shipped', 'delivered'],
      default: 'new',
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      validate: {
        validator: (value) => value <= new Date(),
        message: 'Date cannot be in future',
      },
    },
  },
  {
    versionKey: false,
  }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
