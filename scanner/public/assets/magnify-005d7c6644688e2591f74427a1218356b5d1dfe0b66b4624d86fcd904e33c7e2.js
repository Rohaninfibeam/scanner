!function(i){i.fn.magnify=function(t){t=i.extend({src:"",speed:100,timeout:-1,finalWidth:null,finalHeight:null,magnifiedWidth:null,magnifiedHeight:null,limitBounds:!1,afterLoad:function(){}},t);var e=this,n=i("html"),a=function(e){var a=i(e),o=a.closest("a"),s={};for(var f in t)s[f]=a.attr("data-magnify-"+f.toLowerCase());var d=s.src||t.src||o.attr("href")||"";if(d){var l,u,c,h,g,m,p,v,y,w,N=0,b=0,k=function(){var i=l.offset();return w={top:a.offset().top-i.top+parseInt(a.css("border-top-width"))+parseInt(a.css("padding-top")),left:a.offset().left-i.left+parseInt(a.css("border-left-width"))+parseInt(a.css("padding-left"))},i.top+=w.top,i.left+=w.left,i},H=function(){u.is(":visible")&&u.fadeOut(t.speed,function(){n.removeClass("magnifying").trigger("magnifyend")})};isNaN(+s.speed)||(t.speed=+s.speed),isNaN(+s.timeout)||(t.timeout=+s.timeout),isNaN(+s.finalWidth)||(t.finalWidth=+s.finalWidth),isNaN(+s.finalHeight)||(t.finalHeight=+s.finalHeight),isNaN(+s.magnifiedWidth)||(t.magnifiedWidth=+s.magnifiedWidth),isNaN(+s.magnifiedHeight)||(t.magnifiedHeight=+s.magnifiedHeight),"true"===s.limitBounds&&(t.limitBounds=!0),"function"==typeof window[s.afterLoad]&&(t.afterLoad=window[s.afterLoad]),a.data("originalStyle",a.attr("style"));var W=new Image;i(W).on({load:function(){var e,f;a.css("display","block"),a.parent(".magnify").length||a.wrap('<div class="magnify"></div>'),l=a.parent(".magnify"),a.prev(".magnify-lens").length?l.children(".magnify-lens").css("background-image","url('"+d+"')"):a.before('<div class="magnify-lens loading" style="background:url(\''+d+"') 0 0 no-repeat\"></div>"),u=l.children(".magnify-lens"),u.removeClass("loading"),c=t.finalWidth||a.width(),h=t.finalHeight||a.height(),g=t.magnifiedWidth||W.width,m=t.magnifiedHeight||W.height,p=u.width(),v=u.height(),y=k(),t.limitBounds&&(N=p/2/(g/c),b=v/2/(m/h)),g===W.width&&m===W.height||u.css("background-size",g+"px "+m+"px"),a.data("zoomSize",{width:g,height:m}),W=null,t.afterLoad(),l.off().on({"mousemove touchmove":function(i){if(i.preventDefault(),!h)return void r();if(e=(i.pageX||i.originalEvent.touches[0].pageX)-y.left,f=(i.pageY||i.originalEvent.touches[0].pageY)-y.top,u.is(":animated")||(e>N&&e<c-N&&f>b&&f<h-b?u.is(":hidden")&&(n.addClass("magnifying").trigger("magnifystart"),u.fadeIn(t.speed)):H()),u.is(":visible")){var a="";if(g&&m){var o=-Math.round(e/c*g-p/2),s=-Math.round(f/h*m-v/2);if(t.limitBounds){var d=-Math.round((c-N)/c*g-p/2),l=-Math.round((h-b)/h*m-v/2);o>0?o=0:o<d&&(o=d),s>0?s=0:s<l&&(s=l)}a=o+"px "+s+"px"}u.css({top:Math.round(f-v/2)+w.top+"px",left:Math.round(e-p/2)+w.left+"px","background-position":a})}},mouseenter:function(){y=k()},mouseleave:H}),t.timeout>=0&&l.on("touchend",function(){setTimeout(H,t.timeout)}),i("body").not(l).on("touchstart",H);var x=a.attr("usemap");if(x){var I=i("map[name="+x.slice(1)+"]");a.after(I),l.click(function(t){if(t.clientX||t.clientY){u.hide();var n=document.elementFromPoint(t.clientX||t.originalEvent.touches[0].clientX,t.clientY||t.originalEvent.touches[0].clientY);"AREA"===n.nodeName?n.click():i("area",I).each(function(){var t=i(this).attr("coords").split(",");if(e>=t[0]&&e<=t[2]&&f>=t[1]&&f<=t[3])return this.click(),!1})}})}o.length&&(o.css("display","inline-block"),!o.attr("href")||s.src||t.src||o.click(function(i){i.preventDefault()}))},error:function(){W=null}}),W.src=d}},o=0,r=function(){clearTimeout(o),o=setTimeout(function(){e.destroy(),e.magnify(t)},100)};return this.destroy=function(){return this.each(function(){var t=i(this),e=t.prev("div.magnify-lens"),n=t.data("originalStyle");t.parent("div.magnify").length&&e.length&&(n?t.attr("style",n):t.removeAttr("style"),t.unwrap(),e.remove())}),i(window).off("resize",r),e},i(window).resize(r),this.each(function(){a(this)})}}(jQuery);