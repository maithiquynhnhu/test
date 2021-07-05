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
});