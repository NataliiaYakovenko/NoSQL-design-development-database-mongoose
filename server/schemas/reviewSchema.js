const yup = require('yup');

module.exports.REVIEW_VALIDATION_SCHEMA = yup.object({
  productId: yup.number().integer().required('Field product id is required'),
  customerId: yup.number().integer().required('Field customer id is required'),
  mark: yup
    .number()
    .min(1, 'Mark cannot be less then 1')
    .max(10, 'Mark cannot be more then 10')
    .required('Field mark is required'),
  comment: yup.string().trim().required('Field comment is required'),
  date: yup.date().max(new Date(), 'Date cannot be in future'),
});