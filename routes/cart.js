const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth');

router.get('/',checkAuthenticated, (req, res) =>{
    res.locals.user = req.user;
    res.render('cart_page/cart', {  css : '<link rel="stylesheet" href="css/cart/cart.css">',
                                    script: '<script src="js/cart/cart.js"></script> <script src="js/public/sticknav.js"></script>',
                                    layout : 'layouts/layoutA',
                                    authStatus: 1 ,
                                    username: req.user.HOTEN
                                })
})

module.exports = router