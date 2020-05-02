$(document).ready(function () {

var img1 = $("#img1");
var img2 = $("#img2");
var img3 = $("#img3");
var img4 = $("#img4");
var img5 = $("#img5");

img1.click(function () {
  if (img1.attr("src") == "cat0.png"){
    img1.attr("src", "ninja0.png");
  } else {
    img1.attr("src", "cat0.png");
  }
});

img2.click(function () {
  if (img2.attr("src") == "cat1.png"){
    img2.attr("src", "ninja1.png");
  } else {
    img2.attr("src", "cat1.png");
  }
});

img3.click(function () {
  if (img3.attr("src") == "cat2.png"){
    img3.attr("src", "ninja2.png");
  } else {
    img3.attr("src", "cat2.png");
  }
});

img4.click(function () {
  if (img4.attr("src") == "cat3.png"){
    img4.attr("src", "ninja3.png");
  } else {
    img4.attr("src", "cat3.png");
  }
});

img5.click(function () {
  if (img5.attr("src") == "cat4.png"){
    img5.attr("src", "ninja4.png");
  } else {
    img5.attr("src", "cat4.png");
  }
});

});