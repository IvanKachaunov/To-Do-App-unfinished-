
$(document).ready(function() {

$(".To-DoButton").click(function(e) {

  e.preventDefault();

  var input = $("#To-Do").val();

    if($('.info-container li').length == 10){
      alert("Warning, you reached your limit, please remove an element to continue!");
    } else{
      if($("#To-Do").val() == ""){
        alert("Enter text!")
      } else{
      $(".info-container").append('<li>' + '<input type=checkbox class="checkbox">' + input + '<button id="update"></button>' + '<button id="delete-content"></button>' + '</li>').slideDown(200);
      }
    }

})

  $('.info-container').on('click', 'li', function(){
    $(this).remove();
  })

  $('.info-container').on('click', '#update', function(){
    alert("Can not be edited yet, check out for future updates!");
  })

  $('#delete').click(function(){
    $("#To-Do").val('');
    $("li").remove();
  })

})