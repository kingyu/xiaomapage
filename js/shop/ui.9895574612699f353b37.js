webpackJsonp([15],{337:function(e,t,n){"use strict";n(32)},440:function(e,t,n){"use strict";var o=n(32);n(441),n(68),n(337);var r=n(69);o(document).scroll(function(){var e=0,t=0,n=0,r=window.innerHeight,i=document.getElementById("card_02").getBoundingClientRect(),c=document.getElementById("card_03").getBoundingClientRect(),a=document.getElementById("card_06").getBoundingClientRect();e=i.top-r+100,t=c.top-r+100,n=a.top-r+100;var l=r-o("#card_06").outerHeight();if(e<0){var s=Math.abs(e/o("#card_01").outerHeight());o("#card_01").attr("style","transform: translate(0px, "+e/11+"px) scale("+(1-.05*s)+","+(1-.05*s)+"); opacity: "+(1-s)+";")}if(t<0){var s=Math.abs(t/o("#card_02").outerHeight());o("#card_02").attr("style","transform: translate(0px, "+t/11+"px) scale("+(1-.05*s)+","+(1-.05*s)+"); opacity: "+(1-s)+";")}if(n<0){var s=Math.abs(n/o("#card_03").outerHeight());o("#card_03").attr("style","transform: translate(0px, "+n/11+"px) scale("+(1-.05*s)+","+(1-.05*s)+"); opacity: "+(1-s)+";")}a.top-l<0&&o("#headline").attr("style","transform: translate(0px, "+-(l-a.top)+"px)")});var i=new r({tolerance:450,debounce:100,container:window}),c=!1,a=document.getElementById("video-1");i.on("enter",".section-performance .video-1-trigger",function(e,t){c||(a.play(),c=!0)});var l=!1,s=!1,d=document.getElementById("video-3");i.on("enter",".section-performance .video-3-trigger",function(e,t){l||(d.play(),l=!0)});var u=document.getElementById("video-4");i.on("enter",".section-performance .video-4-trigger",function(e,t){s||(u.play(),s=!0)}),o(".color-link").bind("click",function(e){e.preventDefault();var t=o(this);o(".color-link.current").removeClass("current"),t.addClass("current"),o(".image-screentime-ipad .image").fadeOut(),o("#"+t.data("trigger")).fadeIn()}),o(".section-ar .video-screen").bind("ended",function(e){o(this).parents(".inline-video-center").find(".inline-video-control").addClass("show")}),o(".section-ar .xm-replay-link").bind("click",function(e){e.preventDefault(),o(this).parents(".inline-video-center").find(".video").get(0).play()})},441:function(e,t){},68:function(e,t,n){"use strict"},69:function(e,t,n){"use strict";var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(c,a){"object"===i(t)&&void 0!==e?e.exports=a():(o=a,void 0!==(r="function"==typeof o?o.call(t,n,t,e):o)&&(e.exports=r))}(0,function(){function e(){var e=this.options.container;if(e instanceof HTMLElement){"static"===window.getComputedStyle(e).position&&(e.style.position="relative")}e.addEventListener("scroll",this._scroll),window.addEventListener("resize",this._scroll),this._scroll(),this.attached=!0}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tolerance:0};if(!e)throw new Error("You should specify the element you want to test");"string"==typeof e&&(e=document.querySelector(e));var n=e.getBoundingClientRect();return n.bottom-t.tolerance>0&&n.right-t.tolerance>0&&n.left+t.tolerance<(window.innerWidth||document.documentElement.clientWidth)&&n.top+t.tolerance<(window.innerHeight||document.documentElement.clientHeight)}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tolerance:0,container:""};if(!e)throw new Error("You should specify the element you want to test");if("string"==typeof e&&(e=document.querySelector(e)),"string"==typeof t&&(t={tolerance:0,container:document.querySelector(t)}),"string"==typeof t.container&&(t.container=document.querySelector(t.container)),t instanceof HTMLElement&&(t={tolerance:0,container:t}),!t.container)throw new Error("You should specify a container element");var n=t.container.getBoundingClientRect();return e.offsetTop+e.clientHeight-t.tolerance>t.container.scrollTop&&e.offsetLeft+e.clientWidth-t.tolerance>t.container.scrollLeft&&e.offsetLeft+t.tolerance<n.width+t.container.scrollLeft&&e.offsetTop+t.tolerance<n.height+t.container.scrollTop}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tolerance:0},r=Object.keys(e),i=void 0;r.length&&(i=o.container===window?t:n,r.forEach(function(t){e[t].nodes.forEach(function(n){if(i(n.node,o)?(n.wasVisible=n.isVisible,n.isVisible=!0):(n.wasVisible=n.isVisible,n.isVisible=!1),!0===n.isVisible&&!1===n.wasVisible){if(!e[t].enter)return;Object.keys(e[t].enter).forEach(function(o){"function"==typeof e[t].enter[o]&&e[t].enter[o](n.node,"enter")})}if(!1===n.isVisible&&!0===n.wasVisible){if(!e[t].leave)return;Object.keys(e[t].leave).forEach(function(o){"function"==typeof e[t].leave[o]&&e[t].leave[o](n.node,"leave")})}})}))}function r(){var e=this,t=void 0;return function(){clearTimeout(t),t=setTimeout(function(){o(e.trackedElements,e.options)},e.options.debounce)}}function i(){this.options.container.removeEventListener("scroll",this._scroll),window.removeEventListener("resize",this._scroll),this.attached=!1}function c(e,t,n){var o=Object.keys(this.trackedElements[t].enter||{}),r=Object.keys(this.trackedElements[t].leave||{});if({}.hasOwnProperty.call(this.trackedElements,t))if(n){if(this.trackedElements[t][e]){var i="function"==typeof n?n.name:n;delete this.trackedElements[t][e][i]}}else delete this.trackedElements[t][e];o.length||r.length||delete this.trackedElements[t]}function a(e,t,n){var o=["enter","leave"];if(!e)throw new Error("No event given. Choose either enter or leave");if(!t)throw new Error("No selector to track");if(o.indexOf(e)<0)throw new Error(e+" event is not supported");({}).hasOwnProperty.call(this.trackedElements,t)||(this.trackedElements[t]={}),this.trackedElements[t].nodes=[];for(var r=0,i=document.querySelectorAll(t);r<i.length;r++){var c={isVisible:!1,wasVisible:!1,node:i[r]};this.trackedElements[t].nodes.push(c)}"function"==typeof n&&(this.trackedElements[t][e]||(this.trackedElements[t][e]={}),this.trackedElements[t][e][n.name||"anonymous"]=n)}function l(e,t){var n=window.MutationObserver||window.WebKitMutationObserver;if(n){new n(t).observe(e,{childList:!0,subtree:!0})}else e.addEventListener("DOMNodeInserted",t,!1),e.addEventListener("DOMNodeRemoved",t,!1)}function s(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tolerance:0,debounce:100,container:window};this.options={},this.trackedElements={},Object.defineProperties(this.options,{container:{configurable:!1,enumerable:!1,get:function(){var e=void 0;return"string"==typeof t.container?e=document.querySelector(t.container):t.container instanceof HTMLElement&&(e=t.container),e||window},set:function(e){t.container=e}},debounce:{get:function(){return parseInt(t.debounce,10)||100},set:function(e){t.debounce=e}},tolerance:{get:function(){return parseInt(t.tolerance,10)||0},set:function(e){t.tolerance=e}}}),Object.defineProperty(this,"_scroll",{enumerable:!1,configurable:!1,writable:!1,value:this._debouncedScroll.call(this)}),l(document.querySelector("body"),function(){Object.keys(e.trackedElements).forEach(function(t){e.on("enter",t),e.on("leave",t)})}),this.attach()}return Object.defineProperties(s.prototype,{_debouncedScroll:{configurable:!1,writable:!1,enumerable:!1,value:r},attach:{configurable:!1,writable:!1,enumerable:!1,value:e},destroy:{configurable:!1,writable:!1,enumerable:!1,value:i},off:{configurable:!1,writable:!1,enumerable:!1,value:c},on:{configurable:!1,writable:!1,enumerable:!1,value:a}}),s.check=t,s})}},[440]);