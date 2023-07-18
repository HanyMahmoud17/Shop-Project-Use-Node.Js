// to call server
const express= require('express');
const app=express();
const path= require('path');
// make serv to my static files
app.use(express.static(path.join(__dirname,"assets")))
app.use(express.static(path.join(__dirname,"images")))

// use templete engine 
app.set('view engine','ejs');
app.set('views','views');

const homeRouter=require('./routes/home.route')
const productRouter=require('./routes/product.route')
const authRouter=require('./routes/auth.route')
app.use('/', homeRouter)
app.use('/product', productRouter)
app.use('/', authRouter)







// if i need to use a html file i use
app.get('/',(req,res,next)=>{
    res.render('index')
})

// test server
// app.get('/',(req,res,next)=>{
//     res.send('hello world');
// })

app.listen(3000,(err)=>{
    // console.log(err);
    console.log('server listening on 3000');
})
