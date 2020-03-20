$(document).ready(function(){
   $(".point-wrap input, .grade-wrap input").prop("disabled", true);

   $("#result_btn").click(function(){
      $(window).scrollTop(1500);
      $(".loader").addClass("show_loader");
      $(".sync-icon i").addClass("sho_sync");
      setTimeout(function(){
         $(".sync-icon i").removeClass("sho_sync");
      },2200)
      
      var ban =  $("#ban").val();
      var eng =  $("#eng").val();
      var math =  $("#math").val();
      var phy =  $("#phy").val();
      var cham =  $("#cham").val();
      var bio =  $("#bio").val();
      var ict =  $("#ict").val();
      var rel =  $("#rel").val();
      setTimeout(function(){
      if(ban>=101 || eng>=101*1 || math>=101*1 || phy>=101*1 || cham>=101*1 || bio>=101*1 || ict>=101*1 || rel>=101*1){
         $(".warning").html("<span>Number should be 100 or less than 100</span>");
         $("#congar, #out_of, #gotmark, #parcent, #grade, #point, #pass_fail").html('""');
         setTimeout(function(){
            $(".warning span").html(" ");
         },3500)
         setTimeout(function(){
            $(".loader").removeClass("show_loader");
         },200)
      }else{
      
         // BANGLA START
      setTimeout(function(){
         
         $(".loader").removeClass("show_loader");
         
         var na = "";
         if(ban!=na){
            $("#ban-point").addClass("tra_bg");
            if(ban>=80){
               $("#ban-point").attr('value','5.00');
               $("#ban-point").removeClass("bg_red");
            }else if(ban>=70){
               $("#ban-point").attr('value','4.00');
               $("#ban-point").removeClass("bg_red");
            }else if(ban>=60){
               $("#ban-point").attr('value','3.50');
               $("#ban-point").removeClass("bg_red");
            }else if(ban>=50){
               $("#ban-point").attr('value','3.00');
               $("#ban-point").removeClass("bg_red");
            }else if(ban>=40){
               $("#ban-point").attr('value','2.50');
               $("#ban-point").removeClass("bg_red");
            }else if(ban>=33){
               $("#ban-point").attr('value','2.00');
               $("#ban-point").removeClass("bg_red");
            }else if(ban<33){
               $("#ban-point").attr('value','0.00');
               $("#ban-point").addClass("bg_red");
            }
         }else{
         
            $("#ban-point").addClass("red_bg");
            
         }

         if(ban!=na){
            $("#ban-grade").addClass("tra_bg");
            $("#ban-grade").removeClass("bg_red");
            if(ban>=80){
               $("#ban-grade").attr('value','A+');
               $("#ban-grade").removeClass("bg_red");
            }else if(ban>=70){
               $("#ban-grade").attr('value','A');
               $("#ban-grade").removeClass("bg_red");
            }else if(ban>=60){
               $("#ban-grade").attr('value','A-');
               $("#ban-grade").removeClass("bg_red");
            }else if(ban>=50){
               $("#ban-grade").attr('value','B');
               $("#ban-grade").removeClass("bg_red");
            }else if(ban>=40){
               $("#ban-grade").attr('value','C');
               $("#ban-grade").removeClass("bg_red");
            }else if(ban>=33){
               $("#ban-grade").attr('value','D');
               $("#ban-grade").removeClass("bg_red");
            }else if(ban<33){
               $("#ban-grade").attr('value','F');
               $("#ban-grade").addClass("bg_red");
            }
         }else{
            $("#ban-grade").attr('value','Put a Value');
            $("#ban-grade").addClass("red_bg");
         }
      },800)
      // BANFGLA END

      
      

      setTimeout(function(){
         //ENGLISH START
         var na = "";
         if(eng!=na){
            $("#eng-point").addClass("tra_bg");
            if(eng>=80){
               $("#eng-point").attr('value','5.00');
               $("#eng-point").removeClass("bg_red");
            }else if(eng>=70){
               $("#eng-point").attr('value','4.00');
               $("#eng-point").removeClass("bg_red");
            }else if(eng>=60){
               $("#eng-point").attr('value','3.50');
               $("#eng-point").removeClass("bg_red");
            }else if(eng>=50){
               $("#eng-point").attr('value','3.00');
               $("#eng-point").removeClass("bg_red");
            }else if(eng>=40){
               $("#eng-point").attr('value','2.50');
               $("#eng-point").removeClass("bg_red");
            }else if(eng>=33){
               $("#eng-point").attr('value','2.00');
               $("#eng-point").removeClass("bg_red");
            }else if(eng<33){
               $("#eng-point").attr('value','0.00');
               $("#eng-point").addClass("bg_red");
               
            }
         }else{
         
            $("#eng-point").addClass("red_bg");
            
         }
      

         if(eng!= na){
            $("#eng-grade").addClass("tra_bg");
            $("#eng-grade").removeClass("bg_red");
            if(eng>=80){
               $("#eng-grade").attr('value','A+');
               $("#eng-grade").removeClass("bg_red");
            }else if(eng>=70){
               $("#eng-grade").attr('value','A');
               $("#eng-grade").removeClass("bg_red");
            }else if(eng>=60){
               $("#eng-grade").attr('value','A-');
               $("#eng-grade").removeClass("bg_red");
            }else if(eng>=50){
               $("#eng-grade").attr('value','B');
               $("#eng-grade").removeClass("bg_red");
            }else if(eng>=40){
               $("#eng-grade").attr('value','C');
               $("#eng-grade").removeClass("bg_red");
            }else if(eng>=33){
               $("#eng-grade").attr('value','D');
               $("#eng-grade").removeClass("bg_red");
            }else if(eng<33){
               $("#eng-grade").attr('value','F');
               $("#eng-grade").addClass("bg_red");
            }
         }else{
            $("#eng-grade").attr('value','Put a Value');
            $("#eng-grade").addClass("red_bg");
         }
      //ENGLISH END

      },800)


      setTimeout(function(){
         //MATH START
         var na = "";
         if(math!=na){
            $("#math-point").addClass("tra_bg");
            $("#math-point").removeClass("bg_red")
            if(math>=80){
               $("#math-point").attr('value','5.00');
               $("#math-point").removeClass("bg_red")
            }else if(math>=70){
               $("#math-point").attr('value','4.00');
               $("#math-point").removeClass("bg_red")
            }else if(math>=60){
               $("#math-point").attr('value','3.50');
               $("#math-point").removeClass("bg_red")
            }else if(math>=50){
               $("#math-point").attr('value','3.00');
               $("#math-point").removeClass("bg_red")
            }else if(math>=40){
               $("#math-point").attr('value','2.50');
               $("#math-point").removeClass("bg_red")
            }else if(math>=33){
               $("#math-point").attr('value','2.00');
               $("#math-point").removeClass("bg_red")
            }else if(math<33){
               $("#math-point").attr('value','0.00');
               $("#math-point").addClass("bg_red")
            }
         }else{
         
            $("#math-point").addClass("red_bg");
         }
      

         if(math!= na){
            $("#math-grade").addClass("tra_bg");
            $("#math-grade").removeClass("bg_red")
            if(math>=80){
               $("#math-grade").attr('value','A+');
               $("#math-grade").removeClass("bg_red")
            }else if(math>=70){
               $("#math-grade").attr('value','A');
               $("#math-grade").removeClass("bg_red")
            }else if(math>=60){
               $("#math-grade").attr('value','A-');
               $("#math-grade").removeClass("bg_red")
            }else if(math>=50){
               $("#math-grade").attr('value','B');
               $("#math-grade").removeClass("bg_red")
            }else if(math>=40){
               $("#math-grade").attr('value','C');
               $("#math-grade").removeClass("bg_red")
            }else if(math>=33){
               $("#math-grade").attr('value','D');
               $("#math-grade").removeClass("bg_red")
            }else if(math<33){
               $("#math-grade").attr('value','F');
               $("#math-grade").addClass("bg_red")
            }
         }else{
            $("#math-grade").attr('value','Put a Value');
            $("#math-grade").addClass("red_bg");
         }
      //MATH END

      },800)


      setTimeout(function(){
         //PHYSICS START
         var na = "";
         if(phy!=na){
            $("#phy-point").addClass("tra_bg")
            if(phy>=80){
               $("#phy-point").attr('value','5.00');
               $("#phy-point").removeClass("bg_red")
            }else if(phy>=70){
               $("#phy-point").attr('value','4.00');
               $("#phy-point").removeClass("bg_red")
            }else if(phy>=60){
               $("#phy-point").attr('value','3.50');
               $("#phy-point").removeClass("bg_red")
            }else if(phy>=50){
               $("#phy-point").attr('value','3.00');
               $("#phy-point").removeClass("bg_red")
            }else if(phy>=40){
               $("#phy-point").attr('value','2.50');
               $("#phy-point").removeClass("bg_red")
            }else if(phy>=33){
               $("#phy-point").attr('value','2.00');
               $("#phy-point").removeClass("bg_red")
            }else if(phy<33){
               $("#phy-point").attr('value','0.00');
               $("#phy-point").addClass("bg_red")
            }
         }else{
            
            $("#phy-point").addClass("red_bg");
         }
      

         if(phy!= na){
            $("#phy-grade").addClass("tra_bg");
            
            if(phy>=80){
               $("#phy-grade").removeClass("bg_red");
               $("#phy-grade").attr('value','A+');
            }else if(phy>=70){
               $("#phy-grade").attr('value','A');
               $("#phy-grade").removeClass("bg_red");
            }else if(phy>=60){
               $("#phy-grade").attr('value','A-');
               $("#phy-grade").removeClass("bg_red");
            }else if(phy>=50){
               $("#phy-grade").attr('value','B');
               $("#phy-grade").removeClass("bg_red");
            }else if(phy>=40){
               $("#phy-grade").attr('value','C');
               $("#phy-grade").removeClass("bg_red");
            }else if(phy>=33){
               $("#phy-grade").attr('value','D');
               $("#phy-grade").removeClass("bg_red");
            }else if(phy<33){
               $("#phy-grade").attr('value','F');
               $("#phy-grade").addClass("bg_red");
            }
         }else{
            $("#phy-grade").attr('value','Put a Value');
            $("#phy-grade").addClass("red_bg");
         }
      //PHYSICS END

      },800)


      setTimeout(function(){
         //CHAMESTRY START
         var na = "";
         if(cham!=na){
            $("#cham-point").addClass("tra_bg");
            if(cham>=80){
               $("#cham-point").removeClass("bg_red");
               $("#cham-point").attr('value','5.00');
            }else if(cham>=70){
               $("#cham-point").attr('value','4.00');
               $("#cham-point").removeClass("bg_red");
            }else if(cham>=60){
               $("#cham-point").attr('value','3.50');
               $("#cham-point").removeClass("bg_red");
            }else if(cham>=50){
               $("#cham-point").attr('value','3.00');
               $("#cham-point").removeClass("bg_red");
            }else if(cham>=40){
               $("#cham-point").attr('value','2.50');
               $("#cham-point").removeClass("bg_red");
            }else if(cham>=33){
               $("#cham-point").attr('value','2.00');
               $("#cham-point").removeClass("bg_red");
            }else if(cham<33){
               $("#cham-point").attr('value','0.00');
               $("#cham-point").addClass("bg_red");
            }
         }else{
            
            $("#cham-point").addClass("red_bg");
         }
      

         if(cham!= na){
            $("#cham-grade").addClass("tra_bg");
            if(cham>=80){
               $("#cham-grade").removeClass("bg_red");
               $("#cham-grade").attr('value','A+');
            }else if(cham>=70){
               $("#cham-grade").attr('value','A');
               $("#cham-grade").removeClass("bg_red");
            }else if(cham>=60){
               $("#cham-grade").attr('value','A-');
               $("#cham-grade").removeClass("bg_red");
            }else if(cham>=50){
               $("#cham-grade").attr('value','B');
               $("#cham-grade").removeClass("bg_red");
            }else if(cham>=40){
               $("#cham-grade").attr('value','C');
               $("#cham-grade").removeClass("bg_red");
            }else if(cham>=33){
               $("#cham-grade").attr('value','D');
               $("#cham-grade").removeClass("bg_red");
            }else if(cham<33){
               $("#cham-grade").attr('value','F');
               $("#cham-grade").addClass("bg_red");
            }
         }else{
            $("#cham-grade").attr('value','Put a Value');
            $("#cham-grade").addClass("red_bg");
         }
      //CHAMESTRY END

      },800)

      setTimeout(function(){
         //BIOLOGY START
         var na = "";
         if(bio!=na){
            $("#bio-point").addClass("tra_bg");
            if(bio>=80){
               $("#bio-point").removeClass("bg_red");
               $("#bio-point").attr('value','5.00');
            }else if(bio>=70){
               $("#bio-point").attr('value','4.00');
               $("#bio-point").removeClass("bg_red");
            }else if(bio>=60){
               $("#bio-point").attr('value','3.50');
               $("#bio-point").removeClass("bg_red");
            }else if(bio>=50){
               $("#bio-point").attr('value','3.00');
               $("#bio-point").removeClass("bg_red");
            }else if(bio>=40){
               $("#bio-point").attr('value','2.50');
               $("#bio-point").removeClass("bg_red");
            }else if(bio>=33){
               $("#bio-point").attr('value','2.00');
               $("#bio-point").removeClass("bg_red");
            }else if(bio<33){
               $("#bio-point").attr('value','0.00');
               $("#bio-point").addClass("bg_red");
            }
         }else{
            $("#bio-point").addClass("red_bg");
         }
      

         if(bio!= na){
            $("#bio-grade").addClass("tra_bg");
            if(bio>=80){
               $("#bio-grade").removeClass("bg_red");
               $("#bio-grade").attr('value','A+');
            }else if(bio>=70){
               $("#bio-grade").attr('value','A');
               $("#bio-grade").removeClass("bg_red");
            }else if(bio>=60){
               $("#bio-grade").attr('value','A-');
               $("#bio-grade").removeClass("bg_red");
            }else if(bio>=50){
               $("#bio-grade").attr('value','B');
               $("#bio-grade").removeClass("bg_red");
            }else if(bio>=40){
               $("#bio-grade").attr('value','C');
               $("#bio-grade").removeClass("bg_red");
            }else if(bio>=33){
               $("#bio-grade").attr('value','D');
               $("#bio-grade").removeClass("bg_red");
            }else if(bio<33){
               $("#bio-grade").attr('value','F');
               $("#bio-grade").addClass("bg_red");
            }
         }else{
            $("#bio-grade").attr('value','Put a Value');
            $("#bio-grade").addClass("red_bg");
         }
      //BIOLOGY END

      },800)


      setTimeout(function(){
         //I.C.T START
         var na = "";
         if(ict!=na){
            $("#ict-point").addClass("tra_bg");
            if(ict>=80){
               $("#ict-point").removeClass("bg_red");
               $("#ict-point").attr('value','5.00');
            }else if(ict>=70){
               $("#ict-point").attr('value','4.00');
               $("#ict-point").removeClass("bg_red");
            }else if(ict>=60){
               $("#ict-point").attr('value','3.50');
               $("#ict-point").removeClass("bg_red");
            }else if(ict>=50){
               $("#ict-point").attr('value','3.00');
               $("#ict-point").removeClass("bg_red");
            }else if(ict>=40){
               $("#ict-point").attr('value','2.50');
               $("#ict-point").removeClass("bg_red");
            }else if(ict>=33){
               $("#ict-point").attr('value','2.00');
               $("#ict-point").removeClass("bg_red");
            }else if(ict<33){
               $("#ict-point").attr('value','0.00');
               $("#ict-point").addClass("bg_red");
            }
         }else{
            $("#ict-point").addClass("red_bg");
         }
      

         if(ict!= na){
            $("#ict-grade").addClass("tra_bg");
            if(ict>=80){
               $("#ict-grade").removeClass("bg_red");
               $("#ict-grade").attr('value','A+');
            }else if(ict>=70){
               $("#ict-grade").attr('value','A');
               $("#ict-grade").removeClass("bg_red");
            }else if(ict>=60){
               $("#ict-grade").attr('value','A-');
               $("#ict-grade").removeClass("bg_red");
            }else if(ict>=50){
               $("#ict-grade").attr('value','B');
               $("#ict-grade").removeClass("bg_red");
            }else if(ict>=40){
               $("#ict-grade").attr('value','C');
               $("#ict-grade").removeClass("bg_red");
            }else if(ict>=33){
               $("#ict-grade").attr('value','D');
               $("#ict-grade").removeClass("bg_red");
            }else if(ict<33){
               $("#ict-grade").attr('value','F');
               $("#ict-grade").addClass("bg_red");
            }
         }else{
            $("#ict-grade").attr('value','Put a Value');
            $("#ict-grade").addClass("red_bg");
         }
      //I.C.T END

      },800)


      setTimeout(function(){
         //BIOLOGY START
         var na = "";
         if(rel!=na){
            $("#rel-point").addClass("tra_bg");
            if(rel>=80){
               $("#rel-point").removeClass("bg_red");
               $("#rel-point").attr('value','5.00');
            }else if(rel>=70){
               $("#rel-point").attr('value','4.00');
               $("#rel-point").removeClass("bg_red");
            }else if(rel>=60){
               $("#rel-point").attr('value','3.50');
               $("#rel-point").removeClass("bg_red");
            }else if(rel>=50){
               $("#rel-point").attr('value','3.00');
               $("#rel-point").removeClass("bg_red");
            }else if(rel>=40){
               $("#rel-point").attr('value','2.50');
               $("#rel-point").removeClass("bg_red");
            }else if(rel>=33){
               $("#rel-point").attr('value','2.00');
               $("#rel-point").removeClass("bg_red");
            }else if(rel<33){
               $("#rel-point").attr('value','0.00');
               $("#rel-point").addClass("bg_red");
            }
         }else{
            $("#rel-point").addClass("red_bg");
         }
      

         if(rel!= na){
            $("#rel-grade").addClass("tra_bg");
            if(rel>=80){
               $("#rel-grade").attr('value','A+');
               $("#rel-grade").removeClass("bg_red");
            }else if(rel>=70){
               $("#rel-grade").attr('value','A');
               $("#rel-grade").removeClass("bg_red");
            }else if(rel>=60){
               $("#rel-grade").attr('value','A-');
               $("#rel-grade").removeClass("bg_red");
            }else if(rel>=50){
               $("#rel-grade").attr('value','B');
               $("#rel-grade").removeClass("bg_red");
            }else if(rel>=40){
               $("#rel-grade").attr('value','C');
               $("#rel-grade").removeClass("bg_red");
            }else if(rel>=33){
               $("#rel-grade").attr('value','D');
               $("#rel-grade").removeClass("bg_red");
            }else if(rel<33){
               $("#rel-grade").attr('value','F');
               $("#rel-grade").addClass("bg_red");
            }
         }else{
            $("#rel-grade").attr('value','Put a Value');
            $("#rel-grade").addClass("red_bg");
         }
      //RELIGION END

      },800)

      

      setTimeout(function(){
         
         var final_ban =  $("#ban-point").val();
         var final_eng =  $("#eng-point").val();
         var final_math = $("#math-point").val();
         var final_phy =  $("#phy-point").val();
         var final_cham =  $("#cham-point").val();
         var final_bio =  $("#bio-point").val();
         var final_ict =  $("#ict-point").val();
         var final_rel =  $("#rel-point").val();

         if (final_ban<2 || final_eng<2 || final_math<2 || final_phy<2 || final_cham<2 || final_bio<2 || final_ict<2 || final_rel<2) {
            $("#congar").html("GOOD LUCK FOR NEXT TIME!!")
            $("#congar").addClass("red_color")
            /**$("#extra").html("BUT") */
            /**$("#pass_fail").addClass("red_color") */
            $("#pass_fail").html("<span style='color:red'>FAIL</span>")  
         }else{
            $("#congar").html("Congratulation")
            $("#congar").removeClass("red_color")
            $("#congar").addClass("color")
            $("#extra").html("")
            $("#pass_fail").html("PASS")
            $("#pass_fail").addClass("color")
            
         }

         var nul = "";
         if (final_ban!= nul) {
            var count_ban = 1;
            /**if(final_ban<=2){
               $("#congar").html("Sorry")
               $("#congar").addClass("red_color")
               $("#extra").html("BUT")
               $("#pass_fail").html("FAIL")
               $("#pass_fail").addClass("red_color")
            }else{
               $("#congar").html("Congratulation")
               $("#congar").removeClass("red_color")
               $("#congar").addClass("color")
               $("#extra").html("")
               $("#pass_fail").html("PASS")
               $("#pass_fail").removeClass("red_color")
               $("#pass_fail").addClass("color")

            } */
         }else{
            var count_ban = 0;
               
         }
         
         var nul = "";
         if (final_eng!= nul) {
            var countt_eng = 1;
            /**if(final_eng<=2){
               $("#congar").html("Sorry")
               $("#congar").addClass("red_color")
               $("#extra").html("BUT")
               $("#pass_fail").html("FAIL")
               $("#pass_fail").removeClass("color")
               $("#pass_fail").addClass("red_color")
            }else{
               $("#congar").html("Congratulation")
               $("#congar").removeClass("red_color")
               $("#congar").addClass("color")
               $("#extra").html("")
               $("#pass_fail").html("PASS")
               $("#pass_fail").removeClass("red_color")
               $("#pass_fail").addClass("color")

            } */
         }else{
            var countt_eng = 0;
         }

         var nul = "";
         if (final_math!= nul) {
            var countt_math = 1;
         }else{
            var countt_math = 0;
         }

         var nul = "";
         if (final_phy!= nul) {
            var countt_phy = 1;
         }else{
            var countt_phy = 0;
         }

         var nul = "";
         if (final_cham!= nul) {
            var countt_cham = 1;
         }else{
            var countt_cham = 0;
         }

         var nul = "";
         if (final_bio!= nul) {
            var countt_bio = 1;
         }else{
            var countt_bio = 0;
         }

         var nul = "";
         if (final_ict!= nul) {
            var countt_ict = 1;
         }else{
            var countt_ict = 0;
         }

         var nul = "";
         if (final_rel!= nul) {
            var countt_rel = 1;
         }else{
            var countt_rel = 0;
         }
         ///////////////////////////

         var khali = ""
         if(ban!=khali){
            var bann = 100;
            var bann_par = 1;
         }else{
            var bann = 0;
            var bann_par = 0;
         }
         var khali = ""
         if(eng!=khali){
            var engg = 100;
            var engg_par = 1;
         }else{
            var engg = 0;
            var engg_par = 0;
         }
         var khali = ""
         if(math!=khali){
            var mathh = 100;
            var mathh_par = 1;
         }else{
            var mathh = 0;
            var mathh_par = 0;
         }
         var khali = ""
         if(phy!=khali){
            var phyy = 100;
            var phyy_par = 1;
         }else{
            var phyy = 0;
            var phyy_par = 0;
         }
         var khali = ""
         if(cham!=khali){
            var chamm = 100;
            var chamm_par = 1;
         }else{
            var chamm = 0;
            var chamm_par = 0;
         }
         var khali = ""
         if(bio!=khali){
            var bioo = 100;
            var bioo_par = 1;
         }else{
            var bioo = 0;
            var bioo_par = 0;
         }
         var khali = ""
         if(ict!=khali){
            var ictt = 100;
            var ictt_par = 1;
         }else{
            var ictt = 0;
            var ictt_par = 0;
         }
         var khali = ""
         if(rel!=khali){
            var rell = 100;
            var rell_par = 1;
         }else{
            var rell = 0;
            var rell_par = 0;
         }

         var addYourtotalMark = (bann*1+engg*1+mathh*1+phyy*1+chamm*1+bioo*1+ictt*1+rell*1);
         var addYourparcentage = (bann_par*1+engg_par*1+mathh_par*1+phyy_par*1+chamm_par*1+bioo_par*1+ictt_par*1+rell_par*1);

         $("#out_of").html(addYourtotalMark);

         


         
         

         var totalgotNumberOutOf = (ban*1+eng*1+math*1+phy*1+cham*1+bio*1+ict*1+rel*1)
         $("#gotmark").html(totalgotNumberOutOf);

         var getParcent = (totalgotNumberOutOf/addYourparcentage);
            if (getParcent>0) {
               $("#parcent").html(getParcent+"%");
            }else{
               $("#parcent").html(0+"%");
            }

         

         var addPoint =(final_ban*1+final_eng*1+final_math*1+final_phy*1+final_cham*1+final_bio*1+final_ict*1+final_rel*1);

         var getSubNumber = (count_ban+countt_eng+countt_math+countt_phy+countt_cham+countt_bio+countt_ict+countt_rel)

         var realPoint = (addPoint/getSubNumber);

         if (realPoint!=5) {
            $("#point").html(realPoint);
         }else{
            $("#point").html(realPoint+".00")
         }
         
         if(realPoint>=5){
            $("#grade").html("A+")
            /**$("#pass_fail").html("PASS"); */
            $("#pass_fail").removeClass("red_color");
            /**$("#pass_fail").addClass("color"); */
         }else if(realPoint>=4.00){
            $("#grade").html("A");
            /**$("#pass_fail").html("PASS"); */
            $("#pass_fail").removeClass("red_color");
            /**$("#pass_fail").addClass("color"); */
         }else if(realPoint>=3.50){
            $("#grade").html("A-");
            /**$("#pass_fail").html("PASS"); */
            $("#pass_fail").removeClass("red_color");
            /**$("#pass_fail").addClass("color"); */
         }else if(realPoint>=3.00){
            $("#grade").html("B");
            /**$("#pass_fail").html("PASS"); */
            $("#pass_fail").removeClass("red_color");
            /**$("#pass_fail").addClass("color"); */
         }else if(realPoint>=2.50){
            $("#grade").html("C");
            /**$("#pass_fail").html("PASS"); */
            $("#pass_fail").removeClass("red_color");
            /**$("#pass_fail").addClass("color"); */
         }else if(realPoint>=2.00){
            $("#grade").html("D");
            /**$("#pass_fail").html("PASS"); */
            $("#pass_fail").removeClass("red_color");
            /**$("#pass_fail").addClass("color"); */
         }else if (realPoint<2.00) {
            $("#grade").html("F")
            $("#pass_fail").html("FAIL");
            $("#pass_fail").addClass("red_color");
            $("#pass_fail").removeClass("color");
            
         }
         
         
      },1000)}
      },1500)
      
      $(".reset_btn").click(function(){
         
         location.reload(true);
      });

      



   });




/////////////////////////////
});