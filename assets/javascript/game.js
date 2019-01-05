 document.onkeypress=function(){
        //starts game 
    document.getElementById("prompt1").style.visibility = "visible";
    document.getElementById("prompt2").style.visibility = "visible";
    document.getElementById("prompt3").style.visibility = "hidden";

    //letters guessed arrays
    var correctGuesses = ['','','','','','','','',''];
    var wrongGuesses = [];
      //  document.getElementById("guessesRemaining").innerHTML=guessesLeft;

    //random number generator to pick fish from array - fish[i]
     var fish = ['bass', 'carp', 'catfish', 'bluegill', 'tuna', 'salmon', 'perch']
      var i = Math.floor(Math.random()*7)
      var guessWord=fish[i];
          console.log(guessWord);

    //create blank spaces for guessWord,  to add correct guesses use DOM to appropriate blnkSpcs[]
      var x = guessWord.length;
          
      for (let index = 0; index <x; index++) {
          //append x number of ___ ___ ___ ___
      var blnkSpcs=document.getElementById("blankSpaces");
      var underscore = document.createTextNode("_ ");
      blnkSpcs.appendChild(underscore);
      }
      //var spaces= document.getElementById("blankSpaces")
      var spaces =document.getElementById("blankSpaces").innerHTML
      console.log(spaces)  
      console.log(spaces[0]);console.log(spaces[3]);console.log(spaces[4]) 
      
     //sets letterGuess to keystroke inputted - is the keyboard letter clicked
     document.onkeypress = function(keyPressed) {
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

      // compare letterGuess to letterActual
        console.log(fishLetters);
        console.log(fishArr);
        console.log(fishArr.indexOf(letterGuess));
        if (fishArr.indexOf(letterGuess)> -1){
                alert ("match!"); //replace underscore with letterGuess
                if (correctGuesses.indexOf(letterGuess) > -1) {
                    alert("You've already guessed that letter");
                    return;
                }
                else {
                    correctGuesses.splice(fishArr.indexOf(letterGuess), 1, letterGuess);
                }
                var spcStrng =blankSpaces.innerHTML;
                console.log(spcStrng);
                console.log(correctGuesses);
                console.log(guessesLeft);
                }
                else {
                    if (wrongGuesses.indexOf(letterGuess) > -1) {
                        alert("You've already guessed that letter");
                        return;
                    }    
                    else{    
                        wrongGuesses.push(letterGuess);
                        var guessesLeft=9-wrongGuesses.length;
                        document.getElementById("guessesRemaining").innerHTML=guessesLeft
                        console.log(wrongGuesses);
                    }
                }
                
              
             ///not the right spot in loop
             //numOfLetters=fishArr.length-1){
                 //guessesLeft = guessesLeft - 1
                //          
                
                
            //document.getElementById(spaces[numOfLetters]).textContent=fishArr[numOfLetters];
    
      //     // tallys wins - needs to be iterated with actual result 
      //      var wins = 0;  var randomWord;
      //      if (guessWord===randomWord) {
      //          wins ++;
      //          console.log(wins);
      //      }
      //      document.getElementById('winTally').textContent=wins;
          
      // ****** var stored guesses    var guesses = []
              
      
       }}
            
        