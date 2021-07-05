const express = require('express')
const router = express.Router()
const products = require('../model/product')


router.get('/',async (req, res) =>{
    var Tiramisu = []
    var Cheesecake = []
    var Macaron = []
    var Birthday = []
    var option = {}
    // phan loai san pham
    await products.find({PHANLOAI : "Cheesecake"}, function(err, cake){
        if(err) throw err
        Cheesecake = cake
    })
    if(req.isAuthenticated()) { option ={ css : '<link rel="stylesheet" href="css/menu/responsive.css"> <link rel="stylesheet" href="css/menu/menu.css">', // tham số cho css
                                        script: '<script src="js/menu/menu.js"></script> <script src="js/menu/slide.js"></script>', // tham số cho js
                                        layout : 'layouts/layoutA', // tham số cho layout nào đc sử dụng
                                        authStatus: 1 ,
                                        username: req.user.HOTEN,
                                        Tiramisu : Tiramisu ,
                                        Cheesecake: Cheesecake,
                                        Macaron: Macaron,
                                        Birthday: Birthday   // Nếu đã đăng nhập thông tin sẽ có trong request.user, truyền username để hiển thị trên web
                                        }}
    else {option = { css : '<link rel="stylesheet" href="css/menu/responsive.css"> <link rel="stylesheet" href="css/menu/menu.css">', // tham số cho css
                    script: '<script src="js/menu/menu.js"></script> <script src="js/menu/slide.js"></script>', // tham số cho js
                    layout : 'layouts/layoutA', // tham số cho layout nào đc sử dụng
                    authStatus: 0 ,
                    username: "",
                    Tiramisu : Tiramisu ,
                    Cheesecake: Cheesecake,
                    Macaron: Macaron,
                    Birthday: Birthday
                    }}
    res.locals.user = req.user;
    res.render('menu_page/testmenu', option)
})



module.exports = router