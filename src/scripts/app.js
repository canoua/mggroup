import Swiper, { Navigation, Pagination, Scrollbar  } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

// Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper(".swiper", {
  grabCursor: true,
  loop: true,
  modules: [Navigation, Pagination, Scrollbar],
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true
  },
});