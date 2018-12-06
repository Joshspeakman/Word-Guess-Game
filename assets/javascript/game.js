// Variables Array //
var words = ["velociraptor", "brachiosaurus", "tyrannosaurus", "dilophosaurus", "gallimimus", "carnotaurus", "pteranodon"]

// Empty variables to store values later //
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

// Counter Variables //
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

// Functions //
function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
}

// Audio //
var velociraptor = document.getElementById("velociraptor");
var brachiosaurus = document.getElementById("brachiosaurus");
var tyrannosaurus = document.getElementById("tyrannosaurus");
var dilophosaurus = document.getElementById("dilophosaurus");
var gallimimus = document.getElementById("gallimimus");
var carnotaurus = document.getElementById("carnotaurus");
var pteranodon = document.getElementById("pteranodon");

function aud() {
    pauseAll();
    document.getElementById("image").src = "./assets/images/" + randomWord + ".gif";
    window[randomWord].play();
};

function pauseAll() {
    gallimimus.pause();
    carnotaurus.pause();
    tyrannosaurus.pause();
    brachiosaurus.pause();
    velociraptor.pause();
    dilophosaurus.pause();
    pteranodon.pause();
}

// Reset //
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    } else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }

}

function complete() {

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud();
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/dennis3.gif";
        document.getElementById("losstracker").innerHTML = " " + losses;
        loser.play();

    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

// Execute //
Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}