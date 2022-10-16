/*----- constants -----*/

// const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const possibleArtists = [
  "Tori Amos",
  "Bork",
  "PJ Harvey",
  "Liz Phair",
  "Sinead Oconnor",
  "Fiona Apple",
  "Alanis Morissette",
  "Sarah McLachlan",
  "Dolores ORiordan",
  "Courtney Love",
];

const guess = document.querySelector("#guess");

// const randomLetters =
//   possibleLetters[Math.floor(Math.random() * possibleLetters.length)];


/*----- app's state (variables) -----*/
let playerGuess,
correctAnswer,
maxWrong = 10,
submittedGuess = null,
underScores = []

let state = {
    playerGuess,
    correctAnswer,
    maxWrong,
    submittedGuess,
    underScores,
};



let genUnderscores = function () {
    for (let i = 0; i < possibleArtists.length; i++) {
        underScores.push('_');
    }
    return underScores
}

console.log(underScores)

/*----- cached element references -----*/
/*----- event listeners -----*/
// document.getElementById("subBtn").addEventListener("click", displayText);


/*----- functions -----*/
function gameInit() {}


function randomArtist() {
  answer = possibleArtists[Math.floor(Math.random() * possibleArtists.length)];
  console.log(answer)
}

randomArtist();


function send() {
    console.log(guess.value)
}











// document.getElementById('subBtn').innerHTML = "";
// document.getElementById('maxWrong').innerHTML = maxWrong;

// document.getElementById('answerField').innerHTML = guess;

// let input = document.getElementById('guess');


// console.log(randomLetters);


