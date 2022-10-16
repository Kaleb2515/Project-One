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

const answer = possibleArtists[Math.floor(Math.random() * possibleArtists.length)]


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


/*----- cached element references -----*/
/*----- event listeners -----*/



/*----- functions -----*/
function gameInit() {}

function send() {
    console.log(guess.value)
}

function genUnderscores () {
        for (let i = 0; i < answer.length; i++) {
            underScores.push('_');
        }
        return underScores
    }
    

    console.log(genUnderscores())
    console.log(answer)



