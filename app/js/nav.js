var button = "#text1"
$("#header").click(function(){
  $(button).html('<h1 class="headtext" id="text2"><span class="letter1">J</span><span class="letter2">O</span><span class="letter3">N</span><span class="letter4">A</span><span class="letter5">T</span><span class="letter6">H</span><span class="letter7">A</span><span class="letter8">N</span></h1>');
  $(button).css("margin-top", "20px");
  $(".content-container").slideDown(1850);
});
