const mongoose = require('mongoose');
// const db = require('../Config/connectDB');
// const DB_URL = 'mongodb://127.0.0.1:27017/online-shop';
const bcrypt=require('bcrypt');

const authSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('user', authSchema);

exports.createNewUser = (username,email,password) => {
  return new Promise((resolve, reject) => {
    User.findOne({email: email})
      .then(user => {
        if(user){
            alert("User already exists")
            reject('email is already in use')
        } else {
            return bcrypt.hash(password,10)
        }
      }).then(hashedPassword => {
        let user = new User({
            username: username,
            email:email,
            password: hashedPassword,

        })
        return user.save()
      }).then(()=>{
        resolve()
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