const mongoose = require("mongoose");
const { DB } = require("../configs/db");


mongoose.connect(DB).catch((error) => {
  console.log(`Connect fallen :${error.message}`);
});
