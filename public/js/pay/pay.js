$('.btn-order button').click(function(){
         //cho hiện hộp đăng nhập trong 300ms
         $('.confirm-order').fadeIn();
 
         // thêm phần tử id="over" vào sau body
         $('body').append('<div id="over">');
         $('#over').fadeIn();
})
$(document).on('click', ".close, #over", function() {
    $('#over, .confirm-order').fadeOut(300 , function() {
        $('#over').remove();
    });
   return false;
});