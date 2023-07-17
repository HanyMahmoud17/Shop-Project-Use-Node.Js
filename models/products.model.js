const mongoose = require('mongoose');
const db = require('../Config/connectDB');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String
});

const Product = mongoose.model('product', productSchema);

exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    Product.find({})
      .then(products => {
        resolve(products);
      })
      .catch(err => reject(err));
  });
};

exports.getProductByCategory = category => {
  return new Promise((resolve, reject) => {
    Product.find({ category: category })
      .then(products => {
        resolve(products);
      })
      .catch(err => reject(err));
  });
};