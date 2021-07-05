const { render } = require('ejs');
const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth'); // modules check đã đăng nhập và role người dùng

router.get('/', (req, res) =>{
    var option = {}
    if(req.isAuthenticated()) { option ={ css : '<link rel="stylesheet" href="css/home/responsive.css"> <link rel="stylesheet" href="css/home/home.css">', // tham số cho css
                                        script: '<script src="js/home/home.js"></script> <script src="js/home/slide.js"></script>', // tham số cho js
                                        layout : 'layouts/layoutA', // tham số cho layout nào đc sử dụng
                                        authStatus: 1 ,
                                        username: req.user.HOTEN // Nếu đã đăng nhập thông tin sẽ có trong request.user, truyền username để hiển thị trên web
                                        }}
    else {option = { css : '<link rel="stylesheet" href="css/home/responsive.css"> <link rel="stylesheet" href="css/home/home.css">', // tham số cho css
                    script: '<script src="js/home/home.js"></script> <script src="js/home/slide.js"></script>', // tham số cho js
                    layout : 'layouts/layoutA', // tham số cho layout nào đc sử dụng
                    authStatus: 0 ,
                    username: ""}}
    res.locals.user = req.user;
    res.render('home', option)
})
module.exports = router
