// press any key starts game reveals game elements
document.body.addEventListener('keypress', startGame);

function runGameCycle(){
        }
var wins = 0;  
         
    //letters guessed arrays
     wrongGuesses = [];
    
     //random number generator to pick fish from array - fish[i]
     fish = ['cod', 'carp', 'catfish', 'sardine','anchovy', 'tuna', 'salmon', 'perch','shark', 'ray']
     i = Math.floor(Math.random()*fish.length)
     guessWord=fish[i];

    console.log(guessWord);

    //create blank spaces for guessWord
    var underscore = [];
      for (let index = 0; index <guessWord.length; index++) {
      underscore.push('-');
      }
      document.getElementById("blankSpaces").innerHTML=underscore.join('')
    
     //sets letterGuess to keystroke inputted - is the keyboard letter clicked
     document.onkeypress = function(keyPressed) {
        //if (!(event.which <= 90 && event.which >= 65)) return
     var keyPressed = keyPressed || window.event,
     charCode = keyPressed.keyCode || keyPressed.which;
     lettersGuessed = String.fromCharCode(charCode);
     var letterGuess = String.fromCharCode(keyPressed.keyCode);
     console.log(letterGuess);
     
     
//************************* END of startup/setup ************************************/

      //game logic? split words into letters array
       fishLetters=[fish[i]];
       fishArr=fishLetters[0].split('')
       letterIndex = fishArr.indexOf(letterGuess)
      

      // compare letterGuess to letterActual
        if (fishArr.indexOf(letterGuess)> -1){
                //if guess is correct
                    if (underscore.indexOf(letterGuess) > -1) {
                    //alert("You've already guessed that letter");
                    return;
                }
                else {
                    underscore.splice(fishArr.indexOf(letterGuess), 1, letterGuess);
                    document.getElementById("blankSpaces").innerHTML=underscore.join('');
                    //console.log(underscore.join(''));
                    
                    if (underscore.join('')==guessWord){
                        wins = wins+1;
                        document.getElementById("winNum").innerHTML=wins;
                        document.getElementById("youWin").innerHTML="YOU WIN!";
                        document.body.addEventListener('keypress', startGame);
                        }
                }
                }
                //wrong guess options
                else {
                    if (wrongGuesses.indexOf(letterGuess) > -1) {
                        //alert("You've already guessed that letter");
                        return;
                    }    
                    else{    
                        wrongGuesses.push(letterGuess);
                        guessesLeft=9-wrongGuesses.length;
                        //if (guessesLeft<0){
                          //  document.getElementById("youWin").innerHTML="GAME OVER";
                           // return;
                   // }
                        document.getElementById("guessesRemaining").innerHTML=guessesLeft+1
                            //console.log(wrongGuesses);
                        document.getElementById('wrongGuesses').textContent=wrongGuesses
                        if (guessesLeft<0){
                            document.getElementById("youWin").innerHTML="GAME OVER";
                            document.getElementById("prompt2").style.visibility = "hidden";
                            document.getElementById("prompt4").style.visibility = "hidden";
                            document.getElementById("blankSpaces").innerHTML=fishArr.join('');
                            return;
                            } 
                    }      
                }
       }
            
       function startGame() {
        document.getElementById("prompt1").style.visibility = "visible";
        document.getElementById("prompt2").style.visibility = "visible";
        document.getElementById("prompt3").style.visibility = "hidden";
        document.getElementById("prompt4").style.visibility = "visible";
        document.getElementById("winBox").style.visibility = "visible";
        document.getElementById("blankSpaces").style.visibility = "visible";
        document.getElementById("wrongGuessBox").style.visibility = "visible";
        document.body.removeEventListener('keypress',startGame);
        console.log(wrongGuesses);
    }      