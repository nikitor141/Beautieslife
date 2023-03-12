import * as webpTest from './modules/iswebp.js';
import { Swiper, Navigation } from 'swiper'


webpTest.isWebp();

Swiper.use([Navigation])
const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
   autoHeight: true,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next'
   },
});

document.querySelector('.burger').addEventListener('click', function () {
   let elmsToActive = [this, document.body, document.querySelector('.header__menu-list')];
   elmsToActive.forEach(item => {
      item.classList.toggle('active');
   })
   if (document.querySelector('.header__menu-list').classList.contains('active')) {
      document.querySelector('.header__menu').addEventListener('click', e => {
         if (e.target.closest('.header__menu-link')) {
            elmsToActive.forEach(item => {
               item.classList.remove('active');
            })
         }
      })
   }
})

