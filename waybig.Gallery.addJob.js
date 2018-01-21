//
// ==UserScript==
// @name         waybig.Gallery.addJob
// @namespace    waybig.Gallery.addJob
// @version      0.1
// @description  addJob https://www.waybig.com/Gallery/
// @author       zhuoyuang
// @match        https://www.waybig.com/gallery/*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js


// ==/UserScript==
var downloadButton = "<button class=\"addJobButton\">addJob</button>";
(function() {
    'use strict';
    GM_addStyle('.addJobButton{' +
                ' width:100%; height:50px;  z-index:1; text-align:center;' +
                'font-size:14px; color:#fff; border-radius:3px; border:1px solid #db2d74;' +
                'background-color:#db2d74; background-size:22px; background-position:center; background-repeat:no-repeat;' +
                '}'
               );
    $(".heading").after(downloadButton);
    GM_log("hello");
    $(".addJobButton").click(function(){
        var ret = GM_xmlhttpRequest({
            method: "GET",
            headers: {"Accept": "application/json"},
            url: "http://192.168.1.11:8080/api/job/addJob?url=" + window.location.href,
            onload: function(res) {
                GM_log(res);
                alert(res);
            }
        });
    });
})();
