const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth');


router.get('/',(req, res) =>{
    var option = {}
    if(req.isAuthenticated()) { option ={ css: '<link rel="stylesheet" href="css/order/order.css">', script : '', layout : 'layouts/layoutC', title : 'Order',authStatus: 1 , username: req.user.HOTEN}}
    else {option = {css: '<link rel="stylesheet" href="css/order/order.css">', script : '', layout : 'layouts/layoutC', title : 'Order',authStatus: 0 , username: ""}}
    res.render('order_page/order', option)
})

module.exports = router