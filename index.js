// to call server
const express= require('express');
const app=express();
const path= require('path');
// import flash session
const flash= require('connect-flash');

// make serv to my static files
app.use(express.static(path.join(__dirname,"assets")))
app.use(express.static(path.join(__dirname,"images")))
// use flash
app.use(flash())

// use session
const session=require('express-session')
// this to save session in dataBASE NOT IN memory + this return constructor(so i make first letter capital)
const SessionStore= require('connect-mongodb-session')(session)

// not create store to session  
const STORE=new SessionStore({
    uri:'mongodb://127.0.0.1:27017/online-shop',
    collection: 'sessions'
})

app.use(session({
    secret:"this is my secret key by Hany Mahmoud",
    saveUninitialized:false,
    cookie: {
        // 900 hours is its age
        maxAge: 900*60*60*100
    },
    store:STORE
}))


// use templete engine 
app.set('view engine','ejs');
app.set('views','views');


// route
const homeRouter=require('./routes/home.route')
const productRouter=require('./routes/product.route')
const authRouter=require('./routes/auth.route')
const cartRouter=require('./routes/cart.route')
const orderRouter=require('./routes/order.route')
app.use('/', homeRouter)
app.use('/product', productRouter)
app.use('/', authRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)







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
