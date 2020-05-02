$(document).ready(function () {

  var image1 = $("#img1");
  var image2 = $("#img2");
  var image3 = $("#img3");
  var image4 = $("#img4");
  var image5 = $("#img5");
  var image6 = $("#img6");
  var image7 = $("#img7");
  var image8 = $("#img8");


  image1.click(function () {
    image1.toggle();
  });

  image2.click(function () {
    image2.toggle();
  });

  image3.click(function () {
    image3.toggle();
  });

  image4.click(function () {
    image4.toggle();
  });

  image5.click(function () {
    image5.toggle();
  });

  image6.click(function () {
    image6.toggle();
  });

  image7.click(function () {
    image7.toggle();
  });

  image8.click(function () {
    image8.toggle();
  });


  var btn = $("button");

  btn.click(function () {
    image1.show();
    image2.show();
    image3.show();
    image4.show();
    image5.show();
    image6.show();
    image7.show();
    image8.show();

  });



});