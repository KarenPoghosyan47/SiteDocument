import 'bootstrap'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

//   const swiper = new Swiper(...);

const swiper = new Swiper('.swiperFeedback', {
    slidesPerView: "auto",
    slidesPerView: 3.5,
    // centeredSlides: true,
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 19,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },

        
      },
  
});


