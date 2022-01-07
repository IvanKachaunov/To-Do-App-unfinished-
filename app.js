// $(document).ready(function(){
//     $('#To-Do').on('keyup', function(e){
//         // 13 means other button
//         if(e.keyCode === 13 && $('#To-Do'.val() != ""))
//         {
//             let task = $("div class='todo_list'></div>").text($('#To-Do').val());
//             $("#Selector").append(task);
//         }
//     })

// })

$(document).ready(function() {
    $(".To-DoButton").on("click", function(e) {
      e.preventDefault();
      var input = $("#To-Do").val()
      $("#guests").html(input);
    })
  });