const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { errorHandler } = require("./errorHandler");

const app = express();

app.use(cors());
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.use(express.json());

app.use("/api/", router);

app.use(errorHandler);

module.exports = app;
