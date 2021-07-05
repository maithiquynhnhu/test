$('.btn-form button').click(function(){
    //cho hiện hộp đăng nhập trong 300ms
    $('.form-contact').fadeIn();

    // thêm phần tử id="over" vào sau body
    $('body').append('<div id="over">');
    $('#over').fadeIn();
})
$(document).on('click', ".close, #over", function() {
$('#over, .form-contact').fadeOut(300 , function() {
   $('#over').remove();
});
return false;
});