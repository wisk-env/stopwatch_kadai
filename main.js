$(document).ready(function(){
  $(".start-button").click(function(){
    $(this).prop("disabled", true)
    $(".stop-button, .reset-button").prop("disabled", false)
  });
  
  $(".stop-button").click(function(){
    $(".start-button").prop("disabled", false)
    $(this).prop("disabled", true)
  });
  
  $(".reset-button").click(function() {
    $(this).prop("disabled", true)
    $(".start-button").prop("disabled", false)
  })
});

