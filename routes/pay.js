const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth');


router.get('/',(req, res) =>{
    var option = {}
    if(req.isAuthenticated()) { option ={ css: '<link rel="stylesheet" href="css/pay/pay.css">', script : '<script src="js/pay/pay.js"></script>', layout : 'layouts/layoutC', title : 'Liên hệ với chúng tôi',authStatus: 1 , username: req.user.HOTEN}}
    else {option = {css: '<link rel="stylesheet" href="css/pay/pay.css">', script : '<script src="js/pay/pay.js"></script>', layout : 'layouts/layoutC', title : 'Liên hệ với chúng tôi',authStatus: 0 , username: ""}}
    res.render('pay_page/pay', option)
})

module.exports = router