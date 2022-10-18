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
  "Shirley Manson",
];

const guess = document.querySelector("#guess");

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

/*----- event listeners -----*/
// logs users guess to console log when hit submit button
subBtn.addEventListener("click", function send() {
  console.log("I WAS CLICKED");
  console.log(guess.value);
  checkAnswer();
});

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

//*********************
// Replacing answer with underscores in answer field
function answerFieldRandNames() {
  return (answerSpace.innerHTML = answer.replace(/[a-zA-Z]/gi, "_"));
}

function placeLetter(i) {
  console.log(i);
  // answerSpace.textContent.replace(answerSpace.innerHTML[i], answer[i])
  let letterIndex = answer.indexOf(i);

  answerSpace.textContent[letterIndex] = answer[letterIndex];

  // console.log(answer[i])
  // console.log(answerSpace.innerHTML[i])
  // console.log("you guessed correct!");
}

function checkAnswer() {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guess.value) {
      console.log("correct");
      placeLetter(i);

    } else {
      console.log("incorrect");
    }
  }
}

checkAnswer();
answerFieldRandNames();

console.log(randomNames());
console.log(answer);
