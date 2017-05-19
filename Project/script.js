$(document).ready(function(){
  var windowSize = $(this).scrollTop();
  var currHeight = $(this).height();

  $(window).scroll(function(){
    if ($("#prologue").offset().top < ($(this).height()/2 + $(this).scrollTop())) {
      console.log("change");
      $("body").css("background-image", "url(images/castleInterior.jpg)");
    }

  });


});
