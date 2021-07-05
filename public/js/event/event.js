var slideIndex=0;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Sự kiện click()
$('#btn-christmas').click(function(){
  //cho hiện hộp đăng nhập trong 300ms
  $('.mery-christmas').fadeIn();

  // thêm phần tử id="overr" vào sau body
  $('body').append('<div id="overr">');
  $('#overr').fadeIn();
})

$(document).on('click', " #overr", function() {
$('#overr, .mery-christmas').fadeOut(300 , function() {
 $('#overr').remove();
});
return false;
});
///
$('#btn-vip').click(function(){
  //cho hiện hộp đăng nhập trong 300ms
  $('.VIP').fadeIn();

  // thêm phần tử id="overr" vào sau body
  $('body').append('<div id="overr">');
  $('#overr').fadeIn();
})

$(document).on('click', " #overr", function() {
$('#overr, .VIP').fadeOut(300 , function() {
 $('#overr').remove();
});
return false;
});
///
$('#btn-gift').click(function(){
  //cho hiện hộp đăng nhập trong 300ms
  $('.gift-voucher').fadeIn();

  // thêm phần tử id="overr" vào sau body
  $('body').append('<div id="overr">');
  $('#overr').fadeIn();
})

$(document).on('click', " #overr", function() {
$('#overr, .gift-voucher').fadeOut(300 , function() {
 $('#overr').remove();
});
return false;
});
///
$('#btn-birthday').click(function(){
  //cho hiện hộp đăng nhập trong 300ms
  $('.happy-birthday').fadeIn();

  // thêm phần tử id="overr" vào sau body
  $('body').append('<div id="overr">');
  $('#overr').fadeIn();
})

$(document).on('click', " #overr", function() {
$('#overr, .happy-birthday').fadeOut(300 , function() {
 $('#overr').remove();
});
return false;
});