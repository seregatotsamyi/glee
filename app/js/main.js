$(function(){

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active'); 
  });

  $('.select-style').styler();


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

    $(".star").rateYo({
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "8px",
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