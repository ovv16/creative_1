// Инициализация Swiper с эффектом fade
var mySwiper = new Swiper('.swiper-container', {
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: [0, 0, -400],
	  },
	  next: {
		translate: ["100%", 0, 0],
	  },
	},
	pagination: {
	  el: '.swiper-pagination', // Пагинация (если необходимо)
	},
	navigation: {
	  nextEl: '.swiper-button-next', // Навигация вперед (если необходимо)
	  prevEl: '.swiper-button-prev', // Навигация назад (если необходимо)
	},
  });
  