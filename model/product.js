const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  categoryId: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: [[]],
  price: { type: Number, required: true },
  productCode: { type: String, required: true },
  productHeight: { type: Number, required: true },
  productId: { type: Number, required: true },
  productModel: { type: String, required: true },
  productName: { type: String, required: true },
  productWidth: { type: Number, required: true },
  productRating: { type: Number, required: true },
  productWood: { type: String, required: true },
  productDate: [Date],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
