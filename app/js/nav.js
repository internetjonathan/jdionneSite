$(document).ready(function(){
var button = "#text1";
  $("#header").click(function(){
    $(button).html('<span class="letter1">J</span><span class="letter2">O</span><span class="letter3">N</span><span class="letter4">A</span><span class="letter5">T</span><span class="letter6">H</span><span class="letter7">A</span><span class="letter8">N</span>');
    $(button).css("margin-top", "20px");
    $(".content-container").slideDown(1850);
    $("html").css('min-height', '800px');
  });
});
