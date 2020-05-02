$(document).ready(function () {
  $("button").hover(function (e) {
    $("#container").css('background-image', 'url("' + e.target.id + '.jpg")');
});
  $(document).on('click', 'button', function(f){
    $('button').unbind('mouseenter mouseleave');
    $("#container").css('background-image', 'url("' + f.target.id + '.jpg")');
    $('h1').text('Select Player');
    $('button').hide();
    $('#select').append(`
    <select id="select1">
    <option disabled selected value> Select Ninja </option>
    <option value ="donny" id= "donny" > Donny </option>
    <option value ="mikey" id= "mikey"  > Mikey </option>
    <option value ="leo" id= "leo" > Leo </option>
    <option value ="raphael" id="raphael" > Raphael </option>
    </select> 
    <select id="select2">    
    <option disabled selected value> Select Ninja </option>
    <option value ="donny" id= "donny" > Donny </option>
    <option value ="mikey" id= "mikey"  > Mikey </option>
    <option value ="leo" id= "leo" > Leo </option>
    <option value ="raphael" id="raphael" > Raphael </option>
    </select>`
    )
  });


    $(document).on('change', '#select1', function(){
      let named = $("#select1 option:selected").val();

      $("#player1").css('background-image', 'url("' + named + '.png")');

  });

  $(document).on('change', '#select2', function(){
    let named = $("#select2 option:selected").val();
    
          $("#player2").css('background-image', 'url("' + named + '.png")');
    
      });


});