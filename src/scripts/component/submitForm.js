module.exports = function () {
  /**Форма на главной секции */
  $('#formCall').on('submit', submitFormCall);

  function submitFormCall(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.form-store-success');

    function closePopup() {
      popupBlock.classList.remove('form-store-success--active');
      document.getElementById('formCall').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('form-store-success--active');
      setTimeout(closePopup, 3500);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('form-store-success--active');
      setTimeout(closePopup, 3500);
    })
  };
  /**Форма заявки на переезд */
  $('#form').on('submit', submitFormMain);

  function submitFormMain(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.form-store-success');

    function closePopup() {
      popupBlock.classList.remove('form-store-success--active');
      document.getElementById('form').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('form-store-success--active');
      setTimeout(closePopup, 4000);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('form-store-success--active');
      setTimeout(closePopup, 4000);
    })
  };

  /**Форма на Акциях */
  $('#formStore').on('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

    var request = $.ajax({
      type: 'POST',
      url: url,
      data: data
    });

    const popupBlock = document.querySelector('.form-store-success');
    const stockForm = document.querySelector('.form-store');

    function closePopup() {
      popupBlock.classList.remove('form-store-success--active');
      document.getElementById('formStore').reset();
    }

    request.done(function (msg) {
      popupBlock.classList.add('form-store-success--active');
      stockForm.classList.remove('form-store--active');
      setTimeout(closePopup, 4000);
    });

    request.fail(function (jqXHR, textStatus) {
      popupBlock.classList.add('form-store-success--active');
      stockForm.classList.remove('form-store--active');
      setTimeout(closePopup, 4000);
    })
  };
}