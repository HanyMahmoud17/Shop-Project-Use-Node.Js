const mongoose = require('mongoose');
const db = require('../Config/connectDB');
const DB_URL = 'mongodb://127.0.0.1:27017/online-shop';
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

exports.getProductById = id => {
  return new Promise((resolve, reject) => {
    Product.findById(id)
      .then(product => {
        resolve(product);
      })
      .catch(err => reject(err));
  });
};

exports.getFirstProduct = () => {
  return new Promise((resolve, reject) => {
    Product.findOne()
      .then(product => {
        resolve(product);
      })
      .catch(err => reject(err));
  });
};