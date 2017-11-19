// ==UserScript==
// @name         RARBG Show thumbnails in torrent lists
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Shows the thumbnail on every item of the torrent list.
// @author       French Bond
// @match        https://rarbg.to/torrents.php*
// @match        https://rarbg.is/torrents.php*
// @match        https://rarbg.to/top10
// @match        https://rarbg.is/top10
// @match        https://rarbg.is/s/Sina/
// @match        https://rarbg.to/s/**/*
// @require      http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    // Show the thumbnails on RARBG listing
    $('.lista a').each(function() {
    var string = $(this).attr('onmouseover');
    var regExp = /\\'([^)]+)\\'/;
    var matches = regExp.exec(string);
    if (matches) {
        var img = '<img src="' + matches[1] + '" height="120">';
        $(this).prepend(img);
    }
});

})();