const express = require('express')
const router = express.Router()
const { checkAuthenticated, checknotAuthenticated, authRole } = require('../../config/auth'); // modules check đã đăng nhập và role người dùng
const users = require('../../model/users')

router.get('/:id',checkAuthenticated,async (req, res) =>{
    try {
        const user = await users.findById(req.params.id)
        res.render('user/profile',{layout: 'layouts/userlayout', user : user} )
    } catch {
        res.redirect('/')
    }
    
})

module.exports = router
