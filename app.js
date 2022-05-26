
$(document).ready(function() {

  function generateRandomId(){
      return (Math.random() + 1).toString(36).substring(7);
  }

$(".To-DoButton").click(function(e) {

  e.preventDefault();

  var input = $("#To-Do").val();

    if($('.info-container li').length == 10){
      alert("Warning, you reached your limit, please remove an element to continue!");
    } else{
      if($("#To-Do").val() == ""){
        alert("Enter text!")
      } else{
        if($("#To-Do").val().length >= 30){
          alert("Too many characters, type less in order to continue!")
          $("#To-Do").val('');
        }else{
          $(".info-container").append('<li data-text-id='+ generateRandomId()+'>' + '<input type=checkbox class="form-check-input" id="customControlAutosizing"><span>' + input + "</span><button class='update' data-toggle='modal' data-target='#myModal'><i class='fa fa-pencil-square' aria-hidden='true'></i></button>" + "<button class=bootstraped><i class='fa fa-trash'></i></button>" + "</li>");
        }
      }
    }

})

  $('.info-container').on('click', 'input.form-check-input', function(){
    let current = $(this).parent()

    if($(this).is(":checked")){
        current.find('span').wrap("<strike>");
        current.css('background-color', 'grey')
        // $('.info-container').append(current)
    }else{
        current.css('background-color', '#1c1051')
        current.find('span').unwrap() 
    }
  })

  $('.info-container').on('click', '.bootstraped', function(){
      $(this).parent().remove();
  })

  $('.info-container').on('click', '.update', function(){
    let currentLi = $(this).parent();

    let getAttrId = currentLi.attr('data-text-id');
    
    let findCurrentInfo = $('.info-container').find(`[data-text-id='${getAttrId}']`);

      $('.modal-edit-input').val(findCurrentInfo.text());
    
      $('.save-button').attr("text-id", getAttrId);

    })

    $('.container').on('click', '.save-button', function(){
    let current = $(this);

    let textId = current.attr("text-id");
    
    let currentListElement = $('.info-container').find(`[data-text-id='${textId}']`);
    
      currentListElement.find('span').text($('.modal-edit-input').val()); 

      $('#myModal').modal('hide');
      
    })

  $('#delete').click(function(){
      $("#To-Do").val('');
      $("li").remove();
  })

})