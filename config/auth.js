// module chua middleware xu ly viec login cua nguoi dung
module.exports = {
    checknotAuthenticated: function(req, res, next) {   // check chưa login
        if(req.isAuthenticated()) {
            return res.redirect('/')
        }
        next()
    },
    checkAuthenticated: function(req, res, next) { // check đã login
        if(req.isAuthenticated()) { 
            return next()
        }
        res.redirect('/login')
    },
    authRole: function(role) { // check role login
        return(req, res, next) =>{
            if(req.user.ROLE !== role){
                res.status(401)
                return res.send('not allow')
            }
            next()
        }
    }
}