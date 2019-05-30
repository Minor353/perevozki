module.exports = function () {
  const copterBlock = document.querySelector('.about-serv_decor');
  const aboutServBlock = document.querySelector('.about-serv');
  const aboutServBlockCord = aboutServBlock.getBoundingClientRect().top + window.pageYOffset;

  const baloonBlock = document.querySelector('.advantages_decor');
  const advantegesBlock = document.querySelector('.advantages');
  const advantegesBlockCord = advantegesBlock.getBoundingClientRect().top + window.pageYOffset;


  const headerPanel = document.querySelector('.header_wrap');
  const headerTriger = document.querySelector('.wrapper');
  const headerTrigerTop = headerTriger.getBoundingClientRect().top + window.pageYOffset;


  window.onscroll = function () {
    if (window.pageYOffset > aboutServBlockCord - 200) {
      copterBlock.classList.add('about-serv_decor--active');
    }

    if (window.pageYOffset > advantegesBlockCord - 200) {
      baloonBlock.classList.add('advantages_decor--active');
    }

    if (window.pageYOffset == 0) {
      headerPanel.classList.remove('header_wrap--active');
    } else if (window.pageYOffset > headerTrigerTop) {
      headerPanel.classList.add('header_wrap--active');
    }
  }

}