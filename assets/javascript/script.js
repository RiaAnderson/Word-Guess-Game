var name = prompt("what's your name?");
console.log("Hello " + name);

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
for (var i = 0 < word.length; i++ ){
    answerArray[i] = "_";
}

var remainingLetters = word.length;




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