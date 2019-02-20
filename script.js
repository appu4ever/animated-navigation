document.addEventListener('DOMContentLoaded', main);

function main() {
  var menuContainer = document.querySelector('.menu-icon-container');

  menuContainer.addEventListener('click', function() {

    document.querySelector('.menu-icon:nth-of-type(2)').classList.toggle('second-icon');
    // document.querySelector('.menu-icon:nth-of-type(2)').style.marginLeft= "none";
    document.querySelector('.menu-icon:nth-of-type(1)').classList.toggle('first-icon');
    document.querySelector('.menu-icon:nth-of-type(3)').classList.toggle('third-icon');

    document.querySelector('.left-container').classList.toggle('slide-in');
    document.querySelector('.right-container').classList.toggle('slide-in');
    document.querySelector('.navigation').classList.toggle('slide-in');
    document.querySelector('#content').classList.toggle('hide-text');
  })
}
