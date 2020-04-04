$(document).ready(function(){

$('.carousel_2').owlCarousel({

   loop:true,
   autoplay:true,
   autoplayTimeout:2000,
   dots:true,
   nav:false,
   responsive : {
      0:{
          items : 1
      },
      360:{
          items : 2
      },
      425:{
          items : 3
      },
      960:{
          items : 5
      },1024:{
         items : 6
      }
   }
});


$('.carousel_3').owlCarousel({

    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:true,
    nav:false,
    responsive : {
       0:{
           items : 1
       },
       360:{
           items : 1
       },
       425:{
           items : 2
       },
       960:{
           items : 3
       },
       1024:{
          items : 4
       }
    }
 });


$('.port-area .gallery-div .test-popup-link').magnificPopup({
    type : 'image',
    gallery:{enabled:true}
})

$(window).scroll(function(){

    var top = $(window).scrollTop();
    if(top>=300){
        $('.side-icon').addClass('show_go');
    }else{
        $('.side-icon').removeClass('show_go');
  
    }
  
  })


});