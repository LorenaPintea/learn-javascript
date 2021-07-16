// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const divs = document.getElementById("container")

function render(imgs) {
    // <img class="team-img" src="images/hip1.jpg">
    let strings = ""

    for(let i = 0; i < imgs.length; i++) {
        strings += `<img alt = "Employee in the company" class="team-img" src="${imgs[i]}">`
    }

    divs.innerHTML = strings 
}

render(imgs)