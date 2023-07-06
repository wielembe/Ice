const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.review__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.review__pagination',
    prevEl: '.review__pagination',
  },

  // And if we need scrollbar
  //scrollbar: {
  // el: '.swiper-scrollbar',
  //},
});
