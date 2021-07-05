const express = require('express')
const router = express.Router()
const users = require('../model/users')
router.use(require('body-parser').urlencoded({ extended: false }));
const bcrypt = require('bcrypt')
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../config/auth');

// hàm xử lý việc lưu dữ liệu trong database
const formData = (bodyData, hashedPassword) =>{
    users({
        IDUSER: Date.now().toString(),
        HOTEN: bodyData.hoten,
        SDT: bodyData.sdt,
        EMAIL : bodyData.email,
        ROLE: 'user',
        USERNAME : bodyData.username, 
        PASSWORD : hashedPassword // password lưu trong data base được hash
    }).save((err) => {
      if (err) {
        throw err;
      }
    });
};
// khi user get /login sẽ render page login với các option sau sử dụng middleware để check trạng thái đăng nhập
router.get('/',checknotAuthenticated,(req, res) =>{
    res.render('register_page/register', {css: '<link rel="stylesheet" href="css/register/register.css">',
                                            script : '<script src="js/register/register.js"></script>',
                                            layout : 'layouts/layoutB',
                                            title : 'Đăng ký'
                                        })
})

// khi data được post lên 
router.post("/",  async (req, res) => {   
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10) // thực hiện hash password
        formData(req.body, hashedPassword) // dữ liệu của phương thức post sẽ ở trong request.body
        res.status(201).redirect('/login') // đúng thì set status 201 và chuyển lại login
    } catch {
        res.status(500).redirect('/register') // lỗi thì set status 500 và redirect lại register
    }
});

module.exports = router