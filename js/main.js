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
  
  
  /*----- event listeners -----*/
  // Pressing down on a letter logs it to console.log

  
  
  
  
  
  /*----- functions -----*/
  function gameInit() {}
  
  // logs users guess to console log when hit submit button
  function send() {
    console.log(guess.value);
    pGuess()
  }
  


  // Underscores in console log
  function randomNames() {
    for (let i = 0; i < answer.length; i++) {
      underScores.push("_");
    }
    return underScores;
  }
  
  // Places randomly generated names as underscores in answer field 
  function answerFieldRandNames() {
    return answerUnderscores.innerHTML = answer.replace(/[a-z]/gi, '_')
  
  }

function placeLetter() {
    if (guess.value = send)
    
    console.log("you guessed correct!")
}

// ********** */
function pGuess () {
    for (let i = 0; i < answer.length; i++) {
        
        if (answer[i] === guess.value) {
            console.log("correct")
            placeLetter()
        } else {
            console.log("incorrect")
        }
        
    } 
}

    
//*********** */


  
  answerFieldRandNames();
  
  console.log(randomNames());
  console.log(answer);