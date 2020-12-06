$(function(){

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable:false,
    arrows: false,
    fade: true,
  });

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

  $('.select-style, .product-item__num').styler();


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
  });
  $('.related__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
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
    $(".product-item__stars").rateYo({
      starWidth: "17px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "12px",
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