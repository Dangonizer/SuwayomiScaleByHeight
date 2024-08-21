// ==UserScript==
// @name        Suwayomi scale by height
// @include     http://192.168.178.23:4567/manga*
// @grant       none
// @version     1.0
// @author      Dangonizer
// @description Forces picture scaling mode to viewport height
// @license     GPLv2
// @namespace   https://github.com/Dangonizer/
// @homepageURL https://github.com/Dangonizer/SuwayomiScaleByHeight
// @supportURL  https://github.com/Dangonizer/SuwayomiScaleByHeight/issues
// @icon        https://raw.githubusercontent.com/Suwayomi/Suwayomi-Server/master/server/src/main/resources/icon/faviconlogo.png
// ==/UserScript==
(function () {
let s= document.createElement('style');
        s.name= 'Image Scaling';
        s.type= 'text/css';
        s.textContent= `
.muiltr-u6v8er img {
    width: auto !important;
    height: 125vh;
}
        `;
        document.head.appendChild(s);
})();
