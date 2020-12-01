$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
  });
 
    $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      step: 0.01,
      onStart: function (data){
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    },
    });


  var mixer = mixitup('.productsweek__inner' , {
    selectors: {
      control: '.filter__prod-btn'
    }
  });
  var mixer1 = mixitup('.newdesign__inner', {
    selectors: {
      control: '.filter__prod-new-btn'
    }
  });
});