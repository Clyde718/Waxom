$(document).ready(function () {
  $('.header__slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<div class="arrow-left"></div>',
    nextArrow: '<div class="arrow-right"></div>',
    appendDots: $('.header__content'),
    infinite: false
  });

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    // Чтобы не скролилась страница под бургером меню
  });



  $('.theme__slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    initialSlide: 1,
    speed: 300
  })

  $('.theme__slider').slick('setPosition');

  var mixer = mixitup('#container', {
    animation: {
      effectsOut: 'fade translateX(-100%)'
    }
  }); // mixitup 3




});

