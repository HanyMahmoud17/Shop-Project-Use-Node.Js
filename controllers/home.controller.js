// first i make import for model
const productModel=require('../models/products.model')

exports.getHome = (req, res, next) => {
    let category = req.query.category;
    let validCategory=['clothes', 'phones','laptops','test']
    let promise;
    if (category && category != 'all' && validCategory.includes(category)) {
      promise = productModel.getProductByCategory(category);
    } else {
      promise = productModel.getAllProducts();
    }
  
    promise.then(products => {
      res.render('index', {
        products: products
      });
    }).catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
  };
