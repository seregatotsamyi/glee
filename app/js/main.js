$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
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