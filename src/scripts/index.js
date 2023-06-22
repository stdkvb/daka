import selectController from "./select";
import menuController from "./mobile-menu";
import takeControlCookie from "./cookie";
import notificationController from "./notification";


selectController ();
menuController();
takeControlCookie('.cookie', '.cookie__accept');
notificationController();

var rellax = new Rellax('.rellax');

let bg = document.querySelector('.main-screen__image')
    window.addEventListener("scroll", function(){
        bg.style.backgroundSize = 120 - +window.pageYOffset/48+"%";
})


// disable swiper on desktop

const mobile = window.matchMedia('(min-width:991px)')
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
		spaceBetween: 20,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		},
	})
}
mobile.addListener(mobileBreakpointChecker)
mobileBreakpointChecker()