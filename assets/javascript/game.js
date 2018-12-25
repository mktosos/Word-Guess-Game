//sets letters to keystroke inputted
function keyPressStart() {
    document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
    charCode = keyPressed.keyCode || keyPressed.which;
      lettersGuessed = String.fromCharCode(charCode);
    
    var letters = String.fromCharCode(keyPressed.keyCode);
    console.log(letters);
}  }

// tallys wins - if guesses array === random word array (wins ++) - needs to be iterated with actual result - not working!
var wins = 5; var guessWord; var randomWord;
if (guessWord===randomWord) {
    wins ++;
    console.log(wins);
   }
    
document.getElementById('winTally').textContent=wins;
    
    