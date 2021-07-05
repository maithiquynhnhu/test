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

const formData = (bodyData,encode_image) =>{
    products({
        IDSP: Date.now().toString(),
        TENSANPHAM: bodyData.tensanpham,
        GIA: bodyData.gia,
        GIAKHUYENMAI : bodyData.giakhuyenmai,
        SOLUONG : bodyData.soluong,
        PHANLOAI: bodyData.phanloai,
        IMAGE: encode_image,
        MOTA: bodyData.mota
    }).save((err) => {
      if (err) {
        throw err;
      }
    });
};

router.get('/',checkAuthenticated, authRole("admin"),async (req,res) => {

    await products.find({}, function(err, cake){
        if(err) throw err
        res.render('admin/admin', {layout : 'layouts/adminlayout', cake: cake})
    })
})

router.post('/addproduct',upload.single('image'),async (req, res) =>{
    var encode_image = req.file.buffer.toString('base64');
    await formData(req.body, encode_image);
    res.status(200).redirect('back')
})

router.delete('/danhsachsanpham/:id', async (req,res) => {
    let cake
    try {
        cake = await products.findById(req.params.id)
        await cake.remove()
        res.redirect('/admin')
    } catch {
        if(cake == null) {
            res.redirect('/admin')
        } else{
            res.redirect(`/product/${cake.id}`)
        }
    }
})

module.exports = router