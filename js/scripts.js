// this is our back-end stuff
outputArray = "Test Value"

// this is our front-end stuff
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userInput = $ ("input#input").val();
    console.log(userInput);
   if (userInput.includes(3)) {
      console.log("This contains a 3")
      output = "Won't you be my neighbor?"
    } else if (userInput.includes(2)) {
      console.log("This contains a 2")
      output = "Boop!"
    } else if (userInput.includes(1)) {
      console.log("This contains a 1")
      output = "Beep!"
    } else {
      output = outputArray
    }
  $("#output").prepend("<li>" + output + "</li>")

  });
});