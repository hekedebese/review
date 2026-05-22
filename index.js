import{a as n,R as c,S as l,N as u,P as d}from"./assets/vendor-BFHVt_EU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://deserts-store.b.goit.study/api/feedbacks/",p=10;async function m(s=1){try{const{data:t}=await n(f,{params:{limit:p,page:s}});return t}catch(t){console.log(t.message)}}const g=document.querySelector(".review-list");function y(s){const t=s.map(i=>`
      <li class="swiper-slide">
      <div class="review-box">
        <div class="review-rating" data-rate="${i.rate}"></div>
        <p class="review-desc">${i.description}</p>
        <p class="review-author">${i.author}</p>
        </div>
      </li>
      `).join("");g.insertAdjacentHTML("beforeend",t),v()}function v(){document.querySelectorAll(".review-rating").forEach(t=>{new c(t,{starType:"i",number:5,score:Number(t.dataset.rate),readOnly:!0,starOn:"fa-solid fa-star",starOff:"fa-regular fa-star",starHalf:"fa-solid fa-star-half-stroke",half:!0}).init()})}let w=1;async function h(){const s=await m(w);y(s.feedbacks)}h();new l(".review-swiper",{modules:[u,d],slidesPerView:1,spaceBetween:9,pagination:{el:".review-pagination",clickable:!0,dynamicBullets:!0},navigation:{prevEl:".prev",nextEl:".next"}});
//# sourceMappingURL=index.js.map
