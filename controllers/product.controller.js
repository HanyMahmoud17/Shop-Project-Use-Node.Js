const productModel=require('../models/products.model')

exports.getProduct=(req,res,next)=>{
    productModel.getFirstProduct().then((product)=>{
        // console.log("product",product);
        res.render('productDetails', {
            product: product,
            isUser:true
        })
    })

}

exports.getProductById=(req,res,next)=>{
    let id=req.params.id;
    // console.log("id..",id);
    productModel.getProductById(id).then((product)=>{
        // console.log("product",product);
        res.render('productDetails', {
            product: product,
            isUser:true
        })
    })

}