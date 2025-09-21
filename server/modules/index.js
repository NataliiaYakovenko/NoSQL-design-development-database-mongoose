const mongoose = require('mongoose');
const { DB } = require('../configs/db');

mongoose.connect(DB).catch((error) => {
  console.log(`Connect fallen :${error.message}`);
});

module.exports.Product = require('./Product');
module.exports.Order = require('./Order');
module.exports.Customer = require('./Customer');
