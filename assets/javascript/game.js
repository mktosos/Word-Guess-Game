 document.onkeypress=function(){
        //starts game 
    document.getElementById("prompt1").style.visibility = "visible";
    document.getElementById("prompt2").style.visibility = "visible";
    document.getElementById("prompt3").style.visibility = "hidden";
    document.getElementById("prompt4").style.visibility = "visible";
    document.getElementById("winBox").style.visibility = "visible";
    document.getElementById("blankSpaces").style.visibility = "visible";
    document.getElementById("wrongGuessBox").style.visibility = "visible";
    //letters guessed arrays
    var wrongGuesses = [];
    
     //random number generator to pick fish from array - fish[i]
    var fish = ['cod', 'carp', 'catfish', 'sardine','anchovy', 'tuna', 'salmon', 'perch','shark', 'ray']
    var i = Math.floor(Math.random()*7)
    var guessWord=fish[i];

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
      var fishLetters=[fish[i]];
      var fishArr=fishLetters[0].split('')
      var letterIndex = fishArr.indexOf(letterGuess)
      var wins = 0;  

      // compare letterGuess to letterActual
        //console.log(fishLetters);
        //console.log(fishArr);
        //console.log(fishArr.indexOf(letterGuess));
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
                    //console.log(guessWord);
                    if (underscore.join('')==guessWord){
                        wins = wins+1;
                        document.getElementById("winNum").innerHTML=wins;
                        document.getElementById("youWin").innerHTML="YOU WIN!";
                        
                        return;
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
                        var guessesLeft=9-wrongGuesses.length;
                        document.getElementById("guessesRemaining").innerHTML=guessesLeft
                        //console.log(wrongGuesses);
                        document.getElementById('wrongGuesses').textContent=wrongGuesses
                    }
                }
       }}
            
        