// Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
  },
});

// Loading
var $loading = $('#loading');
var $progress = $('#progress');
window.onload = () => {
  $loading.hide();
};

// AOS
AOS.init({
  duration: 600,
});

//Go Top Button:
mybutton = document.getElementById("gotopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}