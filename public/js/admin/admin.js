// Điều khiển

$('#figure').click(function(){
      $('.figure-store').show(100);
      $('.page-add-product').hide(100);
      $('.view-order').hide(100);
      $('.list-product').hide();
})
$('#add-product').click(function(){
      $('.figure-store').hide(100);
      $('.view-order').hide(100);
      $('.page-add-product').show(100);
      $('.list-product').hide();
})
$('#view-order').click(function(){
  $('.view-order').show(100);
  $('.figure-store').hide(100);
  $('.page-add-product').hide(100);
  $('.list-product').hide();
})

$('#list-product').click(function(){
  $('.list-product').show();
  $('.view-order').hide(100);
  $('.figure-store').hide(100);
  $('.page-add-product').hide(100);
})
$('ul li').click(function(){
  $('ul li').removeClass('active');
  $(this).addClass('active');
})
var xValues = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December" ];
var yValues = [55, 49, 44, 24, 25, 27, 39, 42, 30, 43, 40, 38];//Giá trị số lượng đơn đặt hàng qua các tháng
var barColors = "orange";

new Chart("quantity-order-chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Số lượng đơn đặt hàng năm 2021"
    },
    scales: {
      yAxes: [{
        ticks: {min: 5, max:80},
        scaleLabel: {
          display: true,
          labelString: 'Số lượng (đơn)'
        }
      }],
    },
  }
});
//DOANH THU CỬA HÀNG
var xValues = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December" ];
var yValues = [30, 49.566, 44, 24, 25, 27, 39, 42, 30, 43, 40, 38];

new Chart("revenue-store", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(236, 139, 27, 1.0)",
      borderColor: "rgba(236, 139, 27, 0.3)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {min: 5, max:80},
        scaleLabel: {
          display: true,
          labelString: 'Doanh thu (triệu VNĐ)'
        }
      }],
    },
    title: {
      display: true,
      text: "Số lượng đơn đặt hàng năm 2021"
    }
  }
});