const express = require('express')
const router = express.Router()
const products = require('../../model/product')
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../../config/auth');
const fs = require('fs')
var multer  = require('multer')
var storage = multer.memoryStorage(); 
var upload = multer({ storage: storage })
const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.use(require('body-parser').urlencoded({ extended: false }));

router.get('/:id/edit',checkAuthenticated, authRole("admin"),async (req,res) => {
    try {
        const cake = await products.findById(req.params.id)
        res.render('admin/edit', {layout : 'layouts/adminlayout', cake : cake})
    } catch {
        res.redirect('/admin')
    }
    
})

router.put('/:id',upload.single('image'),async (req, res) =>{
    let cake
    try {
        cake = await products.findById(req.params.id)
        cake.GIA = req.body.gia
        cake.GIAKHUYENMAI = req.body.giakhuyenmai
        cake.SOLUONG = req.body.soluong
        cake.PHANLOAI =req.body.phanloai
        cake.IMAGE = req.file.buffer.toString('base64')
        cake.MOTA = req.body.mota
        await cake.save()
        console.log(cake)
        res.redirect('/admin')
    } catch {
        if(cake == null) {
            res.redirect('/admin')
        }
        else {res.send('cap nhat khong thanh cong')}
    }
})

module.exports = router