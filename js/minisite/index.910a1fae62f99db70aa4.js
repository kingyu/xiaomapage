webpackJsonp([9],{399:function(e,t,n){"use strict";n(47),n(341);n(338),n(400),n(401),n(402),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(95);var i=n(67);i(".xm-anim"),i(".xm-see",{className:"started"})},400:function(e,t){},401:function(e,t,n){"use strict";var i=n(47),o=i(window).width(),o=(i(window).height(),window.innerHeight,i(window).width()),s=1.2*o/775,a=i(".build-macbook"),c=a.offset(),r=function(e){var t=(c.top,c.top,s-e/800);return t>=1?t:1};i(window).ready(function(){var e=i(window).scrollTop(),t=r(e);i(".build-macbook").css("transform","scale("+t+")")}),i(window).on("scroll",function(){var e=i(window).scrollTop(),t=r(e),n=t>1?1:0;i(".build-macbook").css("transform","scale("+t+")"),i(".build-macbook .img").css("opacity",n)})},402:function(e,t,n){"use strict";var i=n(47),o=n(403),s=i("#video-box"),a=(i("#homeVideo"),document.getElementById("homeVideo")),c=[o.config.video_domain+"minisite_tools_video_1.mp4",o.config.video_domain+"minisite_tools_video_2.mp4",o.config.video_domain+"minisite_tools_video_3.mp4",o.config.video_domain+"minisite_tools_video_4.mp4",o.config.video_domain+"minisite_tools_video_5.mp4",o.config.video_domain+"minisite_tools_video_6.mp4",o.config.video_domain+"minisite_tools_video_7.mp4",o.config.video_domain+"minisite_tools_video_8.mp4"];i(".section-etools .tools li").bind("click",function(e){var t=i(this).index();a.src=c[t],a.play(),s.addClass("playing")}),i("#video-box").bind("click",function(e){s.removeClass("playing")})},403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={video_domain:"http://pn7gq6n0k.bkt.clouddn.com/",buy_domain:"http://192.168.31.139:8000/"};t.config=i},404:function(e,t,n){"use strict";var i=n(47),o=i(".section-auxiliary .tab-unit"),s=i(".section-auxiliary .img-box .img-unit");o.bind("click",function(){var e=i(this),t=e.index();e.addClass("selected").siblings().removeClass("selected"),s.eq(t).addClass("selected").siblings().removeClass("selected")}),i(".section-auxiliary .video-screen").bind("ended",function(e){i(this).parents(".img-unit").find(".inline-video-control").addClass("show")}),i(".section-auxiliary .xm-replay-link").bind("click",function(e){e.preventDefault(),i(this).parents(".img-unit").find(".video").get(0).play()})},405:function(e,t,n){"use strict";function i(){a(".section-template .wheel .imgs .temp-unit.unit-"+m);[1,2,3,4,5,6,7].forEach(function(e){var t,n=".section-template .wheel .imgs .temp-unit.unit-"+e,i=a(n),o=m-e,s=7-Math.abs(o),c=1-.08*Math.abs(o);t=o<0?o>=-3?500+350*Math.abs(o)/3:1e3:o>0?o<=3?150+350*(3-o)/3:0:500,i.css("transform","scale("+c+")"),i.css("left",t+"px"),i.css("z-index",s)})}function o(){a(".section-template .wheel .imgs .temp-unit.unit-"+m);[1,2,3,4,5,6,7].forEach(function(e){var t=".section-template .wheel .imgs .temp-unit.unit-"+e,n=a(t);Math.abs(e-4);n.css("transform","scale(1)"),e!==m&&n.css("left","50%")})}function s(e){a(".section-template .wheel .imgs .wx-show").css("opacity",e),m=4,o(),setTimeout(function(){i()},1500)}var a=n(47),c=n(67),r=a(".section-template .tabs span:nth-of-type(1)"),l=a(".section-template .tabs span:nth-of-type(2)"),d=a(".section-template .wheel .prev"),u=a(".section-template .wheel .next"),f=a(".section-template .wheel .imgs div.temp-unit"),m=4;r.bind("click",function(){a(this).addClass("current-tab").siblings().removeClass("current-tab"),s(0)}),l.bind("click",function(){a(this).addClass("current-tab").siblings().removeClass("current-tab"),s(1)}),f.bind("click",function(){var e=a(this).index();m=e+1,i()}),d.bind("click",function(){m>1&&(m--,i())}),u.bind("click",function(){m<7&&(m++,i())});var h=!1;c(".section-template .wheel",{className:"started"},function(){h||(h=!0,s(0))})},406:function(e,t,n){"use strict";var i=n(47);i(window).on("scroll",function(){var e=i(".section-collect .ideas-content .appointment img"),t=i(".section-collect .ideas-content .gift img");e.hasClass("started")&&e.addClass("appointment-anim"),t.hasClass("started")&&t.addClass("gift-anim")})},407:function(e,t,n){"use strict"},408:function(e,t,n){"use strict";var i=n(47),o=n(96);i(document).scroll(function(){var e=i(window).width(),t=e/772,n=(i(this).scrollTop(),window.innerHeight),o=document.getElementsByClassName("data-macbook")[0].getBoundingClientRect();if(i(".section-analyze .data-macbook .macbook-img").css("background-image","url(../../../src/img/mini-macbook.png)"),o.top<=0)i(".section-analyze .data-macbook").css("transform","scale("+t+")"),i(".section-analyze .data-macbook .macbook-img").css("background-image","none");else if(o.top>=n-574)i(".section-analyze .data-macbook").css("transform","scale(1)");else{var s=n-574,a=(s-o.top)/s,c=a*(t-1)+1;i(".section-analyze .data-macbook").css("transform","scale("+c+")")}}),new o({tolerance:100,debounce:0,container:window}).on("enter",".data-analyze .headline",function(e,t){var n=i(e).data("target");i(".data-analyze .graph").removeClass("started"),i(".data-analyze .graph-"+n+"-image").addClass("started"),i(".data-analyze .image-data-wrap").removeClass("selected"),i(".data-analyze .image-data-"+n).addClass("selected")})},409:function(e,t,n){"use strict";n(47)},410:function(e,t,n){"use strict"},67:function(e,t,n){"use strict";var i=n(96),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];new i({tolerance:t.tolerance||0,debounce:t.debounce||0,container:t.container||window}).on("enter",e,function(e,i){e.classList.add(t.className||"show"),n&&n(e)})};e.exports=o},95:function(e,t,n){"use strict"},96:function(e,t,n){"use strict";var i,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,c){"object"===s(t)&&void 0!==e?e.exports=c():(i=c,void 0!==(o="function"==typeof i?i.call(t,n,t,e):i)&&(e.exports=o))}(0,function(){function e(){var e=this.options.container;if(e instanceof HTMLElement){"static"===window.getComputedStyle(e).position&&(e.style.position="relative")}e.addEventListener("scroll",this._scroll),window.addEventListener("resize",this._scroll),this._scroll(),this.attached=!0}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tolerance:0};if(!e)throw new Error("You should specify the element you want to test");"string"==typeof e&&(e=document.querySelector(e));var n=e.getBoundingClientRect();return n.bottom-t.tolerance>0&&n.right-t.tolerance>0&&n.left+t.tolerance<(window.innerWidth||document.documentElement.clientWidth)&&n.top+t.tolerance<(window.innerHeight||document.documentElement.clientHeight)}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tolerance:0,container:""};if(!e)throw new Error("You should specify the element you want to test");if("string"==typeof e&&(e=document.querySelector(e)),"string"==typeof t&&(t={tolerance:0,container:document.querySelector(t)}),"string"==typeof t.container&&(t.container=document.querySelector(t.container)),t instanceof HTMLElement&&(t={tolerance:0,container:t}),!t.container)throw new Error("You should specify a container element");var n=t.container.getBoundingClientRect();return e.offsetTop+e.clientHeight-t.tolerance>t.container.scrollTop&&e.offsetLeft+e.clientWidth-t.tolerance>t.container.scrollLeft&&e.offsetLeft+t.tolerance<n.width+t.container.scrollLeft&&e.offsetTop+t.tolerance<n.height+t.container.scrollTop}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tolerance:0},o=Object.keys(e),s=void 0;o.length&&(s=i.container===window?t:n,o.forEach(function(t){e[t].nodes.forEach(function(n){if(s(n.node,i)?(n.wasVisible=n.isVisible,n.isVisible=!0):(n.wasVisible=n.isVisible,n.isVisible=!1),!0===n.isVisible&&!1===n.wasVisible){if(!e[t].enter)return;Object.keys(e[t].enter).forEach(function(i){"function"==typeof e[t].enter[i]&&e[t].enter[i](n.node,"enter")})}if(!1===n.isVisible&&!0===n.wasVisible){if(!e[t].leave)return;Object.keys(e[t].leave).forEach(function(i){"function"==typeof e[t].leave[i]&&e[t].leave[i](n.node,"leave")})}})}))}function o(){var e=this,t=void 0;return function(){clearTimeout(t),t=setTimeout(function(){i(e.trackedElements,e.options)},e.options.debounce)}}function s(){this.options.container.removeEventListener("scroll",this._scroll),window.removeEventListener("resize",this._scroll),this.attached=!1}function a(e,t,n){var i=Object.keys(this.trackedElements[t].enter||{}),o=Object.keys(this.trackedElements[t].leave||{});if({}.hasOwnProperty.call(this.trackedElements,t))if(n){if(this.trackedElements[t][e]){var s="function"==typeof n?n.name:n;delete this.trackedElements[t][e][s]}}else delete this.trackedElements[t][e];i.length||o.length||delete this.trackedElements[t]}function c(e,t,n){var i=["enter","leave"];if(!e)throw new Error("No event given. Choose either enter or leave");if(!t)throw new Error("No selector to track");if(i.indexOf(e)<0)throw new Error(e+" event is not supported");({}).hasOwnProperty.call(this.trackedElements,t)||(this.trackedElements[t]={}),this.trackedElements[t].nodes=[];for(var o=0,s=document.querySelectorAll(t);o<s.length;o++){var a={isVisible:!1,wasVisible:!1,node:s[o]};this.trackedElements[t].nodes.push(a)}"function"==typeof n&&(this.trackedElements[t][e]||(this.trackedElements[t][e]={}),this.trackedElements[t][e][n.name||"anonymous"]=n)}function r(e,t){var n=window.MutationObserver||window.WebKitMutationObserver;if(n){new n(t).observe(e,{childList:!0,subtree:!0})}else e.addEventListener("DOMNodeInserted",t,!1),e.addEventListener("DOMNodeRemoved",t,!1)}function l(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tolerance:0,debounce:100,container:window};this.options={},this.trackedElements={},Object.defineProperties(this.options,{container:{configurable:!1,enumerable:!1,get:function(){var e=void 0;return"string"==typeof t.container?e=document.querySelector(t.container):t.container instanceof HTMLElement&&(e=t.container),e||window},set:function(e){t.container=e}},debounce:{get:function(){return parseInt(t.debounce,10)||100},set:function(e){t.debounce=e}},tolerance:{get:function(){return parseInt(t.tolerance,10)||0},set:function(e){t.tolerance=e}}}),Object.defineProperty(this,"_scroll",{enumerable:!1,configurable:!1,writable:!1,value:this._debouncedScroll.call(this)}),r(document.querySelector("body"),function(){Object.keys(e.trackedElements).forEach(function(t){e.on("enter",t),e.on("leave",t)})}),this.attach()}return Object.defineProperties(l.prototype,{_debouncedScroll:{configurable:!1,writable:!1,enumerable:!1,value:o},attach:{configurable:!1,writable:!1,enumerable:!1,value:e},destroy:{configurable:!1,writable:!1,enumerable:!1,value:s},off:{configurable:!1,writable:!1,enumerable:!1,value:a},on:{configurable:!1,writable:!1,enumerable:!1,value:c}}),l.check=t,l})}},[399]);