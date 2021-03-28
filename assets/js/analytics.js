/*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-WWQQXP89L4', function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

    /* Only load google analytics if cookies have been accepted */
    var use_cookies = (readCookie('cookie-notice-accepted') == 'true') ? 'granted' : 'denied';
    gtag('consent', 'default', {
        'ad_storage': use_cookies,
        'analytics_storage': use_cookies
    });

    gtag('js', new Date());
    gtag('config', 'G-WWQQXP89L4', { 'anonymize_ip': true });
})
