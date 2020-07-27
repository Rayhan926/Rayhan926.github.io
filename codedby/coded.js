var coded_fixed = setTimeout(() => {

  $("body").append(' <div class="coded_fixed_wrap"> <div class="close_coded_by"> <span>&#10005;</span> </div><div class="coded_by_wrap"> <div class="coded_by_box"> <div class="author_main_box"> <div class="author_img"> <img src="rayhan926.github.io/codedby/me.png" alt=""> </div><span class="coded_author_name">Coded by Saymon</span> <span class="author_title">Web Designer & Developer</span> </div><div class="find_me_div"> <div class="single_find_me_box"> <div class="user_id_box"> <span class="usr_id">User : saymon_35</span> <p>Get any Web service with an adorable price. With unlimited revision. My services: <span>Wordpress Website, Landing Page, Website Speed Optimization, Psd to Html, Bug fixing.</span></p></div><a href="#"> <div class="find_me_icon"> <img src="rayhan926.github.io/codedby/fiverr.png" alt=""> </div><div class="find_me_text"> <span>Find me on Fiverr</span> </div></a> </div></div></div></div></div>')

  setTimeout(() => {
    $(".coded_fixed_wrap").addClass("show_dialog")
  }, 3000);

  $(".close_coded_by").click( () => {
    clearInterval(coded_fixed)
    $(".coded_fixed_wrap").removeClass("show_dialog")
  })
  
}, 2000);
