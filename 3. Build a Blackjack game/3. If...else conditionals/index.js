let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if(sum === 21) { //strictly equal
    console.log("Wohoo! You've got BlackJack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}