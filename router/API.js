const express = require('express');
const router = express.Router();

//model
const Product = require('../model/product');
const Carousel = require('../model/carousel');

//product post
router.post('/add', async (req, res) => {
  let product = new Product(req.body);

  product.save((err, result) => {
    if (err) {
      return res.sendStatus(500).send({ message: err });
    }
    return res.sendStatus(200);
  });
});

//product get
router.get('/products', async (req, res) => {
  let product = await Product.find({});
  res.send(product);
  // Api.find({}).then(res.send(api.js)).catch(err => res.status(500).json({ message: "Error", error: err }));
});

//carousel post
router.post('/addCarousel', async (req, res) => {
  let carousel = new Carousel(req.body);

  carousel.save((err, result) => {
    if (err) {
      return res.sendStatus(500).send({ message: err });
    }
    return res.sendStatus(200);
  });
});

//carousel get
router.get('/carousels', async (req, res) => {
  let carousel = await Carousel.find({});
  res.send(carousel);
});

let apiRoute = { router };
module.exports = apiRoute;
