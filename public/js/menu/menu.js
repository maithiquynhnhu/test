$(document).ready(function() {
    AOS.init();
    var aboveHeight = $('.nav').outerHeight();
        $(window).scroll(function(){
            if ($(window).scrollTop() > aboveHeight){
            $('sticknav').addClass('fixed').css('top','0').next().css('padding-top','0px');
           $('.nav').css('background-color','rgba(0,0,0,0.8)');
           $('.img-logo').css('width','6%');
           $('.search-cell').css('top','27px')
            } else {
           $('sticknav').removeClass('fixed').next().css('padding-top','0');
           $('.nav').css('background-color','rgba(255,255,255,0)');
            }
        });
    });
    //-------------*btn-cake*--------------
$('.cheese-cake-btn').click(function(){
    document.getElementById('neo-menu').scrollIntoView(true);
    $('.menu-cheese-cake').show(500);
    $('.menu-birthday-cake').hide(300);
    $('.menu-tiramisu-cake').hide(300);
    $('.menu-macaron-cake').hide(300);
});
$('.tira-cake-btn').click(function(){
    document.getElementById('neo-menu').scrollIntoView(true);
    $('.menu-cheese-cake').hide(300);
    $('.menu-birthday-cake').hide(300);
    $('.menu-tiramisu-cake').show(500);
    $('.menu-macaron-cake').hide(300);
});
$('.macaron-cake-btn').click(function(){
    document.getElementById('neo-menu').scrollIntoView(true);
    $('.menu-cheese-cake').hide(300);
    $('.menu-birthday-cake').hide(300);
    $('.menu-tiramisu-cake').hide(500);
    $('.menu-macaron-cake').show(500);
});
$('.birthday-cake-btn').click(function(){
    document.getElementById('neo-menu').scrollIntoView(true);
    $('.menu-cheese-cake').hide(300);
    $('.menu-birthday-cake').show(500);
    $('.menu-tiramisu-cake').hide(500);
    $('.menu-macaron-cake').hide(300);
});
//----------------------------------------
var mql = window.matchMedia('screen and (max-width: 767px)');
if (mql.matches){
    $('.icon-open').click(function(){
        $('.icon-open').css('display','none');
        $('.nav-menu').show();
        $('.icon-close').show();
        $('body').append('<div id="over">');
        $('#over').fadeIn();
    });
    $(document).on('click','.icon-close, #over', function() {
        $('.icon-close').hide();
        $('.icon-open').show();
        $('.nav-menu').hide();
        $('#over').remove();
    });
}
