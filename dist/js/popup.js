var login_link = document.querySelector(".navigation__user-block a");
var login_popup = document.querySelector(".popup__login-form");
var login_popup_close = login_popup.querySelector(".popup__close-button");
var login_login_window = login_popup.querySelector("[name=login]")
var login_password_window = login_popup.querySelector("[name=password]"); 
var login_form = login_popup.querySelector(".popup__form");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".popup__overlay");

login_link.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("popup__overlay--show");
	login_popup.classList.add("popup__login-form--show");
	if(storage) {
		login_login_window.value = storage;
		login_password_window.focus();
	} else {
		login_login_window.focus();
	}
});

login_popup_close.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("popup__overlay--show");
	login_popup.classList.remove("popup__login-form--show");
	login_popup.classList.remove("popup__login-form--error");
});

window.addEventListener("keydown", function(event) {
	if ((event.keyCode === 27) && login_popup.classList.contains("popup__login-form--show")) {
			overlay.classList.remove("popup__overlay--show");
			login_popup.classList.remove("popup__login-form--show");
			login_popup.classList.remove("popup__login-form--error");
	}	
});

overlay.addEventListener("click", function() {
	overlay.classList.remove("popup__overlay--show");
	login_popup.classList.remove("popup__login-form--show");
	login_popup.classList.remove("popup__login-form--error");
});

login_form.addEventListener("submit", function(event) {
	if(!login_login_window.value || !login_password_window.value) {
		event.preventDefault();
		login_popup.classList.add("popup__login-form--error");
	} else {
		localStorage.setItem("login", login_login_window.value);
	}
});