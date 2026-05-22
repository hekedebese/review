import Raty from 'raty-js';

const reviewList = document.querySelector('.review-list');

export function createFeedbacks(responses) {
  const markup = responses
    .map(response => {
      return `
      <li class="swiper-slide">
      <div class="review-box">
        <div class="review-rating" data-rate="${response.rate}"></div>
        <p class="review-desc">${response.description}</p>
        <p class="review-author">${response.author}</p>
        </div>
      </li>
      `;
    })
    .join('');

  reviewList.insertAdjacentHTML('beforeend', markup);
  createStars();
}

function createStars() {
  const ratings = document.querySelectorAll('.review-rating');

  ratings.forEach(rating => {
    new Raty(rating, {
      starType: 'i',
      number: 5,
      score: Number(rating.dataset.rate),
      readOnly: true,
      starOn: 'fa-solid fa-star',
      starOff: 'fa-regular fa-star',
      starHalf: 'fa-solid fa-star-half-stroke',
      half: true,
    }).init();
  });
}
