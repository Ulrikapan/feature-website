// ----------------------------
// $Catalog 目錄

// $fullpage initialization
// $homepage sideNav
// $homepage services
// $hoverdir Init
// $rellax js Init
// $window resize Adjustment
// $window on scroll Adjustment 
// $mouse parallax animate



// ----------------------------


$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000)

    // $fullpage initialization -------
    $('#fullpage').fullpage({
    //--Navigation--
        menu: '#sideMenu',
        // lockAnchors: false,
        anchors:['nsdiTop', 'webDesign', 'appDesign', 'works'],
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['top', 'web design', 'app design', 'works'],
        // showActiveTooltip: true,
        // navigationColor: '#FF0D35',
        // slidesNavigation: false,
        // slidesNavPosition: 'bottom',

    //--Scrolling--
        // css3: true,
        scrollingSpeed: 1800,
        // autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 1000,
        scrollBar: true,

        easing: 'easeInOutQuint',
        // easingcss3: 'ease',
        // loopBottom: false,
        // loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: false,
        // continuousHorizontal: false,
        // scrollHorizontally: false,
        // interlockedSlides: false,
        // dragAndMove: false,
        // offsetSections: false,
        // resetSliders: false,
        // fadingEffect: false,
        // normalScrollElements: '#element1, .element2',
        // scrollOverflow: false,
        // scrollOverflowReset: false,
        // scrollOverflowOptions: null,
        // touchSensitivity: 15,
        // normalScrollElementTouchThreshold: 5,
        // bigSectionsDestination: null,

    //--Accessibility--
        // keyboardScrolling: true,
        animateAnchor: true,
        // recordHistory: true,

    //--Design--
        // controlArrows: true,
        // verticalCentered: true,
        // sectionsColor : [''],
        // paddingTop: '0px',
        // paddingBottom: '0px',
        fixedElements: '#fixed-content',
        responsiveWidth: 991,
        // responsiveHeight: 800,
        // responsiveSlides: false,
        // parallax: false,
        // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //--Custom selectors--
        // sectionSelector: '.section',
        // slideSelector: '.slide',

        lazyLoading: false,

    //--events--
        onLeave: function(index, nextIndex, direction){
            if(index == 1 ){
                // $('.section-top-bg-container').animate({opacity: '0'},1000);
                
            }
            if(index == 2){
               $('.bg-rectangle-fixed').eq(0).delay(200).css({

                    '-webkit-transition': 'all 1s cubic-bezier(.23,1,.32,1)',
                    'transition': 'all 1s cubic-bezier(.23,1,.32,1)',
                    '-webkit-transform':'translate(0, -50%) scaleY(0)' ,
                    '-ms-transform': 'translate(0, -50%) scaleY(0)',
                    'transform': 'translate(0, -50%) scaleY(0)',
                    
                });
            }

            if(index == 3){
               $('.bg-rectangle-fixed').eq(1).delay(200).css({
                    '-webkit-transform':'translate(0, -50%) scaleY(0)' ,
                    '-ms-transform': 'translate(0, -50%) scaleY(0)',
                    'transform': 'translate(0, -50%) scaleY(0)',
                    '-webkit-transform-orign':'top' ,
                    '-ms-transform-orign': 'top',
                    'transform-orign': 'top'
                });
            }
        },
        afterLoad: function(anchorLink, index){
            if(index == 1 ){
                // $('.section-top-bg-container').delay( 800 ).animate({opacity: '1'},1000);

            }
            if(index == 2){

                
            }

            if(index == 3){

            }

        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });



    // $homepage sideNav ------
    $('.side-nav-item:nth-child(1)').addClass('active');

    $(window).on('hashchange', function(){
        var nowHash = location.hash
        if( nowHash !== '#!'){
            $('.side-nav-bullet[href='+nowHash+']').parent().addClass('active');
        }
        
    })
    $(window).on('load', function(){
        var nowHash = location.hash
        if( nowHash !== '#!'){
            $('.side-nav-bullet[href='+nowHash+']').parent().addClass('active');
        }
    })




    // $homepage services ------

    // 往下滾動至web Design
    $('.wp-section-services-web').waypoint(function(direction){
        $('.web-img').css({
            '-webkit-transform': 'translate(0,0)',
            '-ms-transform': 'translate(0,0)',
            'transform' : 'translate(0,0)',
        });

        // if(direction == 'down'){
        //     $('.bg-rectangle-fixed').eq(0).delay(200).css({
        //         '-webkit-transform': 'translate(0, -50%) scaleY(1)',
        //         '-ms-transform': 'translate(0, -50%) scaleY(1)',
        //         'transform': 'translate(0, -50%) scaleY(1)',
        //         'top': '50%',
        //         'padding-top': 'calc(100% * 628 / 1357)',
        //     });   
        // }
        if(direction == 'down'){
            $('.bg-rectangle-fixed').eq(0).delay(200).css({
                'top': '50%',
            }).delay(1000).css({
                '-webkit-transform': 'translate(0, -50%) scaleY(1)',
                '-ms-transform': 'translate(0, -50%) scaleY(1)',
                'transform': 'translate(0, -50%) scaleY(1)',
            });
            setTimeout(function(){
                $('.bg-rectangle-fixed').eq(0).css({
                    '-webkit-transition': 'all 1s cubic-bezier(.23,1,.32,1)',
                    'transition': 'all 1s cubic-bezier(.23,1,.32,1)',
                    '-webkit-transform-origin': 'bottom',
                    'transform-origin': 'bottom',
                })
            },1000);
                

        }
    },{offset:'60%'})

    // 往上滾動至web Design
    $('.wp-section-services-web').waypoint(function(direction){

        if (direction == 'up'){
            $('.bg-rectangle-fixed').eq(0).delay(200).css({
                '-webkit-transition': 'all 1s cubic-bezier(.23,1,.32,1)',
                'transition': 'all 1s cubic-bezier(.23,1,.32,1)',
                '-webkit-transform': 'translate(0, -50%) scaleY(1)',
                '-ms-transform': 'translate(0, -50%) scaleY(1)',
                'transform': 'translate(0, -50%) scaleY(1)',
            });
        }
    },{offset:'0%'})


    // 往上滾動至web Design
    $('.wp-section-services-app').waypoint(function(direction){

        if (direction == 'up'){
            $('.bg-rectangle-fixed').eq(1).delay(200).css({
                '-webkit-transform': 'translate(0, -50%) scaleY(1)',
                '-ms-transform': 'translate(0, -50%) scaleY(1)',
                'transform': 'translate(0, -50%) scaleY(1)',
            });
        }
    },{offset:'0%'})

    // 往下滾至app Design
    $('.wp-section-services-app').waypoint(function(direction){
        $('.app-img').delay(500).css({
            '-webkit-transform': 'translate(0,0)',
            '-ms-transform': 'translate(0,0)',
            'transform' : 'translate(0,0)',
        });
        if (direction == 'down'){
            $('.bg-rectangle-fixed').eq(1).delay(200).css({
                '-webkit-transform': 'translate(0, -50%) scaleY(1)',
                '-ms-transform': 'translate(0, -50%) scaleY(1)',
                'transform': 'translate(0, -50%) scaleY(1)',
            }); 
        }
    },{offset:'30%'})


    // 滾至works
    $('.wp-section-works').waypoint(function(direction){
        if (direction == 'down'){
            $('.bg-rectangle-fixed').css({
                '-webkit-transform': 'translate(0, -50%) scaleY(0)',
                '-ms-transform': 'translate(0, -50%) scaleY(0)',
                'transform': 'translate(0, -50%) scaleY(0)',
            });
        }   
    },{offset:'100%'})


    // 滾至top
    $('.wp-section-top').waypoint(function(direction){
        if (direction == 'up'){
            $('.bg-rectangle-fixed').css({
                '-webkit-transform': 'translate(0, -50%) scaleY(0)',
                '-ms-transform': 'translate(0, -50%) scaleY(0)',
                'transform': 'translate(0, -50%) scaleY(0)',
            });
        }   
    },{offset:'0%'})


    // $hoverdir Init ------

    function hoverdirInit(){
        if($(window).width() >= 976){
            $('#hover-dir-wrap .work-grid-item').hoverdir({hoverElem: '.work-title', speed: 600, easing: 'cubic-bezier(.23,1,.32,1)'});
        }else{
            $('#hover-dir-wrap .work-grid-item').hoverdir('destroy');
        }
    }
    hoverdirInit();



    // $window resize Adjustment ------

    $(window).on('resize', function(){
        hoverdirInit();
    });

    // $window on scroll Adjustment ------
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('body').removeClass('is-on-top')
        }else{
            $('body').addClass('is-on-top')
        }
    })


    // $mouse parallax animate ------
    var lastpageX = 0;
    var lastpageY = 0;

    $(window).mousemove(function(e){

        // 滑鼠位置計算
        var pageX = e.pageX;
        var pageY = e.pageY;
        var clientX = e.clientX;
        var clientY = e.clientY;
        var hClientX = clientX  - $(window).width() / 2;
        var hClientY = clientY  - $(window).height() / 2;


        if($(window).width() > 976){
            if($('body').is('.is-on-top')){
                // 山
                $('.t-mt-wrap.no6').css({
                    '-webkit-transform':'translateY('+pageY/75 +'px)  translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateY('+pageY/75 +'px)  translateZ('+pageX/12 +'px)',
                    'transform':'translateY('+pageY/75 +'px)  translateZ('+pageX/12 +'px)'})
                $('.t-mt-wrap.no5').css({
                    '-webkit-transform':'translateY('+pageY/65 +'px)  translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateY('+pageY/65 +'px)  translateZ('+pageX/12 +'px)',
                    'transform':'translateY('+pageY/65 +'px)  translateZ('+pageX/12 +'px)'})
                $('.t-mt-wrap.no4').css({
                    '-webkit-transform':'translateX('+pageX/45 +'px) translateY('+pageY/35 +'px)  translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateX('+pageX/45 +'px) translateY('+pageY/35 +'px)  translateZ('+pageX/12 +'px)',
                    'transform':'translateX('+pageX/45 +'px) translateY('+pageY/35 +'px)  translateZ('+pageX/12 +'px)'})
                $('.t-mt-wrap.no3').css({
                    '-webkit-transform':'translateX('+pageX/25 +'px) translateY('+pageY/25 +'px) translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateX('+pageX/25 +'px) translateY('+pageY/25 +'px) translateZ('+pageX/12 +'px)',
                    'transform':'translateX('+pageX/25 +'px) translateY('+pageY/25 +'px) translateZ('+pageX/12 +'px)'})
                $('.t-mt-wrap.no2').css({
                    '-webkit-transform':'translateX('+pageX/10 +'px) translateY('+pageY/15 +'px)  translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateX('+pageX/10 +'px) translateY('+pageY/15 +'px)  translateZ('+pageX/12 +'px)',
                    'transform':'translateX('+pageX/10 +'px) translateY('+pageY/15 +'px)  translateZ('+pageX/12 +'px)'})
                $('.t-mt-wrap.no1').css({
                    '-webkit-transform':'translateX('+pageX/5 +'px) translateY('+pageY/5 +'px)  translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateX('+pageX/5 +'px) translateY('+pageY/5 +'px)  translateZ('+pageX/12 +'px)',
                    'transform':'translateX('+pageX/5 +'px) translateY('+pageY/5 +'px)  translateZ('+pageX/12 +'px)'})

                // 霧
                $('.t-img-fog-wrap').css({
                    '-webkit-transform':'translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateZ('+pageX/12 +'px)',
                    'transform':'translateZ('+pageX/12 +'px) ' })


                // logo
                
                // 是safari的話不改變rotateX，會有問題
                if(navigator.sayswho.indexOf('Safari')!=-1){
                   $('.t-logo-wrap').css({
                    '-webkit-transform':'translateZ('+pageX/12 +'px)' ,
                    '-ms-transform': 'translateZ('+pageX/12 +'px)',
                    'transform':'translateZ('+pageX/12 +'px)' }) 
                    console.log('safari!')

                }else{
                    $('.t-logo-wrap').css({
                    '-webkit-transform':'translateZ('+pageX/12 +'px) rotateX('+ hClientY/30 +'deg)' ,
                    '-ms-transform': 'translateZ('+pageX/12 +'px) rotateX('+ hClientY/30 +'deg)',
                    'transform':'translateZ('+pageX/12 +'px) rotateX('+ hClientY/30 +'deg)' }) 
                }                
            }



            // web
            $('.web-img-ani.no5').css({
                '-webkit-transform':'translateX('+ (pageX / 20 - 50) +'px) translateY('+(pageY/40 - 20) +'px)  rotateY('+pageX/80 +'deg)' ,
                '-ms-transform': 'translateX('+ (pageX / 20 - 50) +'px) translateY('+(pageY/40 - 20) +'px)  rotateY('+pageX/80 +'deg)',
                'transform':'translateX('+ (pageX / 20 - 50) +'px) translateY('+(pageY/40 - 20) +'px)  rotateY('+pageX/80 +'deg)' })
            $('.web-img-ani.no7').css({
                '-webkit-transform':'translateX('+ (pageX / 35 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)' ,
                '-ms-transform': 'translateX('+ (pageX / 35 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)',
                'transform':'translateX('+ (pageX / 35 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)' })
            $('.web-img-ani.no8').css({
                '-webkit-transform':'translateX('+ (pageX / 50 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)' ,
                '-ms-transform': 'translateX('+ (pageX / 50 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)',
                'transform':'translateX('+ (pageX / 50 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)' })
            $('.web-img-ani.no6').css({
                '-webkit-transform':'translateX('+ (pageX / 65 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)' ,
                '-ms-transform': 'translateX('+ (pageX / 65 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)',
                'transform':'translateX('+ (pageX / 65 - 50) +'px) translateY('+(pageY/60 - 20) +'px) rotateY('+pageX/80 +'deg)' })

            // app
            $('.app-img-ani.no1').css({
                '-webkit-transform':'translateX('+ (pageX / 30 - 50) +'px) translateY('+(pageY/40 - 20) +'px)' ,
                '-ms-transform': 'translateX('+ (pageX / 30 - 50) +'px) translateY('+(pageY/40 - 20) +'px)',
                'transform':'translateX('+ (pageX / 30 - 50) +'px) translateY('+(pageY/40 - 20) +'px)' })
            $('.app-img-ani.no2').css({
                '-webkit-transform':'translateX('+ (pageX / 15 - 50) +'px) translateY('+(pageY/40 - 20) +'px)' ,
                '-ms-transform': 'translateX('+ (pageX / 15 - 50) +'px) translateY('+(pageY/40 - 20) +'px)',
                'transform':'translateX('+ (pageX / 15 - 50) +'px) translateY('+(pageY/40 - 20) +'px)' })
            $('.app-img-ani.no3').css({
                '-webkit-transform':'translateX('+ (pageX / 15 - 50) +'px) translateY('+(pageY/40 - 20) +'px)' ,
                '-ms-transform': 'translateX('+ (pageX / 15 - 50) +'px) translateY('+(pageY/40 - 20) +'px)',
                'transform':'translateX('+ (pageX / 15 - 50) +'px) translateY('+(pageY/40 - 20) +'px)' }) 
        }

            // bg-rectangle-fixed
            var bgRecFixed = $('.bg-rectangle-fixed'),
                bgRecFixedClientX = clientX - bgRecFixed.offset().left - bgRecFixed.width() / 2,
                shadowS = bgRecFixedClientX / 45,
                shadowC = 'rgba(110,110,110, 0.2)';

            if( Math.abs(shadowS) > 7){
                $('.bg-rectangle-fixed').css({
                    'box-shadow': (-shadowS) +'px '+ (-shadowS) +'px '+ shadowC +' , '
                                    +(2 * -shadowS) +'px '+ (2 * -shadowS) +'px '+shadowC+', '
                                    +(3 * -shadowS) +'px '+ (3 * -shadowS) +'px ' +shadowC
                })                
            }else{
                $('.bg-rectangle-fixed').css({
                    'box-shadow': '0px 0px '+ shadowC
                })
            }


    });

    // -------------------


});
