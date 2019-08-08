module.exports = function () {
  const stockBtn = document.querySelector('.stock_btn');
  const stockForm = document.querySelector('.form-store');
  const stockCross = document.querySelector('.form-store_content-cross');

  stockBtn.addEventListener('click', function (e) {
    e.preventDefault();
    stockForm.classList.add('form-store--active');
  });

  stockCross.addEventListener('click', function () {
    stockForm.classList.remove('form-store--active');
  });

  stockForm.addEventListener('click', function (event) {
    if (event.target == stockForm) {
      stockForm.classList.remove('form-store--active');
    }

  });
};