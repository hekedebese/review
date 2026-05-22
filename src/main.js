import { getFeedbacksResponse } from './js/fetches';
import { createFeedbacks } from './js/render';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

let page = 1;

async function init() {
  const responses = await getFeedbacksResponse(page);

  createFeedbacks(responses.feedbacks);
}

init();

new Swiper('.review-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 9,

  pagination: {
    el: '.review-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },
});
