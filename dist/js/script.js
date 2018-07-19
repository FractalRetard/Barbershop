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