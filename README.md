# Word Guessing Game
## Background
- Game Choice: Word Guessing Game.
-  I wanted to make the game a bit more unique so I'm choosing the catagory of 90's alternative female singer songwriters to use as the word (name) to guess.

## Wireframe
![Word Guessing Game Wireframe](img/IMG_0797.jpeg)
![Word Guessing Game Wireframe](img/71ee4b8f9bdc80cf16c889a60f08d902.jpg)

### PseudoCode
```js
    Function gameInit() {
-	Choose new artist
-	Choose num of blank tiles
-	Set num of allowed guesses
}

function randomAnswer(names) {
    for(let) {
        const random = names[Math.floor(Math.random() * names.length)];
        return random
    }
}

Function guessLetter() {
-	if letter is correct, place on tile
-	else subtract number of guesses left
	
}

Function results() {
-	if all letters guessed prompt winning message
-	else prompt losing message
}


Function makeChoice(choice) {
-   Grab choice data
-   Store the data in a variable 
}

    
```