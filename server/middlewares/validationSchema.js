const yup = require('yup');

module.exports.PRODUCT_VALIDATION_SCHEMA = yup.object({
  title: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required('Field title is required'),
  description: yup
    .string()
    .trim()
    .min(2)
    .max(250)
    .required('Field description is required'),
  category: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required('Field category is required'),
  price: yup
    .number()
    .min(0, 'Price cannot be negative')
    .required('Field price is required'),
  amount: yup
    .number()
    .min(0, 'Amount cannot be negative')
    .integer('Amount must be integer')
    .required('Field amount is required'),
  discount: yup
    .number()
    .min(0, 'Discount cannot be negative')
    .max(100, 'Discount cannot be more 100%'),
});
