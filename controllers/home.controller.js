// first i make import for model
const productModel=require('../models/products.model')



// here i make the middle
exports.getHome= (req,res,next)=>{
    // first i need to get product using the function that was in the model
    productModel.getAllProducts().then(products => {
        // noe i render the product in view page
        res.render('index',{
            // take with you
            products: products
        })
    })
}
