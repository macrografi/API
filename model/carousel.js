const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carouselSchema = new Schema({
  id: { type: Number, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
});

const Carousel = mongoose.model('Carousel', carouselSchema);
module.exports = Carousel;
