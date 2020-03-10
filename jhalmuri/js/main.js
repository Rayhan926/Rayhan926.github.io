$(document).ready(function(){


    // Avtive Menu

    
    let $btn = $('.header-area .main-menu ul li a');

    $('.header-area .main-menu ul li a').click(function(e){

        $('.header-area .main-menu ul li a').removeClass('mactive');

        e.target.classList.add('mactive');


    });
	
	
	let $btns = $('.header-area .hamburger-content a');

    $('.header-area .hamburger-content a').click(function(f){

        $('.header-area .hamburger-content a').removeClass('mactive');

        f.target.classList.add('mactive');


    });

    $('.seacrh-n').click(function(){

        $('.inp-li input').toggleClass('down');

    });




    $(window).scroll(function(){

        var top = $(window).scrollTop();
        if(top>=100){
            $('.header-area nav').addClass('sticky');
            $('.header-area .main-menu ul').addClass('ul_margin');
        }else if(top>=0){
            $('.header-area nav').removeClass('sticky');
            $('.header-area .main-menu ul').removeClass('ul_margin');

        }

    });





setTimeout(function(){

   $('.portfolio-area .big-gallery-wrapper .gallery-wrap').mouseover(function(){

      $('.plus').addClass('spin');
   
   })


},1000);


// Owl carousel 

$('.carousel-1').owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:5000,
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


$('.carousel-2').owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:1000,
   dots:false,
   autoplaySpeed:800,
   responsive: {
      0 :{
          items:1
      },
      320 : {
          items: 2
      },
      560 : {
          items : 3
      },
      800:{
          items:4
      }
  }
});
   
$('.hamburger-icon').click(function(){

    $('.hamburger-menu .hamburger-content').toggleClass('show_ham');
   
});





});


// Javascript 

const menuBtn = document.querySelector('.hamburger-icon');
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

