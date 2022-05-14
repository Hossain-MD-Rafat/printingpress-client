$(function () {
  // card Slide
  $(".card_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 1800,
    speed: 800,
    dots: false,
    prevArrow: '<i class="fas fa-chevron-left cardprev"></i>',
    nextArrow: '<i class="fas fa-chevron-right cardnext"></i>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // card Item slider
  $(".content_img").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 800,
    dots: true,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // Client Slider
  $(".client_slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 800,
    dots: false,
    prevArrow: '<i class="fas fa-chevron-left prev2"></i>',
    nextArrow: '<i class="fas fa-chevron-right next2"></i>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // Back to Top
  var btn = $(".backtotop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // window scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("newclass");
    } else {
      $(".header").removeClass("newclass");
    }
  });

  // preloader
  $(window).on("load", function () {
    $(".preloader").delay(900).fadeOut(400);
  });

  // venubox
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Plus Minus Button
  $(function () {
    $('input[type="number"]').niceNumber();
  });

  var list = $(".js-dropdown-list");
  var link = $(".js-link");
  link.click(function (e) {
    e.preventDefault();
    list.slideToggle(200);
  });
});
