const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.port || 3000;
const cors = require('cors');

//route
const API = require('./router/API');

//db
const db = mongoose.connect(
  'mongodb://localhost:27017/Api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log('Connected to DB');
    }
  }
);

app.use(bodyParser.json());
app.use(cors());
app.use(API.router);

app.listen(port, () => {
  console.log('Gulp is running PORT : ' + port);
});
