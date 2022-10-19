/*----- constants -----*/
const MAX_WRONG_GUESSES = 10;

const possibleArtists = [
  "Tori Amos",
  "Bjork",
  "PJ Harvey",
  "Liz Phair",
  "Sinead Oconnor",
  "Fiona Apple",
  "Alanis Morissette",
  "Sarah McLachlan",
  "Dolores ORiordan",
  "Courtney Love",
  "Shirley Manson",
];

const answer =
  possibleArtists[Math.floor(Math.random() * possibleArtists.length)];

/*----- app's state (variables) -----*/
let playerGuess,
  correctAnswer,
  maxGuesses = 10,
  underScores = [];

let state = {
  playerGuess,
  correctAnswer,
  maxGuesses,
  underScores,
};

/*----- cached element references -----*/
const answerSpace = document.getElementById("answerUnderscores");
const subBtn = document.getElementById("subBtn");
const guess = document.querySelector("#guess");

/*----- event listeners -----*/
// logs users guess to console log when hit submit button
subBtn.addEventListener("click", send);

/*----- functions -----*/
function render() {}

function gameInit() {
  render();
}

// Underscores IN CONSOLE LOG
function randomNames() {
  for (let i = 0; i < answer.length; i++) {
    underScores.push("_");
  }
  return underScores;
}

// Replacing answer with underscores in answer field
function answerFieldRandNames() {
  return (answerSpace.innerHTML = answer.replace(/[a-zA-Z]/gi, "_"));
}

// function associated with submit button event listener
function send() {
  console.log("I WAS CLICKED");
  console.log(guess.value);
  checkAnswer();
}

function checkAnswer() {
  let answerString = "";
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guess.value) {
      console.log("correct");
      answerString += guess.value;
    } else {
      answerString += "_";
    }
  }
  answerSpace.textContent = answerString;
}

function placeLetter(i) {
  answerSpace.textContent.replace(answerSpace.innerHTML[i], answer[i]);
}

checkAnswer();
answerFieldRandNames();
console.log("you guessed correct!");
console.log(randomNames());
console.log(answer);
