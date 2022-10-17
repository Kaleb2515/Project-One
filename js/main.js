/*----- constants -----*/

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
];

const guess = document.querySelector("#guess");

const answer =
  possibleArtists[Math.floor(Math.random() * possibleArtists.length)];

/*----- app's state (variables) -----*/
let playerGuess,
  correctAnswer,
  maxWrong = 10,
  underScores = [];

let state = {
  playerGuess,
  correctAnswer,
  maxWrong,
  underScores,
};

/*----- cached element references -----*/


/*----- event listeners -----*/

/*----- functions -----*/
function gameInit() {}

// logs users guess to console log when hit submit button
function send() {
  console.log(guess.value);
}

// Underscores in console log
function randomNames() {
  for (let i = 0; i < answer.length; i++) {
    underScores.push("_");
  }
  return underScores;
}

// Places randomly generated names in answer field where underscores are supposed to be
function updateRandNames() {
  return answerUnderscores.innerHTML = answer

}

updateRandNames();

console.log(randomNames());
console.log(answer);
