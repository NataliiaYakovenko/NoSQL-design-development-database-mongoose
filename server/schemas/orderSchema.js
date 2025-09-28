const yup = require('yup');

module.exports.ORDER_VALIDATION_SCHEMA = yup.object({
  customerId: yup.number().integer().required('Field customer id is required'),
  products: yup.array({
    productId: yup.number().integer().required('Field product id is required'),
    amount: yup
      .number()
      .min(0, 'Amount cannot be negative')
      .integer('Amount must be integer')
      .required('Field amount is required'),
  }),
  totalSumma: yup.number().min(0).required('Field total summa is required'),
  status: yup
    .string()
    .oneOf(['new', 'processing', 'shipped', 'delivered'])
    .required('Field status is required'),
  date: yup.date().max(new Date(), 'Date cannot be in future'),
});
