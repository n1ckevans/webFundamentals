$(document).ready(function () {
  $("img").hover(function () {
    $(this).attr("src", "transworld.png");},
    function() {
      $(this).attr("src", "thrasher.jpg");
    });
  });