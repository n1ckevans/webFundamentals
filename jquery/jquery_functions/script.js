$(document).ready(function (){
  var btn = $("button");


  
  btn.click(function (){

    var currentColor = $(this).css('background-color');
    var header = $("h1");

  
   
   if (currentColor == "rgb(0, 0, 255)") {
    
    $(this).css({backgroundColor: "green", color: "black"});
    header.fadeIn();
    header.append("THIS IS APPENDED!")
    header.attr("alt", "this is a header element")
    header.addClass("this is a header class")

   } else {

    $(this).css({backgroundColor: "blue", color: "white"});
    header.fadeOut();
    alert(header.val(0));
    console.log($("p").text());
   }

   
  });
});