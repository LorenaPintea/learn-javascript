let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function arrange() {
    for (let i = 0; i < fruit.length; i++) {
        if(fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
            if (i < fruit.length - 1) {
                appleShelf.textContent += " "
            }
        } else {
            orangeShelf.textContent += "🍊"
            if (i < fruit.length - 1) {
                orangeShelf.textContent += " "
            }
        }
    }
}

arrange()