webpackJsonp([4],{0:function(t,n){},1:function(t,n){},11:function(t,n){},12:function(t,n,i){"use strict";i(13)},13:function(t,n){},3:function(t,n,i){"use strict";i(0),i(4)},4:function(t,n){},5:function(t,n,i){"use strict";i(6)},6:function(t,n){},8:function(t,n){},83:function(t,n,i){"use strict";i(1),i(8),i(11),i(0),i(84);var e=i(2);i(10),i(3),i(5),i(12),e(document).scroll(function(){var t=(window.innerHeight,document.getElementById("gallery-container").getBoundingClientRect()),n=t.top;if(console.log(n),n<688&&n>-10){var i=.001;n-617<0&&(i=1);var c=1;c=n/688/10+.9,e("#image-front").attr("style","transform: translate("+n/2+"px, 0px);opacity: "+i+";"),e("#image-back").attr("style","transform: translate("+n/53+"px, 0px) scale("+c+", "+c+");")}n<-10?e("#sub-headline").addClass("activity"):n>0&&e("#sub-headline").removeClass("activity")})},84:function(t,n){}},[83]);