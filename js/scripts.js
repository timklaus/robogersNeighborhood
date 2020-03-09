// this is our back-end stuff


// this is our front-end stuff
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userInput = $ ("input#input").val();
    var inputInteger = parseInt(userInput);
    console.log(userInput);
    console.log(inputInteger)
   if (userInput.includes(3)) {
      console.log("This contains a 3")
      output = "Won't you be my neighbor?"
    } else if (userInput.includes(2)) {
      console.log("This contains a 2")
      output = "Boop!"
    } else if (userInput.includes(1)) {
      console.log("This contains a 1")
      output = "Beep1"
    }


  });
});