$(document).ready(function(){

  /** $('.header-area .main-menu ul .blog_li').click(function(){

      $('.header-area .main-menu ul li ul').toggleClass('show_ul');

   });
 */

$(window).scroll(function(){

  var top = $(window).scrollTop();
  if(top>=500){
      $('.header-area .mix-logo').addClass('sticky');
      $('.header-area .main_ul_list').addClass('margin_ul');
      $('.header-area .appointment-div').addClass('margin_a');
  }else if(top>=0){
      $('.header-area .mix-logo').removeClass('sticky');
      $('.header-area .main_ul_list').removeClass('margin_ul');
      $('.header-area .appointment-div').removeClass('margin_a');

  }

});


$('.gallery-wrap').owlCarousel({
  loop:true,
  dots:true,
  autoplay: true,
  autoplayTimeout:2000,
  autoplaySpeed: 1600,
  navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  responsive:{
    0:{
      items:1
    },
    540:{
      items:2
    },
    960:{
      items:3
    }

  }
});


// Go Top 

$(window).scroll(function(){

  var top = $(window).scrollTop();
  if(top>=490){
      $('.footer-area .gotop-div').addClass('show_go');
  }else{
      $('.footer-area .gotop-div').removeClass('show_go');

  }

})

$('.footer-area .gotop-div').click(function(){
  $(window).scrollTop(0);
});

$('.bar-div').click(function(e){

  $('.small-main').slideToggle(400);

});




$('.small-menu ul .blog_li').click(function(){
  $('.small-menu ul li .small_1').slideToggle('small_show');
  $('.small-menu .small_down1').toggleClass('i_rotate');
});

$('.small-menu ul .page_li').click(function(){
  $('.small-menu ul li .small_2').slideToggle('small_show');
  $('.small-menu .small_down2').toggleClass('i_rotate');
});


let $btns = $('.header-area .main-menu ul li a');

$('.header-area .main-menu ul li a').click(function(f){

  $('.header-area .main-menu ul li a').removeClass('menu_a_active');

        f.target.classList.add('menu_a_active');


    });



/////////////////////////////////

});