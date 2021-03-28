if (readCookie('cookie-notice-accepted') == 'true') {
    var iframes = document.getElementsByTagName('iframe');
    // Add source to all dataframes when cookies are accepted.
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].getAttribute('data-src')) {
            iframes[i].setAttribute('src', iframes[i].getAttribute('data-src'));
        }
    }
}
