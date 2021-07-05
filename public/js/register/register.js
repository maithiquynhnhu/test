$("#form-login").validate({
    rules: {
        hoten: {
            required: true,
            minlength: 4
        },
        sdt: {
            required:  true,
            digits: true,
            minlength:3
        },
        email: {
            required: true,
            email: true
        },
        username:{
            required: true
        },
        password: {
            required: true,
            minlength:5
        },
        repwd:{
            equalTo:"#password",
        },
    },
    messages: {
        hoten: {
            required: "Vui lòng nhập tên của bạn",
            minlength: "Tên đăng nhập phải trên 4 kí tự"
        },
        sdt: {
            required: "Vui lòng nhập số điện thoại",
            digits:"Số điện thoại của bạn không có thật",
            minlength: "Số điện thoại của bạn phải trên 3 kí tự"
        },
        email: {
            required: "Vui lòng nhập email",
            email: "Email không hợp lệ"
        },
        username: {
            required: "Vui lòng nhập tên đăng nhập",
        },
        password: {
            required: "Vui lòng nhập mật khẩu",
            minlength:"Mật khẩu quá ngắn"
        },
        repwd:{
            equalTo:"Mật khẩu không trùng khớp"
        }
    }
});