// Variables/arrays*****************************
var coffeeWords = [
    "americano",
    "cappuccino",
    "mocha",
    "espresso",
    "macchiato",
    "latte",
    "tea",
    "steamer",
];
console.log(coffeeWords);


var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesess = [];
var wrongLetters = [];

//Game Counters

var guessesLeft = 7;
var winCount = 0;
var lossCount = 0;


// //Functions**************************************
function startgame () {
    selectedWord = coffeeWords[Math.floor(Math.random() * coffeeWords.length)];
    console.log(selectedWord);

    lettersInWord = selectedWord.split("");
    console.log(lettersInWord);

    numBlanks = lettersInWord.length;
    console.log(numBlanks);

//     //Reset
    guessesLeft = 7;
    wrongLetters = [];
    blanksAndSuccesess = [];

    //Populate blanksAndSuccesess with correct number of blanks.

    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesess.push("_");
    }
    // console.log(blanksAndSuccesess);

    // //Change HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesess.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
}

function checkLetters(letter) {
    
    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
        isLetterInWord = true;
        //alert("letter found");
        }
    }
 
    //Check if letter is in word and populate
    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesess[i] = letter;                
            }
        }
    }
    //Letter was not found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    //testing
    console.log(blanksAndSuccesess);
 }

function roundComplete(){
    console.log("Rounds won: " + winCount + "| Rounds lost: " + lossCount + " | Guesses left: " + guessesLeft);

    //Update HTML with stats
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesess.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

//Check if user one
    if (lettersInWord.toString() == blanksAndSuccesess.toString()) {
        winCount++;
        alert("You Won!");
        
        //Update win counter
        document.getElementById("winCounter").innerHTML = winCount; 
        startgame();
     }
    
// Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");
        document.getElementById("lossCounter").innerHTML = lossCount;

        startgame();
 }
}

// // Main Process*********************************
//Initiates the code
startgame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
  
    roundComplete();

    console.log(letterGuessed);
 }









// var name = prompt("what's your name?");
// console.log("Hello " + name);
// document.write(name);

// Pick a random word
// var coffeeWords = [
//     "americano",
//     "cappuccino",
//     "mocha",
//     "espresso",
//     "macchiato",
//     "latte",
//     "tea",
//     "steamer",
// ];
// console.log(coffeeWords);

// var word = coffeeWords[Math.floor(Math.random() * coffeeWords.length)];

// var answerArray = [];
// for (var i = 0; i < word.length; i++ ){
//     answerArray[i] = "_";
// }
// console.log(answerArray);


// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));

//     var guess = prompt("Guess a letter.");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//        } else {

//     for (var j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters --;
//             }
//         }
//     }
    


// }
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word + "!");
// // var html =  
// //           "<p>Guess a letter.</p>" +
// //            answerArray +
// //           "<p> Wins: " + wins + "</p>" +
// //           "<p> Losses: " + losses + "</p>";
          

//   // Game code goes here
// //     // Show the player their progress
// //     // Take input from the player
// //     // Update answerArray and remainingLetters for every correct guess

// // While the word has not been guessed {
// //  Show the player their current progress
// //     Get a guess from the player

// //  If the player wants to quit the game {
// //     Quit the game
// //  }

// //  Else If the guess is not a single letter {
// //      Tell the player to pick a single letter
// //  }

// //  Else {
// //    If the guess is in the word {
// //      Update the player's progress with the guess
// //  }
// //  }
// // }

// Congratulate the player on guessing the word