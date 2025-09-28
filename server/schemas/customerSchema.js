const yup = require('yup');

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
  wishList: yup
    .array()
    .of(
      yup.object({
        productId: yup.string().required('Field product id is required'),
      })
    )
    .default([]),
});
