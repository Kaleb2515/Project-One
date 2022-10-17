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
  const answerSpace = document.getElementById('answerUnderscores')
  
  /*----- event listeners -----*/


  
  
  
  
  
  /*----- functions -----*/
  function gameInit() {}
  
  // logs users guess to console log when hit submit button
  function send() {
    console.log(guess.value);
    pGuess()
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
    return answerSpace.innerHTML = answer.replace(/[a-zA-Z]/gi, '_')
  
  }


//**********************
 
function placeLetter(i) {
console.log(i)
    answerSpace.innerHTML = answer[i]

    console.log("you guessed correct!")
}
 

function pGuess () {
    for (let i = 0; i < answer.length; i++) {
        
        if (answer[i] === guess.value) {
            console.log("correct")
            placeLetter(i)
        } else {
            console.log("incorrect")
        }
        
    } 
}

//***************************
  
  answerFieldRandNames();
  
  console.log(randomNames());
  console.log(answer);