 document.onkeypress=function(){
        //starts game 
    document.getElementById("prompt1").style.visibility = "visible";
    document.getElementById("prompt2").style.visibility = "visible";
    document.getElementById("prompt3").style.visibility = "hidden";
    //random number generator to pick fish from array - fish[i]
     var fish = ['bass', 'carp', 'catfish', 'bluegill', 'tuna', 'salmon', 'perch']
      var i = Math.floor(Math.random()*7)
      var guessWord=fish[i];
          //console.log(i);
          console.log(guessWord);

    //create blank spaces for guessWord,  to add correct guesses use DOM to appropriate blnkSpcs[]
      var x = guessWord.length;
          
      for (let index = 0; index <x; index++) {
          //append x number of ___ ___ ___ ___
      var blnkSpcs=document.getElementById("blankSpaces");
      var underscore = document.createTextNode("___ ");
      blnkSpcs.appendChild(underscore);
      }
      //var spaces= document.getElementById("blankSpaces")
      var spaces =document.getElementById("blankSpaces").innerHTML
      console.log(spaces)  
      console.log(spaces[2])      
      console.log(spaces[0]) 
      console.log(spaces[122]) 
    //sets letterGuess to keystroke inputted - is the keyboard letter clicked
     //function keyPressStart() {
     document.onkeypress = function(keyPressed) {
     var keyPressed = keyPressed || window.event,
     charCode = keyPressed.keyCode || keyPressed.which;
     lettersGuessed = String.fromCharCode(charCode);
    
     var letterGuess = String.fromCharCode(keyPressed.keyCode);
     console.log(letterGuess);
     }



//      //for loop to compare letterGuess to letterActual
//       for (wrongGuesses = 0; wrongGuesses < 9; ) {
         
         
     
//          for(numOfLetters=0; numOfLetters<fishArr.length; numOfLetters++){
//              console.log(numOfLetters);
//              console.log(fishArr[numOfLetters]);
//              var letterActual=(fishArr[numOfLetters]);
//             }
//     }  }
//     if (letterActual === letterGuess) {
//          alert ("match!"); //replace underscore with letterGuess
//      }else{ //update guessesLeft
//      }
//     // tallys wins - needs to be iterated with actual result 
//      var wins = 0;  var randomWord;
//      if (guessWord===randomWord) {
//          wins ++;
//          console.log(wins);
//      }
//      document.getElementById('winTally').textContent=wins;
    
//      

//      //game logic? split words into letters array
//      var fishLetters=[fish[i]+ ''];
//      var fishArr=fishLetters[0].split('')
//          console.log(fishArr[1]);
//          console.log(fishArr);
//          console.log(blnkSpcs[0]);
 }
