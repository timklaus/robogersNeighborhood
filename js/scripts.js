// this is our back-end stuff; I really didn't end up finding a use this.
var backEndLogic = "Is there anything I should explicity to backend?"

// this is our front-end stuff. Since everything happens upon form submission, I was unable to separate any of it from the submission event function.
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
    } else { outputArray = []
        for (index = 0; index <= userInput; index += 1) {
        outputArray.push(" " + index);
        }
      output = outputArray
    }
  $("#output").prepend("<li>" + output + "</li>")
  });
});