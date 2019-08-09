// var name = prompt("what's your name?");
// console.log("Hello " + name);
// document.write(name);

// Pick a random word
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

var word = coffeeWords[Math.floor(Math.random() * coffeeWords.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++ ){
    answerArray[i] = "_";
}
console.log(answerArray);


var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
       } else {

    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters --;
            }
        }
    }
    


}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word + "!");
// var html =  
//           "<p>Guess a letter.</p>" +
//            answerArray +
//           "<p> Wins: " + wins + "</p>" +
//           "<p> Losses: " + losses + "</p>";
          

  // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess

// While the word has not been guessed {
//  Show the player their current progress
//     Get a guess from the player

//  If the player wants to quit the game {
//     Quit the game
//  }

//  Else If the guess is not a single letter {
//      Tell the player to pick a single letter
//  }

//  Else {
//    If the guess is in the word {
//      Update the player's progress with the guess
//  }
//  }
// }

// Congratulate the player on guessing the word