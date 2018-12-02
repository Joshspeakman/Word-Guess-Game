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

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

// Audio Functions //
var a = document.getElementById("velociraptor");
var r = document.getElementById("brachiosaurus");
var tyrannosaurus = document.getElementById("tyrannosaurus");
var dilophosaurus = document.getElementById("dilophosaurus");
var gallimimus = document.getElementById("gallimimus");
var carnotaurus = document.getElementById("carnotaurus");
var pteranodon = document.getElementById("pteranodon");

function aud() {

    if (randomWord === words[0]) {
        dilophosaurus.pause();
        gallimimus.pause();
        carnotaurus.pause();
        pteranodon.pause();
        tyrannosaurus.pause();
        r.pause();
        a.play();
        document.getElementById("image").src = "./assets/images/velociraptor.gif";
    }

    else if (randomWord === words[1]) {
        dilophosaurus.pause();
        gallimimus.pause();
        carnotaurus.pause();
        pteranodon.pause();
        tyrannosaurus.pause();
        a.pause();
        r.play();
        document.getElementById("image").src = "./assets/images/brachiosaurus.gif";
    }

    else if (randomWord === words[2]) {
        dilophosaurus.pause();
        gallimimus.pause();
        carnotaurus.pause();
        pteranodon.pause();
        r.pause();
        a.pause();
        tyrannosaurus.play();
        document.getElementById("image").src = "./assets/images/tyrannosaurus.gif";
    }

    else if (randomWord === words[3]) {
        gallimimus.pause();
        carnotaurus.pause();
        pteranodon.pause();
        tyrannosaurus.pause();
        r.pause();
        a.pause();
        dilophosaurus.play();
        document.getElementById("image").src = "./assets/images/dilophosaurus.gif";
    }

    else if (randomWord === words[4]) {
        carnotaurus.pause();
        pteranodon.pause();
        tyrannosaurus.pause();
        r.pause();
        a.pause();
        dilophosaurus.pause();
        gallimimus.play();
        document.getElementById("image").src = "./assets/images/gallimimus.gif";
    }

    else if (randomWord === words[5]) {
        gallimimus.pause();
        pteranodon.pause();
        tyrannosaurus.pause();
        r.pause();
        a.pause();
        dilophosaurus.pause();
        carnotaurus.play();
        document.getElementById("image").src = "./assets/images/carnotaurus.gif";
    }

    else if (randomWord === words[6]) {
        gallimimus.pause();
        carnotaurus.pause();
        tyrannosaurus.pause();
        r.pause();
        a.pause();
        dilophosaurus.pause();
        pteranodon.play();
        document.getElementById("image").src = "./assets/images/pteranodon.gif";
    }
};

// Reset functions //
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
    }

    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

// Final Function //
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

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

// Execute Code //
Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}