module.exports = function () {
  $('.about_slider-list').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.about_slider-prev',
    nextArrow: '.about_slider-next',
  });
}