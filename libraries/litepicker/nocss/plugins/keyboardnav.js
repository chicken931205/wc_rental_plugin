/*!
 * 
 * plugins/keyboardnav.js
 * Litepicker v2.0.3 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: 90ddf0a545e861c25835
 * 
 */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);Litepicker.add("keyboardnav",{init:function(e){function t(t,o){if(t.classList.contains("day-item")){o.preventDefault();var i=n(e.ui,t,(function(e,t){return e===(t="ArrowLeft"===o.code?t-1:t+1)}));i?i.focus():function(t){var n=e.ui.querySelector("".concat({ArrowLeft:".button-previous-month",ArrowRight:".button-next-month"}[t.code],'[tabindex="1"]'));n&&n.dispatchEvent(new Event("click"));setTimeout((function(){var n=null;switch(t.code){case"ArrowLeft":var o=e.ui.querySelectorAll('[tabindex="2"]');n=o[o.length-1];break;case"ArrowRight":n=e.ui.querySelector('[tabindex="2"]')}n.focus()}))}(o)}}function n(e,t,n){var o=Array.from(e.querySelectorAll('.day-item[tabindex="2"]')),i=o.indexOf(t);return o.filter((function(e,t){return n(t,i)&&2===e.tabIndex}))[0]}function o(t){e.isMouseDown=!0}function i(t){e.isMouseDown?e.isMouseDown=!1:this.options.inlineMode||this.isShowning()||(this.show(t.target),this.ui.querySelector('[tabindex="1"]').focus())}function r(e){var t=this;this.options.inlineMode||setTimeout((function(){var e=document.activeElement;t.ui.contains(e)||(t.nextFocusElement=e)}))}Object.defineProperties(e,{isMouseDown:{value:!1,writable:!0}}),e.ui.addEventListener("keydown",function(o){var i=this,r=o.target;switch(setTimeout((function(){i.onMouseEnter({target:document.activeElement})})),o.code){case"ArrowUp":case"ArrowDown":!function(t,o){if(t.classList.contains("day-item")){o.preventDefault();var i=n(e.ui,t,(function(e,t){return e===(t="ArrowUp"===o.code?t-7:t+7)}));i&&i.focus()}}(r,o);break;case"ArrowLeft":case"ArrowRight":t(r,o);break;case"Tab":!function(t,n){setTimeout((function(){if(!document.activeElement.closest(".litepicker")){var n=e.ui.querySelector('[tabindex="1"]');if(t===n){var o=e.ui.querySelectorAll('[tabindex="2"]');n=o[o.length-1]}n.focus()}}))}(r);break;case"Enter":case"Space":!function(t,n){t.classList.contains("day-item")&&(n.preventDefault(),document.activeElement.dispatchEvent(new Event("click")),setTimeout((function(){e.ui.querySelector('[tabindex="2"]').focus()})))}(r,o);break;case"Escape":e.hide()}}.bind(e),!0);var u=e.options;u.element instanceof HTMLElement&&(u.element.addEventListener("mousedown",o.bind(e),!0),u.element.addEventListener("focus",i.bind(e),!0)),u.elementEnd instanceof HTMLElement&&(u.elementEnd.addEventListener("mousedown",o.bind(e),!0),u.elementEnd.addEventListener("focus",i.bind(e),!0)),u.element instanceof HTMLElement&&u.element.addEventListener("blur",r.bind(e),!0),u.elementEnd instanceof HTMLElement&&u.elementEnd.addEventListener("blur",r.bind(e),!0),e.on("render",(function(e){Array.from(e.querySelectorAll([".month-item:first-child:not(.no-previous-month) .button-previous-month",".month-item:last-child:not(.no-next-month) .button-next-month",".reset-button","select"].join(","))).forEach((function(e){return e.tabIndex=1}))})),e.on("render:day",(function(e){e.tabIndex=e.classList.contains("is-locked")?-1:2}))}})},function(e,t,n){}]);