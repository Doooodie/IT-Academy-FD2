var login = document.querySelectorAll("input")[0];
var password = document.querySelectorAll("input")[1];
var button = document.querySelectorAll("input")[2];

function loginCheck() {
	var r = login.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	if (!r) {
		return false;
	}
}

function passwordCheck() {
	if (/^\d+$/.test(password.value) === true) {
		return true;
	} else {
		return false;
	}
}

button.onclick = function() {
	if (passwordCheck() === false) {
		password.style.borderColor = "red";
	} else {
		password.style.borderColor = "";
	}
	if (loginCheck() === false) {
		login.style.borderColor = "red";
	} else {
		login.style.borderColor = "";
	}
};
