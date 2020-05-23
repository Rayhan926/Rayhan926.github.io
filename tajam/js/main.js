$(document).ready(function(){
    
    // Hero Section Owl Carousel /////
    $('.all_slider_wrap').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 1300,
        dots:true,
        responsive:{
            0:{
                items: 1
            },
        }
    });
    // Testimonial Owl Carousel /////
    $('.all_testimonail_wrap').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 1300,
        dots:true,
        responsive:{
            0:{
                items: 1
            },
        }
    });

    $('.owl-nav-prev').click(function () {
        owl.trigger('.owl.carousel', [$(this).index(), 300]);
      });

    // For Pop up Video
    $(".video_a").click(function(){
        $(".video_shower").fadeIn()
    })
    $(".close_video").click(function(){
        $(".video_shower").fadeOut()
        $("#main_video")[0].pause()
    })

    $(".main_ul li a").click(function(){
        $(".main_ul li a").removeClass("active_menu")
        $(this).addClass("active_menu")
    })
    $(".mobile_ul li a").click(function(){
        $(".mobile_ul li a").removeClass("active_mobile_menu")
        $(this).addClass("active_mobile_menu")
    })

    // For Fixed Nav Bar

    $(window).scroll(function(){
        var scroll_top = $(window).scrollTop();
        if (scroll_top>=500) {
            $('.header_area').addClass("fixed_nav")
        }else if (scroll_top<100){
            $('.header_area').removeClass("fixed_nav")
        }
    })

    // For magnific popup 

    $('.test-popup-link').magnificPopup({
        type : 'image',
        gallery:{enabled:true}
    })

    // Scroll Top
    $(".go_top").click(function(){
        $(window).scrollTop(0)
    })

    // For Hamburger Menu

    const menuBtn = document.querySelector('.ham_wrap');
    let menuOpen = false;

    menuBtn.addEventListener('click',function(){
        $(".mobile_nav").slideToggle(200);
        if(!menuOpen){
            menuBtn.classList.add('openHam');
            menuOpen = true;
        }else{
            menuBtn.classList.remove('openHam');
            menuOpen = false;
        }

    });
    

})