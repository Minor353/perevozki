module.exports = function () {
  const headerPanel = document.querySelector('.header_wrap');
  const headerTriger = document.querySelector('.wrapper');
  const headerTrigerTop = headerTriger.getBoundingClientRect().top + window.pageYOffset;

  window.onscroll = function () {

    if (window.pageYOffset == 0) {
      headerPanel.classList.remove('header_wrap--active');
    } else if (window.pageYOffset > headerTrigerTop) {
      headerPanel.classList.add('header_wrap--active');
    }

  };

};