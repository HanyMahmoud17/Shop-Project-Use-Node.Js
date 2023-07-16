const mongoose=require('mongoose');
// this is the db
const DB_URL='mongodb://127.0.0.1:27017/online-shop';



const productSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    description:String,
    image:String
})

const Product=mongoose.model('product',productSchema);

exports.getAllProducts=()=>{

    // now i make my promisse to pass it to the controller

    return new Promise((resolve,reject)=>{
        //conect db + i make promise chain
        mongoose.connect(DB_URL).then(()=>{
            // get all products
            console.log("server connected");
            return Product.find({})
        }).then(products=>{
            mongoose.disconnect()
            // console.log("server disconnected");
            // here after i get all products i resolve it
            resolve(products)
        }).catch(err=> reject(err))
    })


}