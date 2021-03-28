/**
 * Read and write cookies for cookie consent
 */
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}

function enableCookies() {
    var cookieElements = document.getElementsByClassName('cookie-consent-required');
    for (var i = 0; i < cookieElements.length; i++) {
        cookieElements[i].classList.add("cookie-accepted");
    }
}


if (readCookie('cookie-notice-accepted') == 'true') {
    enableCookies();
} else {
    document.getElementById('cookie-notice').style.display = 'flex';
}

document.getElementById('cookie-notice-accept').addEventListener("click", function () {
    createCookie('cookie-notice-accepted', 'true', 31);
    document.getElementById('cookie-notice').style.display = 'none';
    location.reload();
});

document.getElementById('cookie-notice-deny').addEventListener("click", function () {
    eraseCookie('cookie-notice-accepted');
    document.getElementById('cookie-notice').style.display = 'none';
    document.getElementById('cookie-reminder').style.display = 'flex';
});

document.getElementById('cookie-reminder').addEventListener("click", function () {
    document.getElementById('cookie-notice').style.display = 'flex';
    document.getElementById('cookie-reminder').style.display = 'none';
});
