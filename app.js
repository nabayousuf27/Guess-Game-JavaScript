let userInput = prompt("Enter any maximum number and guess the number betwenn in that range");
let generatedNum = Math.floor(Math.random()*userInput) + 1;
let userGuess = prompt("Guess the number between 1 to " + userInput + ".");
  while(true){
    if(userGuess != generatedNum){
        userGuess = prompt("Incorrect Guess !! enter 'quit' or Guess the number between 1 to " + userInput + ".");
        }
    else{
        alert("Congrats !!");
        break; 
    }    
    if(userGuess == "quit"){
        alert("Quitting the game")
        break;
    }
    }

