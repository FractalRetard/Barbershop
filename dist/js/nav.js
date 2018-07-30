var	mainNavToggle = document.querySelector(".navigation__toggle"),
	mainNav = document.querySelector(".navigation");

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