module.exports = function () {
  const parent = document.querySelector("body");
  const item1 = document.querySelector(".paralax_bg");
  const item2 = document.querySelector(".man");
  const item3 = document.querySelector(".woman");
  const item4 = document.querySelector(".decor");


  var center = {
    x: parent.offsetWidth / 6,
    y: parent.offsetHeight / 6
  };


  parent.onmousemove = function (event) {
    item1.setAttribute('style', 'transform: translate3d(' +
      Math.round((center.x - event.pageX) / 50) + 'px, ' +
      Math.round((center.y - event.pageY) / 50) + 'px, 0);');

    item2.setAttribute('style', 'transform: translate3d(' +
      Math.round((center.x - event.pageX) / 80) + 'px, ' +
      Math.round((center.y - event.pageY) / 90) + 'px, 0);');

    item3.setAttribute('style', 'transform: translate3d(' +
      Math.round((center.x - event.pageX) / 50) + 'px, ' +
      Math.round((center.y - event.pageY) / 100) + 'px, 0);');

    item4.setAttribute('style', 'transform: translate3d(' +
      Math.round((center.x - event.pageX) / 10) + 'px, ' +
      Math.round((center.y - event.pageY) / 15) + 'px, 0);');
  }


}