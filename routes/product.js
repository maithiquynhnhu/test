const express = require('express')
const router = express.Router()
const products = require('../model/product')

router.get('/:id',async (req, res) =>{
        await products.findById(req.params.id, function(err, cake){
            if(err) throw err
            let option = {}
            if(req.isAuthenticated()) { option ={layout : 'layouts/productlayout', // tham số cho layout nào đc sử dụng
            authStatus: 1 ,
            username: req.user.HOTEN,   // Nếu đã đăng nhập thông tin sẽ có trong request.user, truyền username để hiển thị trên web
            cake : cake
            }}
            else {option = { layout : 'layouts/productlayout', // tham số cho layout nào đc sử dụng
            authStatus: 0 ,
            username: "",
            cake : cake
            }}
        res.render('product_page/product', option)
        })
})


module.exports = router
