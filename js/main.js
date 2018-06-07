// ----------------------------
// $Catalog 目錄

// $JavaScript Document 消除連結虛線
// $判斷瀏覽器
// $loading 畫面
// $waypoints & animate
// $header menu
// $to-top-btn
// $reveal-animation


// ----------------------------

// $判斷瀏覽器

navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M.join(' ');
})();



// $JavaScript Document 消除連結虛線
jQuery(function ($) {
    $("a").focus(function () {
        $(this).blur();
    });
});

$(document).ready(function(){
    // $loading 畫面
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000)

    // $waypoints & animate ------

    function onScrollAnim( items, trigger ) {
        items.each( function() {
            var wpaElement = $(this),
                wpaAnimation = wpaElement.attr('data-wpa-animation'),
                wpaDuration = wpaElement.attr('data-wpa-duration'), 
                wpaDelay = wpaElement.attr('data-wpa-delay');

            wpaElement.css({
                '-webkit-animation-delay':  wpaDelay,
                '-moz-animation-delay':     wpaDelay,
                'animation-delay':          wpaDelay,
                '-webkit-animation-duration': wpaDuration,
                '-o-animation-duration': wpaDuration,
                'animation-duration': wpaDuration,
            });
     
            //若trigger變數有值，則為此值，若無則為element本身
            var wpaTrigger = ( trigger ) ? trigger : wpaElement;

            wpaTrigger.waypoint(function(direction) {
                // if (direction == 'down'){
                  wpaElement.addClass('animated').addClass(wpaAnimation);
                // } 
                // else {
                //   wpaElement.removeClass('animated').removeClass(wpaAnimation);
                // }
                
            },{
                offset: '100%'
            });
        });
    }


    onScrollAnim( $('.myAnimation') );




    // $header menu
    // $(window).mousemove(function(e){
    //     var clientX = e.clientX,
    //         clientY = e.clientY;

    //     if($(window).width() > 991){
    //         function menuBtnAni(){
    //             var El = $('.menu-toggle-btn'),
    //                 ElT = El.offset().top - 15, 
    //                 ElB = El.offset().top + El.height() + 15,
    //                 ElL = El.offset().left - 15 ,
    //                 ElR = El.offset().left + El.width() + 15,
    //                 WscrollTop = $(window, 'html, body').scrollTop(),
    //                 Wwidth = $(window).width();

    //             if(clientY > ElT - WscrollTop && clientY < ElB - WscrollTop && clientX > ElL && clientX < ElR){
    //                 $('.menu-toggle-btn .icon').css({
    //                     '-webkit-transform':'translateY('+( (clientY - 35) / 2 - 18) +'px)  translateX('+((clientX - ElR) / 2 + 18) +'px)' ,
    //                     '-ms-transform': 'translateY('+( (clientY - 35) / 2 - 18) +'px)  translateX('+((clientX - ElR) / 2 + 18) +'px)',
    //                     'transform':'translateY('+( (clientY - 35) / 2 - 18) +'px)  translateX('+((clientX - ElR) / 2 + 18) +'px)',
    //                 });
    //                 $('.menu-toggle-btn .icon-bg').css({
    //                     '-webkit-transform':'translateY('+( (clientY - 35) - 40) +'px)  translateX('+((clientX - ElR) + 30) +'px)' ,
    //                     '-ms-transform': 'translateY('+( (clientY - 35) - 40) +'px)  translateX('+((clientX - ElR) + 30) +'px)',
    //                     'transform':'translateY('+( (clientY - 35) - 40) +'px)  translateX('+((clientX - ElR) + 30) +'px)',
    //                 });
    //             }else{
    //                 $('.menu-toggle-btn .icon-bg').css({
    //                     '-webkit-transform':'translateY(0px)  translateX(0px)' ,
    //                     '-ms-transform': 'translateY(0px)  translateX(0px)',
    //                     'transform':'translateY(0px)  translateX(0px)',
    //                 });
    //                 $('.menu-toggle-btn .icon').css({
    //                     '-webkit-transform':'translateY(0px)  translateX(0px)' ,
    //                     '-ms-transform': 'translateY(0px)  translateX(0px)',
    //                     'transform':'translateY(0px)  translateX(0px)',
    //                 })
    //             }
    //         }
    //         menuBtnAni();
    //     }
    // })

    function menuHide(){
        var lastScrollTop =0;

        $(window).on('scroll', function(){
            // -捲軸往上滑時顯示選單/往下滑則隱藏
            var currentScrollTop = $(this).scrollTop();
              // scroll down
            if( currentScrollTop > lastScrollTop){
                $('.header-el').stop(true).css('opacity','0');
            }
              // scroll up
            else{
                $('.header-el').stop(true).css('opacity','1');
            }
              // 持續更新lastScrollTop
            lastScrollTop = currentScrollTop;
              
              // 避免safari捲軸至最上方時ScrollTop會小於零
            if (lastScrollTop < 0 ){
                lastScrollTop = 0;
            }
              // -end
        })
    }
    menuHide();

    // $to-top-btn
    $('.nsdi-theme').find('.to-top-btn').hide();
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 900){
            $('.nsdi-theme').find('.to-top-btn').show();
        }else{
            $('.nsdi-theme').find('.to-top-btn').hide();
        }
    })
    $('.nsdi-theme').find('.to-top-btn').on('click', function(){
        $('html, body').animate({'scrollTop': 0}, '700');
    })


    // $reveal-animation
    var revealEl = $('body').find('.reveal');
    function revealAnimate(){
      revealEl.each(function(){
        var revealElPos = $(this).offset().top;
        //捲動觸發點
        if($(window).scrollTop() > revealElPos - 800){
          if($(this).hasClass('reveal-l')){
            $(this).addClass('revealAniL');
          }else if ($(this).hasClass('reveal-r')){
            $(this).addClass('revealAniR');
          }else if ($(this).hasClass('reveal-t')){
            $(this).addClass('revealAniT');
          }else if ($(this).hasClass('reveal-b')){
            $(this).addClass('revealAniB');
          }
          $(this).parent().find('.reveal-content').addClass('active');
        }
      })
    }
    revealAnimate();
    $(window).scroll(function(){
      revealAnimate()
    })


});
