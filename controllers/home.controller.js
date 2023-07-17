// first i make import for model
const productModel=require('../models/products.model')



// here i make the middle
// exports.getHome= (req,res,next)=>{
//     // first i need to get product using the function that was in the model
//     productModel.getAllProducts().then(products => {
//         // noe i render the product in view page
//         res.render('index',{
//             // take with you
//             products: products
//         })
//     })

    
//     let category = req.query.category;
//     if (category && category !== 'all') {
//       productModel.getProductByCategory(String(category)).then(products => {
//         res.render('index', {
//           products: products
//         });
//       });
//     } else {
//       productModel.getAllProducts().then(products => {
//         res.render('index', {
//           products: products
//         });
//       });
//     }


// }

exports.getHome = (req, res, next) => {
    let category = req.query.category;
    let promise;
    if (category && category != 'all') {
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
