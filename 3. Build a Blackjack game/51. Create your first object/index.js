// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castleList = {
    name : "Castle",
    free : true,
    numberOfVisitors: 100,
    attractions: ["main room", "library", "basement"]
}

for(let i = 0; i < castleList.attractions.length; i++) {
    console.log(castleList.attractions[i])
}

console.log(castleList.free)
console.log(castleList.name)
console.log(castleList.numberOfVisitors)
