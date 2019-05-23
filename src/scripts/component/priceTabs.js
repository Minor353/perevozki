module.exports = function () {
  const tabsBtn = document.querySelectorAll('.price_tabs-item');
  const tabsItem = document.querySelectorAll('.price_tabs-content');

  for (let i = 0; i < tabsBtn.length; i++) {
    tabsBtn[i].addEventListener('click', function () {
      for (let i = 0; i < tabsBtn.length; i++) {
        tabsBtn[i].classList.remove('price_tabs-item--active');
        tabsItem[i].classList.remove('price_tabs-content--active');
      }
      tabsBtn[i].classList.add('price_tabs-item--active');
      tabsItem[i].classList.add('price_tabs-content--active');
    })
  }
}