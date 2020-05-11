$(document).ready(function(){

/////////////////////////////////////

   setTimeout(() => {
      $(".loader-wrap").fadeOut(500);
   

      $(".art_switch").click(function(){
         $(".art_switch span").toggleClass("span_change")
         $(".art_switch").toggleClass("bg_switch")
         $(".single_art_pic_wrap").toggleClass("my-d-none")
         $(".sub_art").toggleClass("d-none")
         $(".enable_gallery").toggleClass("d-none")
         $(".long_1").toggleClass("dead")
         $(".long_2").toggleClass("dead")
         
        });
        $(window).scroll(function(){
      
         var top = $(window).scrollTop();
         if(top>=400){
             $('.header-area').addClass('sticky');
         }else{
             $('.header-area').removeClass('sticky');
      
         }
      
      });

      $(".header-area .main-menu .main-ul li").click(function(){
         $(".header-area .main-menu .main-ul li").removeClass("menu_active")
         $(this).addClass("menu_active")
       })
      
       AOS.init();
      
      
       $(".big_shop").hover(function(){
         $(".long_1 .big_shop").toggleClass("opa")
         $(".long_1 .big_shop").toggleClass("scroll_img")
         $(".long_1").toggleClass("show_long_1")
      })
      $(".barbar").hover(function(){
         $(".long_1 .barbar").toggleClass("opa")
         $(".long_1 .barbar").toggleClass("scroll_img")
         $(".long_1").toggleClass("show_long_1")
      })
      $(".unicorn").hover(function(){
         $(".long_1 .unicorn").toggleClass("opa")
         $(".long_1 .unicorn").toggleClass("scroll_img")
         $(".long_1").toggleClass("show_long_1")
      })
      $(".piroll").hover(function(){
        $(".long_1").toggleClass("show_long_1")
        $(".long_1 .piroll").toggleClass("opa")
        $(".long_1 .piroll").toggleClass("scroll_img")
        
      })
      
      // Long 2 Start
      $(".canvas").hover(function(){
        $(".long_2 .canvas").toggleClass("opa")
        $(".long_2 .canvas").toggleClass("scroll_img")
        $(".long_2").toggleClass("show_long_1")
      })
      $(".jhalmuri").hover(function(){
        $(".long_2").toggleClass("show_long_1")
        $(".long_2 .jhalmuri").toggleClass("opa")
        $(".long_2 .jhalmuri").toggleClass("scroll_img")
        
      })
      $(".saymon").hover(function(){
        $(".long_2").toggleClass("show_long_1")
        $(".long_2 .saymon").toggleClass("opa")
        $(".long_2 .saymon").toggleClass("scroll_img")
        
      })
      $(".daily").hover(function(){
        $(".long_2").toggleClass("show_long_1")
        $(".long_2 .daily").toggleClass("opa")
        $(".long_2 .daily").toggleClass("scroll_img")
        
      })
      $(".blogger").hover(function(){
        $(".long_2").toggleClass("show_long_1")
        $(".long_2 .blogger").toggleClass("opa")
        $(".long_2 .blogger").toggleClass("scroll_img")
        
      })
      


      // Isotope

      let $btns = $('.work-area .btn-row .button-group span');

      $btns.click(function(e){
   
         $('.work-area .btn-row .button-group span').removeClass('gallery_active');
          e.target.classList.add('gallery_active');
   
          let selector = $(e.target).attr('data-filter');
          $('.work-area .gallery-img-row').isotope({
              filter : selector
          });
   
          return false;
   
      })

   var typed3 = new Typed('.type', {
      strings: [
      
      "I Am A Web Designer", 
      "I Can Convert PSD To Html For You",
      "I Am A Wordpress Designer",
      "I Can Fix Any Bug In Your Website",
   ],
      typeSpeed: 60,
      backSpeed: 15,
      smartBackspace: true, // this is a default
      loop: true
    });



$('svg.radial-progress').each(function( index, value ) { 
   $(this).find($('circle.complete')).removeAttr( 'style' );
 });



 $(window).scroll(function(){
   $('svg.radial-progress').each(function( index, value ) { 
     // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
     if ( 
         $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
         $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
     ) {
         // Get percentage of progress
         percent = $(value).data('percentage');
         // Get radius of the svg's circle.complete
         radius = $(this).find($('circle.complete')).attr('r');
         // Get circumference (2πr)
         circumference = 2 * Math.PI * radius;
         // Get stroke-dashoffset value based on the percentage of the circumference
         strokeDashOffset = circumference - ((percent * circumference) / 100);
         // Transition progress for 1.25 seconds
         $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
     }
   });
 }).trigger('scroll');


 $('.work-area').waypoint(function(e){

   if(e=='down'){
      $(".work-area .alert-gallery").addClass("show-alert-gallery")
   }
});


$(".work-area .alert-gallery .ex-div span.cross").click(function(){
   $(".work-area .alert-gallery").addClass("hide-alert-gallery")
});

}, 250);

$('.about-area').waypoint(function(e){
      
   if(e=='down'){
      $(".go-top").addClass("show_go")
   }else if(e=='up'){
      $(".go-top").removeClass("show_go")
   }
});

$('.art-area').waypoint(function(e){

   if(e=='down'){
      $(".go-top").addClass("show_go")
   }else if(e=='up'){
      $(".go-top").removeClass("show_go")
   }
});

$(".go-top span").click(function(){
   $(window).scrollTop(0)
});

const menuBtn = document.querySelector('.menu-bars');
let menuOpen = false;

menuBtn.addEventListener('click',function(){

    if(!menuOpen){
        menuBtn.classList.add('openHam');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('openHam');
        menuOpen = false;
    }

});


$(".menu-bars").click(function(){
   $(".mobile-menu").toggleClass("show_mob_menu");
})

let $btns = $(".art-area .art-btn-row .button-group span");

$btns.click(function(e){

    $(".art-area .art-btn-row .button-group span").removeClass("art_gallery_active");
    e.target.classList.add("art_gallery_active");

    let selector = $(e.target).attr('data-filter');

    $(".art-area .def_art_row").isotope({
        filter : selector
    });

    return false

});

$(".art-area .art-btn-row .button-group #btn1").trigger("click");


$('.art-area .def_art_row .test-popup-link').magnificPopup({
    type : "image",
    gallery : {enabled:true}
});

////////////////////////
});