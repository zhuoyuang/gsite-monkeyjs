//
// ==UserScript==
// @name         gaysonic.eu.download
// @namespace    gaysonic.eu.download
// @version      0.1
// @description  download http://www.gaysonic.eu/
// @author       zhuoyuang
// @match        http://www.gaysonic.eu/*
// @exclude      http://www.gaysonic.eu/
// @exclude      http://www.gaysonic.eu/page/*
// @grant        GM_addStyle
// @grant        GM_download
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js


// ==/UserScript==
var downloadButton = "<button class=\"gaysonicdownloadbutton\">Download</button>";
(function() {
    'use strict';
    GM_addStyle('.gaysonicdownloadbutton{' +
                ' width:200px; height:28px; right:25px; top:25px; z-index:1; text-align:center;' +
                'font-size:14px; line-height:26px; padding:0 8px; font-weight:600; color:#fff; white-space:nowrap; outline:0;' +
                'border-radius:3px; border:1px solid #db2d74;' +
                'background-color:#db2d74; background-size:22px; background-position:center; background-repeat:no-repeat;' +
                '}'
               );
    $(".title").after(downloadButton);
    $(".gaysonicdownloadbutton").click(function(){
        var download_title = $(".title").html().replace("&amp;", ",");
        var download_content=$('.entry').text();
        var download_images0=$('.entry img')[0].src;
        var download_images1=$('.entry img')[1].src;
        GM_download(download_images0, download_title + "/1.jpg");
        GM_download(download_images1, download_title + "/2.jpg");
        var file = new File([download_content], download_title + ".txt", { type: 'text/plain;charset=utf-8' });
        saveAs(file);
    });



})();