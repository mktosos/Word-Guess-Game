//sets letters to keystroke inputted - var "letters" is the keyboard letter clicked
function keyPressStart() {
    document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
    charCode = keyPressed.keyCode || keyPressed.which;
      lettersGuessed = String.fromCharCode(charCode);
    
    var letterGuess = String.fromCharCode(keyPressed.keyCode);
    console.log(letterGuess);
}  }

// tallys wins - needs to be iterated with actual result 
var wins = 0;  var randomWord;
if (guessWord===randomWord) {
    wins ++;
    //console.log(wins);
   }
document.getElementById('winTally').textContent=wins;
    
//random number generator to pick fish from array - fish[i]
var fish = ['bass', 'carp', 'catfish', 'bluegill', 'crappie', 'salmon', 'perch']
var i = Math.floor(Math.random()*7)
var guessWord=fish[i];
    //console.log(i);
    //console.log(guessWord);


//create blak spaces for guessWord,  to add correct guesses use DOM to appropriate blnkSpcs[]
var x = guessWord.length;
    //console.log(x)
for (let index = 0; index <x; index++) {
    //append x number of ___ ___ ___ ___
var blnkSpcs=document.getElementById("blankSpaces");
var underscore = document.createTextNode("___ ");
blnkSpcs.appendChild(underscore);
}

//game logic? split words into letters array
var fishLetters=[fish[i]+ ''];
var fishArr=fishLetters[0].split('')
    console.log(fishArr[1]);
    console.log(fishArr);


//for loop to compare letterGuess
for(numOfLetters=0; numOfLetters<fishArr.length; numOfLetters++){
    console.log(numOfLetters);
    console.log(fishArr[numOfLetters]);
    
}



