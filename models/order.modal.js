const mongoose = require('mongoose');
const db = require('../Config/connectDB');
const DB_URL = 'mongodb://127.0.0.1:27017/online-shop';

const orderSchema = new mongoose.Schema({
  orderAddress: {
    type: String,
    // required: true
  },
  status: {
    type: String,
    enum: ['pending','in-progress','complete'],
    default:'pending'
  },
  cartItems: [{
    cartId: {
      type: String,
      // required: true
    },
    name: {
      type: String,
      // required: true
    },
    price: {
      type: Number,
      // required: true
    },
    amount: {
      type: Number,
      // required: true
    },
    image: {
      type: String,
      // required: true
    },
    productId: {
      type: String,
      // required: true
    }
  }],
  timestamp: {
    type: Date,
    default: Date.now
  },
  userId:String,
});

const Order = mongoose.model('order', orderSchema);

// Create a new order with the given data
exports.createOrder = async (orderData, itemData,userId) => {
  // console.log(userId);
  const order = new Order({
    ...orderData,
    cartItems: [itemData],
    userId: userId
  });
  return order.save();
}

exports.getAllOrders = userId => {
  return new Promise((resolve, reject) => {
    Order.find({userId:userId},{}, { sort: { timestamp: 1 } })
      .then(orderItems => {
        resolve(orderItems);
      })
      .catch(err => reject(err));
  });
};7

exports.deleteOrder=(id)=>{
  return new Promise((resolve, reject) => {
    Order.findByIdAndDelete(id)
      .then(product => {
        resolve();
      })
      .catch(err => reject(err));
  });
}

exports.deleteAllOrder=(id)=>{
  return new Promise((resolve, reject) => {
    Order.deleteMany({userId:id})
      .then(() => {
        resolve();
      })
      .catch(err => reject(err));
  });
}

    // module.exports = Order;