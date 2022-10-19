/*----- constants -----*/
const MAX_WRONG_GUESSES = 10;
const WORDS = [
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

/*----- app's state (variables) -----*/
let wrongGuesses; // Array to hold incorrect letters
let secret; // Array of the chars for the randomly selected word
let guess; // Array of current guessed letters
let gameStatus; // null -> game in progress; 'W' -> won; 'L' -> lost

/*----- cached element references -----*/
const replayBtn = document.getElementById("play-again-btn");
const submitBtn = document.getElementById("submitBtn");
const guessEl = document.getElementById("guess");
const msgEl = document.querySelector("h2");
const myInput = document.querySelector("#myInput");

/*----- event listeners -----*/
document
  .querySelector("#submitBtn")
  .addEventListener("click", handleButtonClick);
replayBtn.addEventListener("click", init);

/*----- functions -----*/
init();

function init() {
  wrongGuesses = [];
  const rndIdx = Math.floor(Math.random() * WORDS.length);
  secret = WORDS[rndIdx].toUpperCase().split("");
  // map always returns a NEW array of the same # of elements
  guess = secret.map((ltr) => (ltr === " " ? " " : "_"));
  gameStatus = null;
  render();
}

function render() {
  // render the message
  renderMessage();
  // render the guess
  guessEl.textContent = guess.join("");
  // render the buttons
  renderButtons();
}

function renderMessage() {
  if (gameStatus === "W") {
    msgEl.textContent = "You Guessed the correct singer!";
  } else if (gameStatus === "L") {
    msgEl.innerHTML = `Out of guesses! The artist was ${secret.join("")}`;
  } else {
    msgEl.textContent = `${
      MAX_WRONG_GUESSES - wrongGuesses.length + 1
    } Wrong Guesses Remain - Good Luck!`;
  }
}

function renderButtons() {
  letterBtns.forEach(function (btn) {
    const ltr = btn.textContent;
    if (wrongGuesses.includes(ltr)) {
      btn.className = "wrong";
    } else if (guess.includes(ltr)) {
      btn.className = "correct";
    } else {
      btn.className = "";
    }
  });
  replayBtn.style.visibility = gameStatus ? "visible" : "hidden";
}

function handleButtonClick(evt) {
  const ltr = myInput.value.toUpperCase();
  console.log(ltr);

  if (secret.includes(ltr)) {
    // correct guess
    secret.forEach(function (char, idx) {
      if (char === ltr) guess[idx] = ltr;
    });
  } else {
    // wrong guess
    wrongGuesses.push(ltr);
  }

  gameStatus = getGameStatus();
  myInput.value = "";
  render();
}

function getGameStatus() {
  if (!guess.includes("_")) return "W";
  if (wrongGuesses.length > MAX_WRONG_GUESSES) return "L";
  return null;
}













