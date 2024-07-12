


//jquery______start
$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $(".scrollTop_btn");

  //(2) Mobile Menu
  mobBtn.on("click",function(){
    BODY.toggleClass("mOpen");
  });

  //(1) scroll-header
  $(window).on("scroll",function(){
    let scroll = $(this).scrollTop();
    // console.log(scroll);
    if(scroll > 60){
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On');
    }
  });

  //(3)Top B
  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });


});
//jquery______end