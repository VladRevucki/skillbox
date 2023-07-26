
// свайпер

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

// табы

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active'); });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active'); });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// аккордеон

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active',
});



// бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__links');
let closeburger = menu.querySelectorAll('.nav__burger-close')


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  });
})

closeburger.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  });
})




// поиск

document.addEventListener('DOMContentLoaded', function(e) {

  document.getElementById('open-search-form').addEventListener('click', function(e) {
    document.getElementById('search-form').classList.add('search-form__visible')
  })

  document.getElementById('search-form-close').addEventListener('click', function(e) {
   
    document.getElementById('search-form').classList.remove('search-form__visible')
  })

   // прервать действие по умолчанию чтобы не перегружалась при нажатии
   document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault()
  })

})
