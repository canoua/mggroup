import Swiper, { Navigation, Parallax, Scrollbar } from "swiper";
Swiper.use([Navigation, Parallax, Scrollbar]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

document.addEventListener('DOMContentLoaded', () =>{
  const swiper = new Swiper(".mySwiper", {
    loop: false,
    speed: 1300,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  }); 
})





