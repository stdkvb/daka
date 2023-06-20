import selectController from "./select";
import menuController from "./mobile-menu";


selectController ();
menuController();

var rellax = new Rellax('.rellax');

let bg = document.querySelector('.main-screen__image')
    window.addEventListener("scroll", function(){
        bg.style.backgroundSize = 120 - +window.pageYOffset/48+"%";
})

// const products = document.querySelectorAll('.products__item');
// products.forEach((elem) => {
// 	elem.addEventListener('mouseover', () => {
// 		products.forEach((elem) => {
// 			elem.classList.remove('active');
// 		})
// 		elem.classList.add('active')
// 	})
// })

// disable swiper on desktop

const mobile = window.matchMedia('(min-width:1800px)')
let productsSwiper

const mobileBreakpointChecker = function () {
	if (mobile.matches === true) {
		if (productsSwiper !== undefined) productsSwiper.destroy(true, true)
	} else if (mobile.matches === false) {
		return enableSwiperMobile()
	}
}

const enableSwiperMobile = function () {
	productsSwiper = new Swiper('.products__swiper', {
		slidesPerView: 'auto',
	})
}
mobile.addListener(mobileBreakpointChecker)
mobileBreakpointChecker()