$(document).ready(function(){

    // STICKY MENU

    $('.js-work-section').waypoint(function(e){

        if(e=='down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    });

    // price section

    $('.switch-wraper').click(function(){

        $('.switch-1').toggleClass('move')
        $('.price-card-1').toggleClass('price-1-opacity')
        $('.price-card-2').toggleClass('price-2-opacity')
    });

    $('.f-email').click(function(){
        $('.enter').toggleClass('show')
    })

    $('.nav-icon').click(function(){
        
        $('.overly-nav').addClass('open-overly')
    })
    $('.close-icon').click(function(){

        $('.overly-nav').removeClass('open-overly')
    })
    $('.overly-nav .nav-overly-content a').click(function(){

        $('.overly-nav').removeClass('open-overly')
    })




    // isotoope

    let $btns = $ ('.featured-work .button-group button');

    $btns.click(function(e){

        $('.featured-work .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.featured-work .go-isotope').isotope({
            filter : selector
        });

        return false;

    });

    // owl carousel

    $('.carousel-box').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        responsive : {
            0:{
                items : 1
            },
            420:{
                items : 1
            }


        }
    });

    // Acordian //

    $('.my-card-header').click(function(){

        if($(this).next('.card-body').hasClass('active')){
            $(this).next(".card-body").removeClass('active').slideUp()
            $(this).children('i').removeClass('revrotate').addClass('rotate')
        }
        else{
        $('.card .card-body').removeClass('active').slideUp()
        $('.card .my-card-header i').removeClass('revrotate').addClass('rotate');
        $(this).next(".card-body").addClass('active').slideDown()
            $(this).children('i').removeClass('rotate').addClass('revrotate')
        }
    });
    

});