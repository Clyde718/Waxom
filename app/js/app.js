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
})
