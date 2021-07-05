const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy // chiến lược login local
const users = require('../model/users') // ánh xạ đến database users

// chiến lược login local
module.exports = function(passport) {
    passport.use( new LocalStrategy( // xử lý login
        function(username, password, done) {
        users.findOne({ USERNAME: username }, function (err, user) { // tìm username trùng với data lấy từ form login
          if (err) { return done(err); }
          if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
          bcrypt.compare(password, user.PASSWORD, function (err, res) { // so sánh hash password trùng với data lấy từ form login
            if (err) return done(err);
            if (res === false) return done(null, false, { message: 'Incorrect password.' });
            return done(null, user);
        });
        });
      }))  
    passport.serializeUser((user, done) => { // xử lý tạo passport
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => { // xử lý xóa passport
        users.findById( id, function (err, user) {
            done(null, user);
        });
    }) 
}
