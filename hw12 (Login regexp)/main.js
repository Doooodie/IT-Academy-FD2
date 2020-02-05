var login = document.querySelectorAll("input")[0];
var password = document.querySelectorAll("input")[1];
var button = document.querySelectorAll("input")[2];

function loginCheck() {

}

function passwordCheck() {
    if (/^\d+$/.test(password.value) === true) {
    return true;
    } else {
        return false;
    }
}

button.onclick = function () {
    if (passwordCheck() === false) {
        password.style.borderColor = "red";
    } else {
        password.style.borderColor = "";
    }
};