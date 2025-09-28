// const mongoose = require('mongoose');

// const reviewSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: Schema.Types.ObjectId,
//       ref: 'Product',
//       required: true,
//     },
//     customerId: {
//       type: Schema.Types.ObjectId,
//       ref: 'Customer',
//       required: true,
//     },
//     mark: {
//       type: Number,
//       required: true,
//       min: 1,
//       max: 10,
//     },
//     comment: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//       validate: {
//         validator: (value) => value <= new Date(),
//         message: 'Date cannot be in future',
//       },
//     },
//   },
//   {
//     versionKey: false,
//   }
// );

// const Review = mongoose.model('Review', reviewSchema);
// module.exports = Review;
