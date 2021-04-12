const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.port || 3000;
const cors = require("cors");

//route
const API = require("./router/API");

//db
const db = mongoose.connect(
  //process.env.MOGODB_URI || "mongodb://localhost:27017/Api",
  process.env.MOGODB_URI ||
    "mongodb+srv://macrografi:2wsx1QAZ<@cluster0.2hafr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected to DB");
    }
  }
);

app.use(bodyParser.json());
app.use(cors());
app.use(API.router);

app.listen(port, () => {
  console.log("Running PORT : " + port);
});
