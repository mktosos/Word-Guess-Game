//sets letters to keystroke inputted
function keyPressStart() {
    document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
    charCode = keyPressed.keyCode || keyPressed.which;
      lettersGuessed = String.fromCharCode(charCode);
    
    var letters = String.fromCharCode(keyPressed.keyCode);
    console.log(letters);
}  }

// tallys wins - needs to be iterated with actual result 
var wins = 0;  var randomWord;
if (guessWord===randomWord) {
    wins ++;
    console.log(wins);
   }
    
document.getElementById('winTally').textContent=wins;
    
//random number generator to pick fish from array - fish[i]
var fish = ['bass', 'carp', 'catfish', 'bluegill', 'crappie', 'salmon', 'perch']
var i = Math.floor(Math.random()*7)
var guessWord=fish[i];
console.log(i);
console.log(guessWord);


//create blak spaces for guessWord,  to add correct guesses use DOM to appropriate blnkSpcs[]
var x = guessWord.length;
    console.log(x)
for (let index = 0; index <x; index++) {
    //append x number of ___ ___ ___ ___
var blnkSpcs=document.getElementById("blankSpaces");
var underscore = document.createTextNode("___ ");
blnkSpcs.appendChild(underscore);
}