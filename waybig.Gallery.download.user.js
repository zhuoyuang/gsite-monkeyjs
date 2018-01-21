//
// ==UserScript==
// @name         waybig.Gallery.download
// @namespace    waybig.Gallery.download
// @version      0.1
// @description  download https://www.waybig.com/Gallery/
// @author       zhuoyuang
// @match        *://*.waybig.com/gallery/*
// @grant        GM_addStyle
// @grant        GM_download
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js


// ==/UserScript==
var downloadButtonLocal = "<button class=\"downloadButtonLocal\">DownloadAllThePhotos</button>";
(function() {
    'use strict';
    GM_addStyle('.downloadButtonLocal{' +
                ' width:100%; height:50px;  z-index:1; text-align:center;' +
                'font-size:14px; color:#fff; border-radius:3px; border:1px solid #db2d74;' +
                'background-color:#db2d74; background-size:22px; background-position:center; background-repeat:no-repeat;' +
                '}'
               );
    $(".heading").after(downloadButtonLocal);
    $(".heading").before(downloadButtonLocal);
    $(".downloadButtonLocal").click(function(){
        $('.breadcrumb').text().split('»');
        var _tmp_title_all=$('.breadcrumb.heading.heading-updates').text().split('»');
        var _product_name=_tmp_title_all[2].replace(/(^\s*)|(\s*$)/g,"").replace(/:/g," ").replace(/\?/g,"");
        var _movie_name=_tmp_title_all[3].replace(/(^\s*)|(\s*$)/g,"").replace(/:/g," ").replace(/\?/g,"");
        var download_dir = _product_name+'---'+_movie_name;
        var download_content = location.href + "\r" + $('.box').text();
        var file = new File([download_content], download_dir + ".txt", { type: 'text/plain;charset=utf-8' });
        saveAs(file);
        $('.photo-item .thumb a').each(function(){
            var _tmp_photo_url = document.location.origin + $(this).attr('href');
            var _tmp_photo_name = _tmp_photo_url.split("/").pop();
            GM_download(_tmp_photo_url, download_dir + '/' + _tmp_photo_name);
        });
    });



})();
