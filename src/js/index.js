import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
        delay: 2000,  
    },  

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiper2 = new Swiper('.swiper-clients', {
  slidesPerView: 1,
  centeredSlides: true,


  navigation: {
    nextEl: '.clients-next',
    prevEl: '.clients-prev',
  },

  breakpoints: {
        1025: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    },
});


let toggle = document.querySelector('#menu-btn');
let burger__el = document.querySelector('.menu-icon');




toggle.addEventListener('click', ()=>{
  
  if (toggle.checked) {
    burger__el.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    burger__el.classList.remove('active');
    document.body.style.overflow = 'scroll';
  }
  
  })