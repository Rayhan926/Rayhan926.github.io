$(document).ready(function(){
 
   $(".header-area .main-nav .sub_li").hover(function(){
      $(".sub_ul").slideToggle();
   })
   let fff = $(".header-area .main-nav .header-menu ul li a");
      $(".header-area .main-nav .header-menu ul li a").click(function(e){
         $(".header-area .main-nav .header-menu ul li a").removeClass("nav_active")
         e.target.classList.add("nav_active");
      });
      
      $(".collec_lix").hover(function(){
         $(".collection_sub").slideToggle();
      });

      let bbb = $(".showcase-area .button-group button");
      $(".showcase-area .button-group button").click(function(e){
         $(".showcase-area .button-group button").removeClass("btn_active")
         e.target.classList.add("btn_active");

         let selector = $(e.target).attr('data-filter');
        $('.showcase-area .gallery_row').isotope({
            filter : selector
        });
        return false
      });

      $(window).scroll(function(){

         var top = $(window).scrollTop();
         if(top>=100){
             $('.header-wrap').addClass('sticky');
         }else if(top>=0){
             $('.header-wrap').removeClass('sticky');             
 
         }
 
     });

     $(".bar").click(function(){
        $(".small-nav").slideToggle();
     });

     $(".sml-more").click(function(){
        $(".sml-ul").slideToggle()
        $(".sml-more i").toggleClass("rotate_i");
     });

});