// let firstCard = 10
// let secondCard = 7
let firstCard = Math.floor(Math.random() * 11) + 2
let secondCard = Math.floor(Math.random() * 11) + 2
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if(sum === 21) { //strictly equal
    console.log("Wohoo! You've got BlackJack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}