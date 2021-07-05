const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth'); // modules check đã đăng nhập và role người dùng

if(process.env.NODE_ENV !== 'production') { // nếu đang trong trạng thái production
    require('dotenv').config()
}

const users = require('../model/users') // model users tham chiếu xuống database
const passport = require('passport'); // module passport sử dụng trong login
const flash = require('express-flash'); // module hiển thị thông báo lỗi 
const initializePassport = require('../config/passport') // module config cho passport
initializePassport(passport) // khởi tạo passport



router.use(flash())
router.use(express.json());

// sử dụng middleware để check trạng thái đăng nhập
router.get('/', checknotAuthenticated, (req, res) =>{
    res.render('login_page/login', {css : '<link rel="stylesheet" href="css/login/login.css">', script:'', layout : 'layouts/layoutB', title: 'Đăng nhập'})
})

// login thông qua passport local
router.post('/', passport.authenticate('local',{
    successRedirect: '/',       // thành công thì qua trang chủ 
    failureRedirect: '/login',  //fail thì quay lại login
    failureFlash: true
}))


// console.log(req.body.username)
// users.findOne({USERNAME: req.body.username}, async function(err, user) {
//     if (err) throw err;
//     console.log(user)
//     try {
//         if(await bcrypt.compare(req.body.password, user.PASSWORD)) {
//             res.send('Success')
//         } else{
//             res.send('not allow')
//         }
//     } catch {
//         res.status(500).send()
//     }
//     } 
module.exports = router