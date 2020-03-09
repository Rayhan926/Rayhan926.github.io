$(document).ready(function(){

    // Small NAv

    $('.bar-icon-div i').click(function(){
        $('.overly-nav').addClass('open-nav')
    });
    $('.close-icon').click(function(){
        $('.overly-nav').removeClass('open-nav')
    });
    $('.overly-content a,.overly-social a,.login-div a').click(function(){
        $('.overly-nav').removeClass('open-nav')
    });
$('.top-area').click(function(){
    $('.overly-nav').removeClass('open-nav')
});

    // AOS 

    AOS.init();


    // Owl Carousel

    $('.carousel-wrap').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        responsive : {
            0:{
                items : 1
            },
			325:{
				items : 1
            }

        }
    });

    // Sticky Nav

    $(window).scroll(function(){

        var top = $(window).scrollTop();
        if(top>=60){
            $('.header-area').addClass('sticky');
            $('.header-area .logo-div h3').addClass('white');
            $('.bar-icon-div i').addClass('white');
            $('.header-area .menu-div ul li a').addClass('white');
            $('.header-area .menu-div ul li a').addClass('background');
        }else if(top>=0){
            $('.header-area').removeClass('sticky');
            $('.header-area .logo-div h3').removeClass('white');
            $('.bar-icon-div i').removeClass('white');
            $('.header-area .menu-div ul li a').removeClass('white');
            $('.header-area .menu-div ul li a').removeClass('background');
        }

    });

    let $btn = $('.header-area .menu-div ul li a');

    $('.header-area .menu-div ul li a').click(function(e){

        $('.header-area .menu-div ul li a').removeClass('mactive');

        e.target.classList.add('mactive');


    });
});