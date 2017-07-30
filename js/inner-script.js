var login_link = document.querySelector(".user-block .login");
var login_popup = document.querySelector(".popup-login-form");
var login_popup_close = login_popup.querySelector(".close-button");
var login_login_window = login_popup.querySelector("[name=login]")
var login_password_window = login_popup.querySelector("[name=password]"); 
var login_form = login_popup.querySelector("form");
var storage = localStorage.getItem("login");

var overlay = document.querySelector(".overlay");

login_link.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("overlay-show");
	login_popup.classList.add("popup-login-form-show");
	if(storage) {
		login_login_window.value = storage;
		login_password_window.focus();
	} else {
		login_login_window.focus();
	}
});

login_popup_close.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("overlay-show");
	login_popup.classList.remove("popup-login-form-show");
	login_popup.classList.remove("form-error");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27 && login_popup.classList.contains("popup-login-form-show")) {
		overlay.classList.remove("overlay-show");
		login_popup.classList.remove("popup-login-form-show");
		login_popup.classList.remove("form-error");
	}	
});

overlay.addEventListener("click", function() {
	overlay.classList.remove("overlay-show");
	login_popup.classList.remove("popup-login-form-show");
	login_popup.classList.remove("form-error");
});

login_form.addEventListener("submit", function(event) {
	if(!login_login_window.value || !login_password_window.value) {
		event.preventDefault();
		login_popup.classList.add("form-error");
	} else {
		localStorage.setItem("login", login_login_window.value);
	}
});