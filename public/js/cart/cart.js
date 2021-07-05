$(document).ready(function() {
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
    //---------------Xử lý giỏ hàng--------------------

    //xử lí số tiền
    function changeMoney(money){
        return money.replace(/[^0-9\s]/gi, '')*1;
    }
    //str.replace(/hello/g, 'hi');
    //Xử lý dấu chấm
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    // $('.sum-price-cake').text()
    
    //xử lý tổng tiền
    sumPrice=0;
    //Xử lý sự kiện khi duyệt qua mỗi sản phẩm
    $('.product-member').each(function(index){
        index=index+1;
        //Này để lấy id của từng sản phẩm
        var idProduct="#product-"+index;
        var priceProduct=changeMoney($(idProduct+' .price-new').text());
        //xử lý các sự kiện của giỏ hàng
        var number=$(idProduct+' .number').attr('value');
        var sumPriceCake=priceProduct*number;
        $(idProduct+' .sum-price-cake').text(numberWithCommas(sumPriceCake)+'đ');
        sumPrice+=changeMoney($(idProduct+' .sum-price-cake').text());
        // console.log(priceProduct);
        //xử lí sự kiện nút Cộng
        $(idProduct+' .add').click(function(){
            var money=$(idProduct+' .sum-price-cake').text();
            var newPrice=changeMoney(money);
            number=1+number*1;
            $(idProduct+' .number').attr('value',number);
            newPrice=priceProduct*number;
            $(idProduct+' .sum-price-cake').text(numberWithCommas(newPrice)+'đ');
            sumPrice+=priceProduct;
            //xem thử có check chưa để cập nhật giá total
            var sum = changeMoney($('.price').text());
            if($(idProduct+' .choose-product').prop('checked')){
                var priceTotal=sum*1+priceProduct*1;
                //$('.price').text() này là để cập nhật lại tổng tiền cuối cùng
                $('.price').text(numberWithCommas(priceTotal) +'đ');
            }
        });
        //xử lí sự kiện nút Trừ
        $(idProduct+' .sub').click(function(){
            var money=$(idProduct+' .sum-price-cake').text();
            var newPrice=changeMoney(money);
            if(number>1){
                number=number*1-1;
                $(idProduct+' .number').attr('value',number);
                newPrice=priceProduct*number;
                $(idProduct+' .sum-price-cake').text(numberWithCommas(newPrice)+'đ');
                sumPrice-=priceProduct;
                var sum = changeMoney($('.price').text());
                if($(idProduct+' .choose-product').prop('checked')){
                    var priceTotal=sum*1-priceProduct*1;
                //$('.price').text() này là để cập nhật lại tổng tiền cuối cùng
                    $('.price').text(numberWithCommas(priceTotal)+'đ');
                }
            }
            else
            $(idProduct+' .number').attr('value',1);
        });
        //chọn sản phẩm
        $(idProduct+' .choose-product').click(function(){
            var money=$(idProduct+' .sum-price-cake').text();
            var newPrice=changeMoney(money);
            var priceCurrent=changeMoney($('.price').text())*1;
            
            if($(idProduct+' .choose-product').prop('checked')){
                //$('.price').text() này là để cập nhật lại tổng tiền cuối cùng
                $('.price').text(numberWithCommas(priceCurrent+newPrice)+'đ');
            }
            else
            {
                //$('.price').text() này là để cập nhật lại tổng tiền cuối cùng
                $('.price').text(numberWithCommas(priceCurrent-newPrice)+'đ');
            }
        });
        //
    })
    //Khi chọn nút check all...........thì tất cả số tiền sẽ được cộng
    $('.choose-all').click(function(){

        if($('.choose-all').prop('checked')){
        $('.choose-product').prop('checked',true);
        //$('.price').text() này là để cập nhật lại tổng tiền cuối cùng
        $('.price').text(numberWithCommas(sumPrice) +'đ');
    }
        else{
        $('.choose-product').prop('checked',false);
        //$('.price').text() này là để cập nhật lại tổng tiền cuối cùng
        $('.price').text('0đ');
        }
    });
    //Xử lý khi nhập trực tiếp
});
