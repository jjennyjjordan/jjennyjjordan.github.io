$(document).ready(function(){
  $("audio")[0].play();
  setTimeout(function() {
    $(".message").addClass("alarm");
    $(".normal").addClass("alarm");
  }, 6000);

});