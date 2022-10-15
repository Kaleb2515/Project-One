/*----- constants -----*/
const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

const randomLetters =
  possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
const randomLetter = "";
let displayText = guess

/*----- app's state (variables) -----*/
let playerGuess,
correctAnswer,
maxWrong = 10,
submittedGuess = null;

let state = {
    playerGuess,
    correctAnswer,
    maxWrong,
    submittedGuess,
};

/*----- cached element references -----*/
/*----- event listeners -----*/
// document.getElementById("subBtn").addEventListener("click", displayText);


/*----- functions -----*/
function gameInit() {}

function randomArtist() {
  answer = possibleArtists[Math.floor(Math.random() * possibleArtists.length)];
  console.log(answer);
}

// document.getElementById('subBtn').innerHTML = "";
// document.getElementById('maxWrong').innerHTML = maxWrong;

// document.getElementById('answerField').innerHTML = guess;

// let input = document.getElementById('guess');


function send() {
    console.log(guess.value)
}

randomArtist();

console.log(randomLetters);
console.log(randomArtist);

