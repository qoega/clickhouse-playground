(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1012:function(n,t,e){var o;o=function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return n[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}return e.m=n,e.c=t,e.p="/",e(0)}([function(n,t,e){"use strict";var o,i=e(1),a=(o=i)&&o.__esModule?o:{default:o};n.exports=a.default},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),a=function n(t,e,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:n(a,e,o)}if("value"in i)return i.value;var r=i.get;return void 0!==r?r.call(o):void 0},r=e(2),s=(o=r)&&o.__esModule?o:{default:o},u=e(14);function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}e(15);var p=function(n){return t=document.body,e=n,"function"==typeof t.contains?t!==e&&t.contains(e):(16&t.compareDocumentPosition(e))>0;var t,e};"function"==typeof window.Node&&"isConnected"in window.Node.prototype&&(p=function(n){return n.isConnected});var d=function(n){function t(){var n;c(this,t);for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];var a=l(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(o)));return a._checkAnchorFrame=null,a}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,n),i(t,[{key:"_startCheckAnchor",value:function(){var n=this;this._stopCheckAnchor(),function t(){p(n.element)?n._checkAnchorFrame=(0,u.setFrame)(t):n.destruct()}()}},{key:"_stopCheckAnchor",value:function(){(0,u.delFrame)(this._checkAnchorFrame),this._checkAnchorFrame=null}},{key:"_delPopup",value:function(){return this._stopCheckAnchor(),a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_delPopup",this).call(this)}},{key:"_createPopup",value:function(){var n=a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_createPopup",this).call(this);return this._startCheckAnchor(),n}}]),t}(s.default);t.default=d},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}();function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var a=e(3),r=e(11),s=e(12),u=e(13).version,c='<div class="'+a.row+" "+a.head+'">&nbsp;</div>\n<div class="'+a.row+'">\n    <div class="'+a.avatar+'"></div>\n    <div class="'+a.body+'">\n        <div class="'+a.spin+'"></div>\n    </div>\n</div>\n<div class="'+a.row+" "+a.location+'"></div>',l=function(){function n(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(this,n),"string"==typeof t?t=document.querySelector(t):window.jQuery&&t instanceof window.jQuery&&(console.warn("StaffCard работает без jQuery, передайте в конструктор HTMLElement или селектор"),t=t[0]),this.element=t,this.login=e,this.options=Object.assign({userInfo:{target:"_self"}},o),this.popup=null,this._hideTimeout=null,this._showTimeout=null,this.onHover=this.onHover.bind(this),this._onLeave=this._onLeave.bind(this),this._onWindowMouseMove=this._onWindowMouseMove.bind(this),this._mouseCaptureElement()}return o(n,null,[{key:"version",get:function(){return u}}]),o(n,[{key:"onHover",value:function(){this._startShow()}},{key:"_onLeave",value:function(){this._startHide()}},{key:"destruct",value:function(){this._cancelShow(),this._cancelHide(),this._delPopup()}},{key:"_zIndex",value:function(){for(var n=this.element.parentNode,t=100;n&&n!==document.body;){var e=window.getComputedStyle(n).getPropertyValue("z-index");isNaN(e)||(t=Math.max(t,e)),n=n.parentNode}return t+1}},{key:"_cancelHide",value:function(){clearTimeout(this._hideTimeout),this._hideTimeout=null}},{key:"_startHide",value:function(){var n=this;this._cancelHide(),this._cancelShow(),this._hideTimeout=setTimeout((function(){n.popup&&(n.popup.classList.remove(a.popup_visible),n.popup.addEventListener("transitionend",(function t(){n.popup.removeEventListener("transitionend",t),n._delPopup()})))}),200)}},{key:"_cancelShow",value:function(){clearTimeout(this._showTimeout),this._showTimeout=null}},{key:"_startShow",value:function(){var n=this;this._cancelHide(),this._cancelShow(),this._showTimeout=setTimeout((function(){n.popup=n._createPopup(),n._position(!0),n.popup.classList.add(a.popup_visible),n._requestData().then((function(t){n._renderUser(t),n._position(!1)})).catch((function(){return n._renderError()}))}),500)}},{key:"_onWindowMouseMove",value:function(n){function t(t){return t===n.target||t!==n.target&&t.contains(n.target)}t(this.popup)||t(this.element)?this._cancelHide():this._startHide()}},{key:"_position",value:function(n){n&&(this.popup.style.transition="none"),this.popup.style.top=0,this.popup.style.left=0;var t=this.popup.offsetWidth,e=this.popup.offsetHeight,o=document.documentElement.clientWidth,i=window.innerHeight,r=void 0,s=this.element.getBoundingClientRect(),u=s.top,c=s.left,l=s.right,p=s.bottom,d=s.width;c+=window.pageXOffset;var f=o-(l+=window.pageXOffset)-10>=t,_=c-10>=t;f?(r=a.popup_side_right,c+=d):_?(r=a.popup_side_left,c-=t):(r=a.popup_side_right,c+=Math.max(10,o-c-10-t)),i-(u+e)<0&&i>e&&(u=p>i?i-e:p-e),u+=window.pageYOffset,f||_||(u+=p-u),this.popup.classList.remove(a.popup_side_left,a.popup_side_right),this.popup.classList.add(r),this.popup.style.top=u+"px",this.popup.style.left=c+"px",this.popup.style.zIndex=this._zIndex(),n&&(window.getComputedStyle(this.popup).getPropertyValue("transform"),this.popup.style.transition="")}},{key:"_createPopup",value:function(){var n=document.createElement("div");return n.innerHTML=c,n.classList.add(a.popup),document.body.appendChild(n),this._mouseCaptureWindow(),n}},{key:"_delPopup",value:function(){this._mouseCaptureElement(),this.popup&&(this.popup.parentNode.removeChild(this.popup),this.popup=null)}},{key:"_mouseCaptureWindow",value:function(){this.element.removeEventListener("mouseenter",this.onHover),this.element.removeEventListener("mouseleave",this._onLeave),window.addEventListener("mousemove",this._onWindowMouseMove)}},{key:"_mouseCaptureElement",value:function(){this.element.addEventListener("mouseenter",this.onHover),this.element.addEventListener("mouseleave",this._onLeave),window.removeEventListener("mousemove",this._onWindowMouseMove)}},{key:"_requestData",value:function(){return this.userData||(this.userData=s.getJSON("//center.yandex-team.ru/api/staff_cards/?"+this.login+"&format=json")),this.userData}},{key:"_renderUser",value:function(n){var t=n[this.login];if(!t)return this._renderError();new r(this.popup,t,this.options.userInfo)}},{key:"_renderError",value:function(){this.userData=null,this.popup&&(this.popup.querySelector("."+a.avatar).classList.add(a.avatar_error),this.popup.querySelector("."+a.body).innerHTML="<b>Ooops!</b>")}},{key:"login",get:function(){return this._login},set:function(n){this._login=n,this.userData=null}}]),n}();t.default=l},function(n,t,e){var o=e(4);"string"==typeof o&&(o=[[n.id,o,""]]),e(10)(o,{}),o.locals&&(n.exports=o.locals)},function(n,t,e){(t=n.exports=e(5)()).push([n.id,".staff-card__popup\n{\n    position: absolute;\n\n    box-sizing: border-box;\n    min-width: 300px;\n    max-width: 450px;\n    min-height: 150px;\n\n    transition-timing-function: ease-out;\n    transition-duration: .15s;\n    transition-property: transform, opacity;\n\n    opacity: 0;\n    border: 1px solid rgba(0, 0, 0, .1);\n    background: #fff;\n    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .4);\n\n    font: 13px Arial, Helvetica, sans-serif;\n}\n\n.staff-card__popup_side_left\n{\n    margin-left: -10px;\n\n    transform: translateX(-5%);\n}\n\n.staff-card__popup_side_right\n{\n    margin-left: 10px;\n\n    transform: translateX(5%);\n}\n\n.staff-card__popup_visible\n{\n    transform: translateX(0);\n\n    opacity: 1;\n}\n\n.staff-card__row\n{\n    padding: 10px 15px 0;\n}\n\n.staff-card__avatar\n{\n    position: relative;\n\n    float: left;\n\n    width: 100px;\n    height: 100px;\n\n    background: url("+e(6)+") center no-repeat;\n}\n\n.staff-card__avatar::after\n{\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    content: ' ';\n\n    border: 1px solid rgba(0, 0, 0, .12);\n}\n\n.staff-card__avatar_error\n{\n    transform-origin: 0 0;\n    animation: staff-card__error .5s linear forwards;\n}\n\n.staff-card__head\n{\n    font-weight: bold;\n}\n\n.staff-card__location\n{\n    margin-bottom: 10px;\n}\n\n.staff-card__location_loaded:before\n{\n    display: inline-block;\n\n    width: 15px;\n    height: 16px;\n    margin-right: .3em;\n\n    content: ' ';\n    vertical-align: bottom;\n\n    background: url("+e(7)+") center no-repeat;\n}\n\n.staff-card__body\n{\n    position: relative;\n\n    min-height: 100px;\n    margin-left: 115px;\n}\n\n.staff-card__spin\n{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    width: 24px;\n    height: 24px;\n    margin-top: -12px;\n    margin-left: -12px;\n\n    animation: staff-card__spin 1s infinite linear;\n\n    background: url("+e(8)+") center no-repeat;\n    background-size: contain;\n}\n\n.staff-card__visit\n{\n    color: #999;\n}\n\n.staff-card__link\n{\n    transition: color .15s ease-out;\n    text-decoration: none;\n\n    color: #07c;\n}\n\n.staff-card__link_type_user\n{\n    display: block;\n    overflow: hidden;\n\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    color: #000;\n\n    font-size: 18px;\n}\n\n.staff-card__link:hover,\n.staff-card__link_type_user:first-letter\n{\n    color: #f00;\n}\n\n.staff-card__button\n{\n    margin: 2px;\n    padding: 0 13px;\n\n    cursor: pointer;\n    white-space: nowrap;\n\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 3px;\n    outline: none;\n    background: transparent;\n\n    font: 13px Arial, sans-serif;\n    line-height: 26px;\n}\n\n.staff-card__button:hover\n{\n    border-color: rgba(0, 0, 0, .3);\n}\n\n.staff-card__button:active\n{\n    border-color: rgba(0, 0, 0, .3);\n    background-color: #f6f5f3;\n}\n\n.staff-card__button_jabber::before\n{\n    display: inline-block;\n\n    width: 8px;\n    height: 8px;\n    margin-right: 6px;\n\n    content: '';\n\n    border-radius: 100%;\n    background: #aaa;\n}\n\n.staff-card__button_status_offline::before\n{\n    background: #aaa;\n}\n\n.staff-card__button_status_available::before,\n.staff-card__button_status_chat::before\n{\n    background: #3a3;\n}\n\n.staff-card__button_status_away::before\n{\n    background: #4af;\n}\n\n.staff-card__button_status_xa::before\n{\n    background: #abb;\n}\n\n.staff-card__button_status_dnd::before\n{\n    background: #e54;\n}\n\n.staff-card__button_status_notinlist::before\n{\n    background: #cd8;\n}\n\n.staff-card__button_status_none::before\n{\n    content: none;\n}\n\n.staff-card__button_phone::before\n{\n    position: relative;\n    top: 1px;\n\n    display: inline-block;\n\n    width: 11px;\n    height: 11px;\n    margin-right: 5px;\n\n    content: ' ';\n\n    background: url("+e(9)+") center no-repeat;\n}\n\n.staff-card__button_phone:hover::before\n{\n    animation: staff-card__call .1s infinite alternate linear;\n}\n\n.staff-card__button_calling\n{\n    animation: staff-card__call .1s infinite alternate linear;\n}\n\n.staff-card__input\n{\n    z-index: 1;\n\n    flex: 1;\n\n    padding: 0 7px;\n\n    border: 1px solid rgba(0, 0, 0, .2);\n\n    font: 13px Arial, sans-serif;\n    line-height: 26px;\n}\n\n.staff-card__input:focus\n{\n    border-color: #ffdb4d;\n    outline: none;\n    box-shadow: inset 0 0 0 1px #ffdb4d;\n}\n\n.staff-card__contacts\n{\n    display: flex;\n    align-items: flex-start;\n\n    min-width: 195px; /* input width */\n    margin-top: 5px;\n}\n\n.staff-card__contact\n{\n    width: 100px;\n    margin: 2px;\n}\n\n.staff-card__contact__row\n{\n    display: flex;\n}\n\n.staff-card__contact__link\n{\n    display: block;\n\n    padding: 5px 0 5px 20px;\n\n    white-space: nowrap;\n}\n\n.staff-card__contact__reset\n{\n    width: 16px;\n    margin-right: 4px;\n\n    cursor: pointer;\n\n    color: #888;\n\n    font-size: 20px;\n    font-weight: 300;\n}\n\n.staff-card__gap\n{\n    position: relative;\n    z-index: 0;\n\n    margin: 4px;\n    padding: 8px 15px;\n\n    text-align: center;\n}\n\n.staff-card__gap__overlay\n{\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    opacity: .5;\n}\n\n.staff-card__gap__link\n{\n    color: #000;\n}\n\n@keyframes staff-card__error\n{\n    from\n    {\n        transform: rotate(0deg);\n    }\n    5%\n    {\n        transform: rotate(1deg);\n    }\n    10%\n    {\n        transform: rotate(0deg);\n    }\n    50%\n    {\n        transform: rotate(20deg);\n    }\n    60%\n    {\n        transform: rotate(10deg);\n    }\n    90%\n    {\n        transform: rotate(16deg);\n    }\n    to\n    {\n        transform: rotate(15deg);\n    }\n}\n\n@keyframes staff-card__spin\n{\n    from\n    {\n        transform: rotate(0deg);\n    }\n    to\n    {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes staff-card__call\n{\n    from\n    {\n        transform: rotate(0deg) translateZ(0);\n    }\n    to\n    {\n        transform: rotate(15deg) translateZ(0);\n    }\n}\n",""]),t.locals={popup:"staff-card__popup",popup_side_left:"staff-card__popup_side_left",popup_side_right:"staff-card__popup_side_right",popup_visible:"staff-card__popup_visible",row:"staff-card__row",avatar:"staff-card__avatar",avatar_error:"staff-card__avatar_error",error:"staff-card__error",head:"staff-card__head",location:"staff-card__location",location_loaded:"staff-card__location_loaded",body:"staff-card__body",spin:"staff-card__spin",visit:"staff-card__visit",link:"staff-card__link",link_type_user:"staff-card__link_type_user",button:"staff-card__button",button_jabber:"staff-card__button_jabber",button_status_offline:"staff-card__button_status_offline",button_status_available:"staff-card__button_status_available",button_status_chat:"staff-card__button_status_chat",button_status_away:"staff-card__button_status_away",button_status_xa:"staff-card__button_status_xa",button_status_dnd:"staff-card__button_status_dnd",button_status_notinlist:"staff-card__button_status_notinlist",button_status_none:"staff-card__button_status_none",button_phone:"staff-card__button_phone",call:"staff-card__call",button_calling:"staff-card__button_calling",input:"staff-card__input",contacts:"staff-card__contacts",contact:"staff-card__contact",contact__row:"staff-card__contact__row",contact__link:"staff-card__contact__link",contact__reset:"staff-card__contact__reset",gap:"staff-card__gap",gap__overlay:"staff-card__gap__overlay",gap__link:"staff-card__gap__link"}},function(n,t){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],t=0;t<this.length;t++){var e=this[t];e[2]?n.push("@media "+e[2]+"{"+e[1]+"}"):n.push(e[1])}return n.join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&o[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),n.push(r))}},n}},function(n,t){n.exports="data:image/png;base64,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"},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAMAAACOacfrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRFAAAAzMzMo6Oj5eXlgoKCaGho/f39iySGTQAAAAd0Uk5T////////ABpLA0YAAAAqSURBVHjaYmBAADY2BmSAymPALQfUxwYCEJKaPEYmBlYWJkZmNjaAAAMAckQCBYTNkoEAAAAASUVORK5CYII="},function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjYuMyIgeTE9IjMzLjYiIHgyPSIzMy40IiB5Mj0iMjYuNSIgaWQ9IjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjMiIvPjxsaW5lYXJHcmFkaWVudCB4MT0iNDAuNiIgeTE9IjIxIiB4Mj0iMjciIHkyPSI3LjQiIGlkPSJCIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iIzEiLz48bGluZWFyR3JhZGllbnQgeDE9IjI4IiB5MT0iMzkuNSIgeDI9IjM5IiB5Mj0iMjguNCIgaWQ9IjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjMiIvPjxsaW5lYXJHcmFkaWVudCB4MT0iMTQuMiIgeTE9IjIxLjkiIHgyPSIyMS45IiB5Mj0iMTQuMiIgaWQ9IkEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjNCIvPjxsaW5lYXJHcmFkaWVudCB4MT0iOC4xIiB5MT0iMjAuMyIgeDI9IjIwLjMiIHkyPSI4LjEiIGlkPSI5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iIzQiLz48bGluZWFyR3JhZGllbnQgeDE9IjM0IiB5MT0iMjIuNCIgeDI9IjI1LjYiIHkyPSIxMy43IiBpZD0iNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiMxIi8+PGxpbmVhckdyYWRpZW50IHgxPSI5LjEiIHkxPSIyOC43IiB4Mj0iMjAuOCIgeTI9IjQwIiBpZD0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiM1Ii8+PGxpbmVhckdyYWRpZW50IHgxPSIzLjQiIHkxPSIzMC43IiB4Mj0iMTkuMyIgeTI9IjQ2LjYiIGlkPSI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3AvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIuOCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI0NyIgeTE9IjE5LjYiIHgyPSIyOC40IiB5Mj0iMSIgaWQ9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLW9wYWNpdHk9Ii41Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii4zIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE0LjgiIHkxPSIyNi43IiB4Mj0iMjIiIHkyPSIzNCIgaWQ9IjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjNSIvPjxsaW5lYXJHcmFkaWVudCB4MT0iMiIgeTE9IjE4LjYiIHgyPSIxOC42IiB5Mj0iMiIgaWQ9IjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjkuOSIgeTE9IjQ1LjUiIHgyPSI0NSIgeTI9IjMwIiBpZD0iMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3Atb3BhY2l0eT0iLjgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNCA0NC44NXYzLjE1Yy02LjE1LjAxLTEyLjI5LTIuMzQtMTYuOTgtNy00LjY4LTQuNjktNy0xMC44Mi03LTE2Ljk2aDMuMmMwIDUuMzMgMi4wMyAxMC42NyA2LjA5IDE0Ljc0IDQuMDYgNC4wNyA5LjM5IDYuMTEgMTQuNzEgNi4xMXoiIGZpbGw9InVybCgjNSkiLz48cGF0aCBkPSJtNDAuOTYgNDAuOTZjLTQuNjkgNC42OS0xMC44MiA3LTE2Ljk2IDd2LTMuMTVjNS4zMyAwIDEwLjY3LTIuMDQgMTQuNzQtNi4xMSA0LjA3LTQuMDcgNi4xLTkuNDEgNi4xLTE0Ljc0aDMuMTZjLS4wMSA2LjE0LTIuMzUgMTIuMjgtNyAxNi45NnoiIGZpbGw9InVybCgjMikiLz48cGF0aCBkPSJtNDQuODUgMjRjMC01LjMyLTIuMDMtMTAuNjUtNi4xLTE0LjcxLTQuMDctNC4wNi05LjQxLTYuMDktMTQuNzQtNi4wOXYtMy4yYzYuMTQuMDEgMTIuMjggMi4zNSAxNi45NiA3IDQuNyA0LjY5IDcgMTAuODMgNyAxNi45OGgtMy4xNnoiIGZpbGw9InVybCgjMSkiLz48cGF0aCBkPSJtMjQgMy4yYy01LjMyIDAtMTAuNjUgMi4wMy0xNC43MSA2LjA5LTQuMDYgNC4wNi02LjA5IDkuMzktNi4wOSAxNC43MWgtMy4yYy0uMDEtNi4xNSAyLjMzLTEyLjI5IDctMTYuOTggNC42OS00LjY5IDEwLjgzLTcgMTYuOTgtN3YzLjJ6IiBmaWxsPSJ1cmwoIzQpIi8+PHBhdGggZD0ibTI0IDM1LjJjLTIuODcgMC01Ljc0LTEuMDktNy45My0zLjI5LTIuMTgtMi4xOS0zLjI3LTUuMS0zLjI4LTcuOTFoMy4xOGMwIDIuMDUuNzggNC4xIDIuMzQgNS42NiAxLjU3IDEuNTcgMy42MiAyLjM1IDUuNjcgMi4zNHYzLjE5eiIgZmlsbD0idXJsKCMzKSIvPjxwYXRoIGQ9Im0yNCAzOC40djMuMjJjLTQuNTEuMDEtOS0xLjcxLTEyLjQ1LTUuMTYtMy40My0zLjQzLTUuMTQtNy45My01LjE1LTEyLjQ0aDMuMjFjLjAxIDMuNjggMS40MSA3LjM2IDQuMjEgMTAuMTYgMi44MSAyLjgyIDYuNSA0LjIzIDEwLjE5IDQuMjJ6IiBmaWxsPSJ1cmwoIzApIi8+PHBhdGggZD0ibTI0IDM1LjJ2LTMuMTljMi4wNSAwIDQuMS0uNzggNS42Ni0yLjM0IDEuNTctMS41NyAyLjM1LTMuNjEgMi4zNS01LjY2aDMuMTljLS4wMSAyLjg3LTEuMSA1LjczLTMuMjggNy45MS0yLjE4IDIuMTktNS4xIDMuMjgtNy45MiAzLjI5eiIgZmlsbD0idXJsKCM3KSIvPjxwYXRoIGQ9Im0yNCAxMi44YzIuODcgMCA1LjczIDEuMDkgNy45MiAzLjI3IDIuMiAyLjE5IDMuMjkgNS4wNiAzLjI4IDcuOTNoLTMuMTljMC0yLjA0LS43OC00LjA4LTIuMzUtNS42My0xLjU2LTEuNTUtMy42MS0yLjMzLTUuNjYtMi4zNHYtMy4yM3oiIGZpbGw9InVybCgjNikiLz48cGF0aCBkPSJtMjQgOS42MXYtMy4yMWM0LjUuMDEgOSAxLjcyIDEyLjQ0IDUuMTUgMy40NSAzLjQ0IDUuMTcgNy45NSA1LjE2IDEyLjQ1aC0zLjIyYy4wMS0zLjY4LTEuNC03LjM3LTQuMjItMTAuMTgtMi44MS0yLjgtNi40OC00LjItMTAuMTYtNC4yMXoiIGZpbGw9InVybCgjQikiLz48cGF0aCBkPSJtMjQgMTIuOHYzLjIzYy0yLjA1IDAtNC4xLjc4LTUuNjcgMi4zNC0xLjU2IDEuNTYtMi4zNCAzLjU5LTIuMzQgNS42M2gtMy4xOGMtLjAxLTIuODcgMS4wOS01Ljc0IDMuMjctNy45MyAyLjE5LTIuMTkgNS4wNi0zLjI4IDcuOTMtMy4yOHoiIGZpbGw9InVybCgjQSkiLz48cGF0aCBkPSJtMjQgNi40djMuMjFjLTMuNjgtLjAxLTcuMzcgMS4zOS0xMC4xOSA0LjIxLTIuODEgMi44MS00LjIxIDYuNS00LjIxIDEwLjE4aC0zLjIxYy0uMDEtNC41MSAxLjcxLTkgNS4xNS0xMi40NSAzLjQ0LTMuNDQgNy45NS01LjE1IDEyLjQ1LTUuMTV6IiBmaWxsPSJ1cmwoIzkpIi8+PHBhdGggZD0ibTI0IDQxLjZ2LTMuMjJjMy42OC0uMDEgNy4zNi0xLjQxIDEwLjE2LTQuMjIgMi44MS0yLjggNC4yMS02LjQ4IDQuMjItMTAuMTZoMy4yMmMtLjAxIDQuNS0xLjczIDktNS4xNiAxMi40NC0zLjQ0IDMuNDQtNy45NCA1LjE2LTEyLjQ0IDUuMTZ6IiBmaWxsPSJ1cmwoIzgpIi8+PC9nPjwvc3ZnPgo="},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA/f39emVIHQAAAAJ0Uk5T/wDltzBKAAAAMElEQVR42lTLAQoAAARD0b/7X5oYQenRoCogxzAXDnGgu7MFc6I6fncv/reXCgEGABPTAFKFjG5BAAAAAElFTkSuQmCC"},function(n,t,e){var o={},i=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}},a=i((function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())})),r=i((function(){return document.head||document.getElementsByTagName("head")[0]})),s=null,u=0,c=[];function l(n,t){for(var e=0;e<n.length;e++){var i=n[e],a=o[i.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](i.parts[r]);for(;r<i.parts.length;r++)a.parts.push(g(i.parts[r],t))}else{var s=[];for(r=0;r<i.parts.length;r++)s.push(g(i.parts[r],t));o[i.id]={id:i.id,refs:1,parts:s}}}}function p(n){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],a=i[0],r={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(r):t.push(e[a]={id:a,parts:[r]})}return t}function d(n,t){var e=r(),o=c[c.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(t)}}function f(n){n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function _(n){var t=document.createElement("style");return t.type="text/css",d(n,t),t}function g(n,t){var e,o,i;if(t.singleton){var a=u++;e=s||(s=_(t)),o=M.bind(null,e,a,!1),i=M.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return t.rel="stylesheet",d(n,t),t}(t),o=y.bind(null,e),i=function(){f(e),e.href&&URL.revokeObjectURL(e.href)}):(e=_(t),o=m.bind(null,e),i=function(){f(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){void 0===(t=t||{}).singleton&&(t.singleton=a()),void 0===t.insertAt&&(t.insertAt="bottom");var e=p(n);return l(e,t),function(n){for(var i=[],a=0;a<e.length;a++){var r=e[a];(s=o[r.id]).refs--,i.push(s)}for(n&&l(p(n),t),a=0;a<i.length;a++){var s;if(0===(s=i[a]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}};var h,b=(h=[],function(n,t){return h[n]=t,h.filter(Boolean).join("\n")});function M(n,t,e,o){var i=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=b(t,i);else{var a=document.createTextNode(i),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(a,r[t]):n.appendChild(a)}}function m(n,t){var e=t.css,o=t.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function y(n,t){var e=t.css,o=t.sourceMap;o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([e],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}},function(n,t,e){"use strict";var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}();function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var a=e(3),r=e(12),s=function(n){return'<div style="background: '+n.color+'" class="'+a.gap__overlay+'"></div>\n<a class="'+a.link+" "+a.gap__link+'" href="'+n.url+'">'+n.name+" "+n.time+"</a>"},u=function(n){return(n.table?'<a class="'+a.link+'" href="'+n.table.url+'">'+n.office+"</a>":"<span>"+n.office+"</span>")+" "+(n.last_office?'<span class="'+a.visit+'"> — '+n.last_office.office+", "+n.last_office.ago+"</span>":"")},c=function(n){return'<button class="'+a.button+" "+a.button_jabber+" "+a["button_status_"+(n.is_dismissed?"none":n.jabber_status)]+'">'+n.work_email.replace(/yandex-team\.ru$/,"")+"</button>"},l=function(n,t){return'<div class="'+a.contact+'" style="width: '+t+'px">\n    <div class="'+a.contact__row+'">\n        <span class="'+a.contact__reset+" "+a.link+'">↺</span>\n        <input class="'+a.input+'" type="text" value="'+n.work_email+'" />\n    </div>\n    <a class="'+a.link+" "+a.contact__link+'" href="mailto:'+n.work_email+'">Write email</a>\n    <a class="'+a.link+" "+a.contact__link+'" href="xmpp:'+n.work_email+'">Write to jabber</a>\n</div>'},p=function(n,t){return'\n    <div><a class="'+a.link+" "+a.link_type_user+'" href="//staff.yandex-team.ru/'+n.login+'" target="'+t.target+'">'+n.first_name+" "+n.last_name+"</a></div>\n    <div>"+n.position+'</div>\n    <div class="'+a.contacts+'">\n        '+c(n)+"\n        "+(n.phones&&n.phones.work?'<button class="'+a.button+" "+a.button_phone+'">'+n.phones.work+"</button>":"")+'\n    </div>\n    <div class="'+a.contacts+'">\n        '+(n.phones&&n.phones.mobile?'<button class="'+a.button+" "+a.button_phone+'">'+n.phones.mobile+"</button>":"")+"\n    </div>\n"};function d(n,t,e,o){n.addEventListener(t,(function(n){var t=n.target.closest(e);t&&o(t)}))}n.exports=function(){function n(t,e){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(i(this,n),t.querySelector("."+a.head).textContent=e.dep.name,t.querySelector("."+a.avatar).innerHTML='<img src="'+e.avatar+'">',t.querySelector("."+a.body).innerHTML=p(e,r),e.is_dismissed){var f=t.querySelector("."+a.location);f.parentNode.removeChild(f)}else{var _=t.querySelector("."+a.location);_.classList.add(a.location_loaded),_.innerHTML=u(e)}if(e.gap){var g=document.createElement("div");g.innerHTML=s(e.gap),g.classList.add(a.gap),t.appendChild(g)}d(t,"click","."+a.button_jabber,(function(){var n=t.querySelector("."+a.button_jabber);n.outerHTML=l(e,n.offsetWidth),t.querySelector("."+a.input).select()})),d(t,"click","."+a.contact__reset,(function(){t.querySelector("."+a.contact).outerHTML=c(e)})),d(t,"click","."+a.button_phone,(function(n){return o.callPhone(n)}))}return o(n,[{key:"callPhone",value:function(n){function t(){0==--o&&n.classList.remove(a.button_calling)}var e=n.textContent,o=2;n.classList.add(a.button_calling),setTimeout(t,1e3),r.getJSON("//staff.yandex-team.ru/api/call/"+e+"?format=json").then(t).catch(t)}}]),n}()},function(n,t){"use strict";n.exports={getJSON:function(n){return new Promise((function(t,e){var o=new XMLHttpRequest;Object.assign(o,{withCredentials:!0,onload:function(){try{t(JSON.parse(o.response))}catch(n){e()}},onerror:function(){return e()}}),o.open("GET",n),o.send(null)}))}}},function(n,t){n.exports={name:"staff-card",version:"2.1.0",description:"",main:"dist/staff-card.js",repository:"git@github.yandex-team.ru:tools/staff-card.git",scripts:{prebuild:"rimraf dist/*",build:"npm run build:main && npm run build:min","build:main":"webpack","build:min":"webpack --optimize-minimize",start:"npm run build:main -- --watch",test:"mocha --compilers js:babel-register,css:css-modules-require-hook/preset --require ./util/setup-jsdom",coverage:"nyc --reporter=lcov --reporter=text npm test",preversion:"releaser changelog -v v${npm_package_version}",version:"git add changelog.md",postversion:"git push && git push --tags && npm run deploy",predeploy:"npm run build",deploy:"npm run mds:sync_version && npm run mds:sync_latest","mds:sync_version":"aws s3 --endpoint-url=https://s3.mds.yandex.net sync ./dist/ s3://${npm_package_name}/v${npm_package_version}/","mds:sync_latest":"aws s3 --endpoint-url=https://s3.mds.yandex.net sync ./dist/ s3://${npm_package_name}/_/"},keywords:[],author:"",license:"ISC",files:["dist","src"],nyc:{include:["src/*.js"]},devDependencies:{"babel-core":"^6.7.4","babel-loader":"^6.2.4","babel-preset-es2015":"^6.6.0","babel-register":"^6.7.2","copy-webpack-plugin":"3.0.1","cross-env":"^1.0.7","css-loader":"^0.23.1","css-modules-require-hook":"^4.0.0",eslint:"^2.7.0",expect:"^1.16.0","file-loader":"0.9.0","html-webpack-plugin":"^2.15.0",jsdom:"^8.3.1","json-loader":"^0.5.4",mocha:"^2.4.5",nyc:"^6.4.0",postcss:"^6.0.19","promise.prototype.finally":"^1.0.1",rimraf:"^2.5.2","style-loader":"^0.13.1","url-loader":"^0.5.7",webpack:"~1.13.3","webpack-dev-server":"1.15.*"},dependencies:{"element-closest":"^3.0.1"}}},function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=window.requestAnimationFrame,o=window.cancelAnimationFrame;"function"!=typeof e&&(t.setFrame=e=function(n){return window.setTimeout(n,1e3/60)},t.delFrame=o=window.clearTimeout),t.setFrame=e,t.delFrame=o},function(n,t){var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(n){for(var t=(this.document||this.ownerDocument).querySelectorAll(n),e=0;t[e]&&t[e]!==this;)++e;return Boolean(t[e])}),"function"!=typeof e.closest&&(e.closest=function(n){for(var t=this;t&&1===t.nodeType;){if(t.matches(n))return t;t=t.parentNode}return null})}])},n.exports=o()}}]);
//# sourceMappingURL=1.js.map