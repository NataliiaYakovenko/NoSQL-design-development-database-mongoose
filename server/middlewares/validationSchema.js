const yup = require('yup');

module.exports.PRODUCT_VALIDATION_SCHEMA = yup.object({
  title: yup.string().trim().min(2).max(64).required('Field title is required'),
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

module.exports.CUSTOMER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required('Field first name is required'),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required('Field last name is required'),
  email: yup
    .string()
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      'Example email mail@testing.com'
    )
    .required('Field email is required'),
  password: yup.string().required('Field password is required'),
  deliveryAddress: yup.string().required('Field delivery address is required'),
  wishlist: yup.array(),
});

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
