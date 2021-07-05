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
//Slide review
var slideRvIndex=0;
// KHai bào hàm hiển thị slide
function showSlidesRv() {
    var i;
    var slidesRv = document.getElementsByClassName("review-member");
    var dotsRv = document.getElementsByClassName("dot-rv");
    for (i = 0; i < slidesRv.length; i++) {
       slidesRv[i].style.display = "none";  
    }
    for (i = 0; i < dotsRv.length; i++) {
        dotsRv[i].className = dotsRv[i].className.replace(" active", "");
    }

    slidesRv[slideRvIndex].style.display = "block";  
    dotsRv[slideRvIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideRvIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideRvIndex > slidesRv.length - 1) {
      slideRvIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlidesRv, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlidesRv(slideRvIndex = 0);
function reviewSlide(n) {
  showSlidesRv(slideRvIndex = n);
}