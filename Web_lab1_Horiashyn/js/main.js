$(".item__img").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true
});
$(".metal-doors .active__item").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true
});
$(".galery .article__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
});
$(".tab_mass.tab__slider").slick({
  autoplay: false,
  autoplaySpeed: 5000,
  asNavFor: '.popular .tab_mass',
  pauseOnHover: true
});
$(".tab_shpon.tab__slider").slick({
  autoplay: false,
  autoplaySpeed: 5000,
  asNavFor: '.popular .tab_shpon',
  pauseOnHover: true
});
$(".tab_eco-shpon.tab__slider").slick({
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.popular .tab_eco-shpon',
  pauseOnHover: true
});
$(".popular .slide_block.tab_eco-shpon ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  asNavFor: '.tab_eco-shpon.tab__slider'
});
$(".popular .slide_block.tab_shpon ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplaySpeed: 5000,
  asNavFor: '.tab_shpon.tab__slider',
  pauseOnHover: true
});
$(".popular .slide_block.tab_mass ").slick({
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplaySpeed: 5000,
  asNavFor: '.tab_mass.tab__slider',
  pauseOnHover: true
});
$(".furnitura .article__slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true
});
$(".furnitura .furnitura__brand").slick({
  arrows: false,
  dots: false,
  slidesToShow: 15,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true
});

$(".galery").magnificPopup({
  delegate: ".slick-track a",
  type: "image",
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true
  }
});
$(".article__slider").magnificPopup({
    delegate: ".slick-track a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true
    }
});
$(".room_doors .tab__slider").magnificPopup({
    delegate: ".slick-track a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true
    }
});

$(".sert .article__active").magnificPopup({
  delegate: ".slider__item a",
  type: "image",
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true
  }
});
$(".furnitura .article__active").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true
    }
});
$(".metal-doors").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true
    }
});
$(".popular").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true
    }
});
$(".about").magnificPopup({
    delegate: ".slider__item a",
    type: "image",
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true
    }
});

//Зхлопування
$(document).ready(function() {
   $(window).scroll(function(){
    if ($(document).scrollTop() >127){
    $("#hide_on_scroll").css("display", "none");
  } else {
    $("#hide_on_scroll").css("display", "flex");
  }
});
});


$("#call_back").click(function() {
  $("#form-call-back,#over").addClass("showFlex");
});

$("#conf_button").click(function(){
    $("#conf,#over").addClass("showFlex");
});

$(".close").click(function() {
  $("#form-call-back,#conf,#over").removeClass("showFlex");
});

$("#menu__button").click(function() {
  $(".line").toggleClass("cross");
  $("header .header__row_second").toggleClass("showFlex");
});

$("header .header__row_second li").click(function() {
  $(".line").toggleClass("cross");
  $("header .header__row_second").toggleClass("showFlex");
});
