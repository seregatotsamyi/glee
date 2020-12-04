$(function(){

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $('.pagination').toggleClass('pagination--active');
    $(this).addClass('shop-content__filter-btn--active'); 
  });

  $('.button-list').on('click', function(){
    $('.productsweek__item').addClass('productsweek__item--list');
  });
  $('.button-grid').on('click', function(){
    $('.productsweek__item').removeClass('productsweek__item--list');
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

    $(".productsweek__star").rateYo({
      starWidth: "18px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "12px",
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