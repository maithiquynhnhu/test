if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config() // module chứa các biết môi trường như database URL, SESSION KEY
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const passport = require('passport');
const session = require('express-session');
app.set()
// khai báo các routes trang web
const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const aboutRouter = require('./routes/about')
const blogRouter = require('./routes/blog')
const blogcRouter = require('./routes/blog_child')
const cartRouter = require('./routes/cart')
const menuRouter = require('./routes/menu')
const orderRouter = require('./routes/order')
const registerRouter = require('./routes/register')
const productRouter = require('./routes/product')
const adminRouter = require('./routes/admin/admin')
const profileRouter = require('./routes/user/profile')
const testmenuRouter = require('./routes/testmenu')
const editRouter = require('./routes/admin/edit')
const eventRouter = require('./routes/event')
const contactRouter = require('./routes/contact')
const payRouter = require('./routes/pay')
const followRouter = require('./routes/user/follow_order')

//sử dụng các module
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
// views ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
//kết nói database
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(require('body-parser').urlencoded({ extended: true }));

// sử dụng session cho các user login
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// xác định url nào ứng với route nào 


app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/about', aboutRouter)
app.use('/blog', blogRouter)
app.use('/blog_child', blogcRouter)
app.use('/cart', cartRouter)
app.use('/menu', menuRouter)
app.use('/order', orderRouter)
app.use('/register', registerRouter)
app.use('/product', productRouter)
app.use('/admin', adminRouter)
app.use('/profile', profileRouter)
app.use('/testmenu', testmenuRouter)
app.use('/admin/edit', editRouter)
app.use('/event', eventRouter)
app.use('/contact', contactRouter)
app.use('/pay', payRouter)
app.use('/follow_order', followRouter)


// logout session
app.delete('/logout', (req, res) => {
	req.logout();
	res.redirect('back');
});


app.listen(process.env.PORT || 3000)