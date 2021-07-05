const mongoose = require('mongoose')


const khachhangSchema = new mongoose.Schema({
    IDKH: {
        type: String
      },
    IDUSER: {
        type: String
      },
    HOTENKH: {
        type: String,
        required: true
    },
    DIACHI: {
        type: String,
        required: true
      },
    SDT: {
        type: String,
        required: true
      },
    EMAIL: {
        type: String,
        required: true
    }
    },
    { collection: "KHACHHANG"}
)

module.exports = mongoose.model('khachhang', khachhangSchema)