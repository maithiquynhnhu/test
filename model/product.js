const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    IDSP: {
        type: String
      },
    TENSANPHAM: {
        type: String
      },
    GIA: {
        type: String
    },
    GIAKHUYENMAI: {
      type: String,
    },
    SOLUONG: {
      type: String
    },
    PHANLOAI: {
        type: String
      },
    IMAGE: {
        type: Buffer
      },
    MOTA: {
        type: String
    }
    },
    { collection: "product"}
)

module.exports = mongoose.model('products', productSchema)