const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../../config/auth');


router.get('/',checkAuthenticated, (req, res) =>{
    res.render('user/follow_order', { css: '<link rel="stylesheet" href="/css/login/login.css"> <link rel="stylesheet" href="/css/follow-order/follow-order.css">', script : '', layout : 'layouts/layoutC', title : '',authStatus: 1 , username: req.user.HOTEN})
})

module.exports = router