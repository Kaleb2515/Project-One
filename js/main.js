/*----- constants -----*/
const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const possibleArtists = ["Tori Amos", "Bork", "PJ Harvey", "Liz Phair", "Sinead Oconnor", "Fiona Apple", "Alanis Morissette", "Sarah McLachlan", "Dolores ORiordan", "Courtney Love"]
const randomLetters = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
const randomLetter = ""
// const randomArtist = possibleArtists[Math.floor(Math.random() * possibleArtists.length)]


/*----- app's state (variables) -----*/
let playerChoice = ""
let correctAnswer = randomArtist
let maxWrong = 10
let submittedGuess = null


/*----- cached element references -----*/
/*----- event listeners -----*/



/*----- functions -----*/
function gameInit(){

}

function randomArtist() {
    answer = possibleArtists[Math.floor(Math.random()* possibleArtists.length)];
    alert(answer) 
}






// document.getElementById('subBtn').innerHTML = "";
// document.getElementById('maxWrong').innerHTML = maxWrong;

// document.getElementById('answerField').innerHTML = guess;

randomArtist()


console.log(randomLetters)
console.log(randomArtist)
console.log(correctAnswer)

