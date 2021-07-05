const mongoose = require('mongoose')

// model dữ liệu được tổ chức trong database của web với collection name là user
const usersSchema = new mongoose.Schema({
    // các trường của đối tượng user đc định nghĩa ở đây
    IDUSER: {  
        type: String
      },
    USERNAME: {
        type: String,
        required: true
      },
    PASSWORD: {
        type: String,
        required: true
    },
    ROLE: {
      type: String,
      required: true
    },
    HOTEN: {
      type: String
    },
    DIACHI: {
        type: String
      },
    SDT: {
        type: String
      },
    EMAIL: {
        type: String
    },
    SCORE: {
      type: String,
    }
    },
    { collection: "users"} // thuộc collection users
)

module.exports = mongoose.model('users', usersSchema) // export cho các module khác thấy