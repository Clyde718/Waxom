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

  var mixer = mixitup('#container'); // mixitup 3




  $(".projects__item")  // Load More
    .slice(0, 6)
    .show();
  $("#load-more").on("click", function (e) {
    e.preventDefault();
    $(".projects__item:hidden")
      .slice(0, 3)
      .slideDown();
    if ($(".projects__item:hidden").length == 0) {
      $("#load-more").fadeOut("slow");
    }
    // $("html,body").animate(
    //   {
    //     scrollTop: $(this).offset().top
    //   },
    //   1500
    // );
  });



  $('[data-modal=consultation]').on('click', function () {
    $('#consultation, .overlay').fadeIn(); // открыть заказ консультации 
  })
  $('.modal__close').on('click', function () {
    $('#consultation, .overlay').fadeOut(); // закрывать любое окно по клику на крестик 
    var leg = $('#iframe').attr("src");
    $('#iframe').attr("src", leg);
  })




  // number animation
  function countup(className) {
    var countBlockTop = $("." + className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
      if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
        show = false;

        $('.' + className).spincrement({
          from: 1,
          duration: 4000,
        });
      }
    })
  }





  $(function () {
    countup("facts__number", $(".facts__number").text());
  });




  $('.posts__row').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<span class="icon-circle-left"></span>',
    nextArrow: '<span class="icon-circle-right"></span>',
    appendArrows: '.posts__controls',
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          // slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          // slidesToShow: 1
        }
      }
    ]
  });


  $('.posts__row').slick('setPosition');



  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll > 20) {
      $('#main-nav').addClass('active');
    }
    else {
      $('#main-nav').removeClass('active');
    };
  })

});




