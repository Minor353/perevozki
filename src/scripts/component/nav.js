module.exports = function () {
  /**Плавный скрол на меню **/

  $(".nav_item-link").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({
      scrollTop: top - 55
    }, 1200);
    navPanel.classList.remove('nav--active');
    burger.classList.remove('active');
  });


  const burger = document.querySelector('.ham');
  const navPanel = document.querySelector('.nav');

  burger.addEventListener('click', function () {
    navPanel.classList.toggle('nav--active');
  })
}