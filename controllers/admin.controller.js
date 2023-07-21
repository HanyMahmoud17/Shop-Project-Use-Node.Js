const productModel=require('../models/products.model')
const validationResult=require('express-validator').validationResult

exports.getAdd=(req,res,next)=>{
    res.render('add-product',{
        validationErrors: req.flash('validationErrors'),
        isUser:true,
        isAdmin:true
    })
}

exports.postAdd=(req,res,next)=>{
    // console.log(req.file);
    if(validationResult(req).isEmpty()) {
    productModel.addProduct({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        description:req.body.description,
        image:req.file.filename,
    })
    res.redirect('/')
    } else {
        req.flash('validationErrors',validationResult(req).array());
        res.redirect('/add-product');
    }
}