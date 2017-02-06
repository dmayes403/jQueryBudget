$(document).ready(function(){
    $('#submit').click(function(){
      var currentValue = $('#budgetCat').val();
      console.log(currentValue);
      $('.firstHeader').text(currentValue);
      $('.runningTotal').text("Current Total is " + $('#budgetSubtract').val())
    })




})
