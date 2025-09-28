const yup = require('yup');

module.exports.ORDER_VALIDATION_SCHEMA = yup.object({
  customerId: yup.string().required('Field customer id is required'),

  products: yup
    .array()
    .of(
      yup.object({
        productId: yup.string().required('Field product id is required'),
        amount: yup
          .number()
          .min(1, 'Amount must be at least 1')
          .integer('Amount must be integer')
          .required('Field amount is required'),
      })
    )
    .required('Field products is required'),

  amountOrder: yup
    .number()
    .min(1, 'Amount of order must be at least 1')
    .integer('Amount of order must be integer')
    .required('Field amount of order is required'),

  totalSumma: yup
    .number()
    .min(0, 'Total sum cannot be negative')
    .required('Field total summa is required'),

  status: yup
    .string()
    .oneOf(['new', 'processing', 'shipped', 'delivered'])
    .required('Field status is required'),

  date: yup.date().max(new Date(), 'Date cannot be in future'),
});
