// Mảng cart chưa item product
let cart=[
    {product:{
        TENSANPHAM: 'asifh',
        GIA: 1211,
        IMG:'fuhfhiqueh',
        GIAGOC:40000,
        PHANLOAI:"FGQUIUFH",
        SOLUONG:0,
    }
}
]
// Hàm add item sản phẩm 
async function addctgiohang(IMG,TENSANPHAM,GIA){
var TENSANPHAM = document.getElementsByName(TENSANPHAM)[0].innerHTML;
var GIA=document.getElementsByName(GIA)[0].innerText; 
var textsp=document.getElementById('numgiohang').innerHTML;
var numbersp=Number(textsp)+1;
document.getElementById('numgiohang').innerHTML=numbersp;
localStorage.getItem('giohang',numbersp);


localStorage.setItem('soluong',numbersp);

// Xét mảng cart trong localStorage đã có sản phẩm tương tự chưa - Nếu chưa thêm vào cart
let storage=localStorage.getItem('cart')
if(storage){
    cart=JSON.parse(storage)
}
let product = {
        TENSP: TENSANPHAM,
        GIA: GIA,
        IMG:IMG ,
        PHANLOAI:"FGQUIUFH",
        SOLUONG: 0
}
let item = cart.find(c => {

 c.TENSANPHAM == product.TENSP;
})
if(item){
    item.SOLUONG == num;
    item.SOLUONG+=1
}
else{
    product.SOLUONG+=1;
    cart.push(product)
}
localStorage.setItem('cart',JSON.stringify(cart))
}
// hàm add item sản phẩm chính
function addctgiohangmain(TENSANPHAMMAIN,IDSPMAIN,GIAMAIN,PHANLOAIMAIN,IMGMAIN){
    var TENSANPHAMMAIN=document.getElementsByName(TENSANPHAMMAIN)[0].innerText;
    var IDSPMAIN=document.getElementsByName(IDSPMAIN)[0].innerText;
    var GIAMAIN=document.getElementsByName(GIAMAIN)[0].innerText; 
    var PHANLOAIMAIN=document.getElementsByName(PHANLOAIMAIN)[0].innerText;
    var textsp=document.getElementById('numgiohang').innerText; 
    var numberspnhaptext=document.getElementById("quantity-product").value; 
    var numberspnhap=Number(textsp)+Number(numberspnhaptext);
    // Xét số lượng sản phẩm
    document.getElementById('numgiohang').innerHTML=numberspnhap;
    localStorage.setItem('giohang',numberspnhap);

    // Xét mảng cart đã có item sản phẩm chưa - Nếu chưa thêm vảo cart
    let storage=localStorage.getItem('cart')
    if(storage){
        cart=JSON.parse(storage)
    }
    let product = {
            TENSP:  TENSANPHAMMAIN,
            GIA: GIAMAIN,
            IMG:IMGMAIN ,
            GIAGOC:40000,
            PHANLOAI:"FGQUIUFH",
            SOLUONG: 0,
    }
    let item = cart.find(c => {
    
     c.TENSANPHAM == product.TENSANPHAMMAIN;
    })
    if(item){
        item.SOLUONG+=1
    }
    else{
        product.SOLUONG+=1;
        cart.push(product)
    }
    localStorage.setItem('cart',JSON.stringify(cart))


}

