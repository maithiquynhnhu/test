const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth');


router.get('/', (req, res) =>{
    var option = {}
    if(req.isAuthenticated()) { option ={ css: '<link rel="stylesheet" href="css/blog-child/blog-child.css">', script : '', layout : 'layouts/layoutC', title : 'Trong bánh có cái gì đó??',authStatus: 1 , username: req.user.HOTEN}}
    else {option = {css: '<link rel="stylesheet" href="css/blog-child/blog-child.css">', script : '', layout : 'layouts/layoutC', title : 'Trong bánh có cái gì đó??',authStatus: 0 , username: ""}}
    res.render('blog_child/blogc', option)
})

module.exports = router