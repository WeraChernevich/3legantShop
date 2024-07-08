import Swiper from 'swiper/bundle';

function swiper () {
	// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	slidesPerView: "auto",
	spaceBetween: 30,

	// Optional parameters
	// direction: 'vertical',
	// loop: true,

	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
		clickable: true,
	},

	// // Navigation arrows
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },
});
}

export default swiper;