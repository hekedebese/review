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

  new Swiper('.review-swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 24,

    pagination: {
      el: '.review-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      prevEl: '.prev',
      nextEl: '.next',
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}

init();
