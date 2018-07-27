'use strict';

var mainNavToggle = document.querySelector(".navigation__toggle"),
	mainNav = document.querySelector(".navigation"),
	featuresSliderToggle1 = document.querySelector(".features .slider__toggle:nth-child(1)"),
	featuresSliderToggle2 = document.querySelector(".features .slider__toggle:nth-child(2)"),
	featuresSliderToggle3 = document.querySelector(".features .slider__toggle:nth-child(3)"),
	featuresSlider = document.querySelector(".features__list"),
	reviewsSliderToggle1 = document.querySelector(".reviews .slider__toggle:nth-child(1)"),
	reviewsSliderToggle2 = document.querySelector(".reviews .slider__toggle:nth-child(2)"),
	reviewsSliderToggle3 = document.querySelector(".reviews .slider__toggle:nth-child(3)"),
	reviewsSlider = document.querySelector(".reviews__list"),
	sliderPrevButton = document.querySelector(".slider__prev"),
	sliderNextButton = document.querySelector(".slider__next");

mainNavToggle.addEventListener("click", function(event) {
	event.preventDefault();
	if (mainNav.classList.contains("navigation--closed")) {
		mainNav.classList.remove("navigation--closed");
		mainNav.classList.add("navigation--opened");
	} else {
		mainNav.classList.remove("navigation--opened");
		mainNav.classList.add("navigation--closed");
	}
});


featuresSliderToggle1.addEventListener("click", function(event) {
	event.preventDefault();
	featuresSlider.style.transform = null;
	if (!featuresSlider.classList.contains("slider__list--show-first")) {
		featuresSlider.classList.add("slider__list--show-first");
		featuresSliderToggle1.classList.add("slider__toggle-on-dark-bg--active");
		featuresSlider.classList.remove("slider__list--show-second");
		featuresSlider.classList.remove("slider__list--show-third");
		featuresSliderToggle2.classList.remove("slider__toggle-on-dark-bg--active");
		featuresSliderToggle3.classList.remove("slider__toggle-on-dark-bg--active");
	}
});

featuresSliderToggle2.addEventListener("click", function(event) {
	event.preventDefault();
	featuresSlider.style.transform = null;
	if (!featuresSlider.classList.contains("slider__list--show-second")) {
		featuresSlider.classList.add("slider__list--show-second");
		featuresSliderToggle2.classList.add("slider__toggle-on-dark-bg--active");
		featuresSlider.classList.remove("slider__list--show-first");
		featuresSlider.classList.remove("slider__list--show-third");		
		featuresSliderToggle1.classList.remove("slider__toggle-on-dark-bg--active");
		featuresSliderToggle3.classList.remove("slider__toggle-on-dark-bg--active");
	}
});

featuresSliderToggle3.addEventListener("click", function(event) {
	event.preventDefault();
	featuresSlider.style.transform = null;
	if (!featuresSlider.classList.contains("slider__list--show-third")) {
		featuresSlider.classList.add("slider__list--show-third");
		featuresSliderToggle3.classList.add("slider__toggle-on-dark-bg--active");
		featuresSlider.classList.remove("slider__list--show-first");
		featuresSlider.classList.remove("slider__list--show-second");
		featuresSliderToggle1.classList.remove("slider__toggle-on-dark-bg--active");
		featuresSliderToggle2.classList.remove("slider__toggle-on-dark-bg--active");
	}
});


reviewsSliderToggle1.addEventListener("click", function(event) {
	event.preventDefault();
	reviewsSlider.style.transform = null;
	if (!reviewsSlider.classList.contains("slider__list--show-first")) {
		reviewsSlider.classList.add("slider__list--show-first");
		reviewsSliderToggle1.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-second");
		reviewsSlider.classList.remove("slider__list--show-third");
		reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
	}
});

reviewsSliderToggle2.addEventListener("click", function(event) {
	event.preventDefault();
	reviewsSlider.style.transform = null;
	if (!reviewsSlider.classList.contains("slider__list--show-second")) {
		reviewsSlider.classList.add("slider__list--show-second");
		reviewsSliderToggle2.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-first");
		reviewsSlider.classList.remove("slider__list--show-third");		
		reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
	}
});

reviewsSliderToggle3.addEventListener("click", function(event) {
	event.preventDefault();
	reviewsSlider.style.transform = null;
	if (!reviewsSlider.classList.contains("slider__list--show-third")) {
		reviewsSlider.classList.add("slider__list--show-third");
		reviewsSliderToggle3.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-first");
		reviewsSlider.classList.remove("slider__list--show-second");
		reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
	}
});


sliderNextButton.addEventListener("click", function(event) {
	event.preventDefault();
	reviewsSlider.style.transform = null;
	if (reviewsSlider.classList.contains("slider__list--show-first")) {
		reviewsSlider.classList.add("slider__list--show-second");
		reviewsSliderToggle2.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-first");
		reviewsSlider.classList.remove("slider__list--show-third");		
		reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
	} else if (reviewsSlider.classList.contains("slider__list--show-second")) {
		reviewsSlider.classList.add("slider__list--show-third");
		reviewsSliderToggle3.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-first");
		reviewsSlider.classList.remove("slider__list--show-second");
		reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
	} else if (reviewsSlider.classList.contains("slider__list--show-third")) {
		reviewsSlider.classList.add("slider__list--show-first");
		reviewsSliderToggle1.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-second");
		reviewsSlider.classList.remove("slider__list--show-third");
		reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
	}
});

sliderPrevButton.addEventListener("click", function(event) {
	event.preventDefault();
	reviewsSlider.style.transform = null;
	if (reviewsSlider.classList.contains("slider__list--show-first")) {
		reviewsSlider.classList.add("slider__list--show-third");
		reviewsSliderToggle3.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-first");
		reviewsSlider.classList.remove("slider__list--show-second");
		reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
	} else if (reviewsSlider.classList.contains("slider__list--show-second")) {
		reviewsSlider.classList.add("slider__list--show-first");
		reviewsSliderToggle1.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-second");
		reviewsSlider.classList.remove("slider__list--show-third");
		reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
		
	} else if (reviewsSlider.classList.contains("slider__list--show-third")) {
		reviewsSlider.classList.add("slider__list--show-second");
		reviewsSliderToggle2.classList.add("slider__toggle-on-light-bg--active");
		reviewsSlider.classList.remove("slider__list--show-first");
		reviewsSlider.classList.remove("slider__list--show-third");		
		reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
		reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
	}
});



class Slider {
	constructor() {
		this.sliderElements = document.querySelectorAll('.slider__list');
	}

	swipes() {

		// (2) в нём запоминается Х-координата события, запускающего свайп,
		//	затем создаются и вешаются обработчики
		let swipeStart = (event) => {
			if (!event.currentTarget.classList.contains('reviews__list') && document.documentElement.clientWidth > 767) return;
			event.preventDefault();
			let startX = (event.changedTouches) ? (event.changedTouches[0].clientX) : parseInt(event.clientX),
				sliderList = event.currentTarget,
				startTransformX = getComputedStyle(sliderList).transform.slice(19, -4);
		
			// (3) этот обработчик должен прокручивать список слайдов
			// пока зажата кнопка и мышь двигается над элементом
			let swipeMove = (event) => {
				event.preventDefault();
				let moveX = (event.changedTouches) ? (startX - event.changedTouches[0].clientX) : (startX - parseInt(event.clientX));
				// (3.1) позиция слайда меняется transform: translateX, поэтому тут вырезается из матрицы начальный показатель Х
				sliderList.style.transform = `matrix(1, 0, 0, 1, ${startTransformX - moveX*1.3}, 0)`;

				// (3.2) в зависимости от прокрутки меняются индикаторы слайдов
				setInterval( () => {
					if ( sliderList.classList.contains('reviews__list') ) {	
						if ( (+getComputedStyle(sliderList).transform.slice(19, -4) <= 50) && (+getComputedStyle(sliderList).transform.slice(19, -4) > -0.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) )  {
							setTimeout( () => {
								reviewsSliderToggle1.classList.add("slider__toggle-on-light-bg--active");
								reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
								reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
							}, 100);
						}
						if ( (+getComputedStyle(sliderList).transform.slice(19, -4) <= -0.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) && (+getComputedStyle(sliderList).transform.slice(19, -4) > -1.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) ) {
							setTimeout( () => {
								reviewsSliderToggle2.classList.add("slider__toggle-on-light-bg--active");
								reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
								reviewsSliderToggle3.classList.remove("slider__toggle-on-light-bg--active");
							}, 100);
						}
						if ( (+getComputedStyle(sliderList).transform.slice(19, -4) <= -1.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) && (+getComputedStyle(sliderList).transform.slice(19, -4) > -2.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) )  {
							setTimeout( () => {
								reviewsSliderToggle3.classList.add("slider__toggle-on-light-bg--active");
								reviewsSliderToggle1.classList.remove("slider__toggle-on-light-bg--active");
								reviewsSliderToggle2.classList.remove("slider__toggle-on-light-bg--active");
							}, 100);
						}
					}

					if ( sliderList.classList.contains('features__list') ) {
						if ( (+getComputedStyle(sliderList).transform.slice(19, -4) <= 50) && (+getComputedStyle(sliderList).transform.slice(19, -4) > -0.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) )  {
							setTimeout( () => {
								featuresSliderToggle1.classList.add("slider__toggle-on-dark-bg--active");
								featuresSliderToggle2.classList.remove("slider__toggle-on-dark-bg--active");
								featuresSliderToggle3.classList.remove("slider__toggle-on-dark-bg--active");
							}, 100);
						}
						if ( (+getComputedStyle(sliderList).transform.slice(19, -4) <= -0.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) && (+getComputedStyle(sliderList).transform.slice(19, -4) > -1.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) )  {
							setTimeout( () => {
								featuresSliderToggle2.classList.add("slider__toggle-on-dark-bg--active");
								featuresSliderToggle1.classList.remove("slider__toggle-on-dark-bg--active");
								featuresSliderToggle3.classList.remove("slider__toggle-on-dark-bg--active");
							}, 100);
						}
						if ( (+getComputedStyle(sliderList).transform.slice(19, -4) <= -1.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) && (+getComputedStyle(sliderList).transform.slice(19, -4) > -2.5*parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) )  {
							setTimeout( () => {
								featuresSliderToggle3.classList.add("slider__toggle-on-dark-bg--active");
								featuresSliderToggle1.classList.remove("slider__toggle-on-dark-bg--active");
								featuresSliderToggle2.classList.remove("slider__toggle-on-dark-bg--active");
							}, 100);
						}
					}
				}, 0);
			}

			event.currentTarget.addEventListener('mousemove', swipeMove);
			event.currentTarget.addEventListener('touchmove', swipeMove);

			// (4) этот обработчик должен ровно зафиксировать слайд, когда кнопка будет отжата 
			let swipeEnd = (event) => {
				let endX = (event.changedTouches) ? (event.changedTouches[0].clientX) : parseInt(event.clientX); 
				event.currentTarget.removeEventListener('mousemove', swipeMove);
				if ( +(sliderList.style.transform.slice(19, -4)) > 0 )  { 
					sliderList.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
				};
				if ( +(sliderList.style.transform.slice(19, -4)) < 
				   ( -parseInt(getComputedStyle(sliderList).width) + parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)) ) { 
						sliderList.style.transform = `matrix(1, 0, 0, 1, ${-parseInt(getComputedStyle(sliderList).width) + parseInt(getComputedStyle(sliderList.querySelector('.slider__item')).width)}, 0)`;
				}	;

				
				if (sliderList.classList.contains('slider__list--show-first')) {
					if( (startX - endX) > 20 ) {
						sliderList.style.transform = null;
						sliderList.classList.remove('slider__list--show-first');
						sliderList.classList.remove('slider__list--show-third');
						sliderList.classList.add('slider__list--show-second');
					}
				} else if (sliderList.classList.contains('slider__list--show-second')) {
					if( (startX - endX) > 20 ) {
						sliderList.style.transform = null;
						sliderList.classList.remove('slider__list--show-first');
						sliderList.classList.remove('slider__list--show-second');
						sliderList.classList.add('slider__list--show-third');
					}
					if( (startX - endX) < 20 ) {
						sliderList.style.transform = null;
						sliderList.classList.remove('slider__list--show-third');
						sliderList.classList.remove('slider__list--show-second');
						sliderList.classList.add('slider__list--show-first');
					}
				} else if (sliderList.classList.contains('slider__list--show-third')) {
					if( (startX - endX) < 20 ) {
						sliderList.style.transform = null;
						sliderList.classList.remove('slider__list--show-third');
						sliderList.classList.remove('slider__list--show-first');
						sliderList.classList.add('slider__list--show-second');
					}
				}
				event.currentTarget.removeEventListener('mouseleave', swipeEnd);
				event.currentTarget.removeEventListener('mouseup', swipeEnd);
				event.currentTarget.removeEventListener('touchend', swipeEnd);
			}

			event.currentTarget.addEventListener('mouseleave', swipeEnd);
			event.currentTarget.addEventListener('mouseup', swipeEnd);
			event.currentTarget.addEventListener('touchend', swipeEnd);
		}

		// (1) на каждый найдённый слайдер вешается обработчик swipeStart
		this.sliderElements.forEach( (item) => {
				item.addEventListener('mousedown', swipeStart);
				item.addEventListener('touchstart', swipeStart);
		});
	}
}

let slider = new Slider();
slider.swipes();



