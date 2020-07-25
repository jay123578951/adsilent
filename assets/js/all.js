// $(document).ready(() => {
//   console.log('Hello Bootstrap4');
// });


// // 漢堡
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "100%";
// }
// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }

// Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
      //slidesPerView: 1,
    },
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

// $(document).ready(function() {
//   rwd_fun();
//   $(window).resize(rwd_fun);

//   function rwd_fun() {
//     var width = window.innerWidth;
//     if (width < 768) {
//       $('#filter__modalBody').append($('#filter__content'));
//     } else {
//       $('#filter__block').append($('#filter__content'));
//     }
//   }
// });