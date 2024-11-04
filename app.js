// constants defined from the html
const cookieButton = document.getElementById(`cookie`)
const winnerText = document.getElementById(`winner`)
const resetButton = document.getElementById(`resetButton`)

// hidden items
winnerText.style.display = "none"
resetButton.style.display = "none"

// variables, define count started point and random number generator
let count = 0
let random = Math.floor(Math.random() * 50) + 1;
// syntax learned from stack overflow

// test 
// console.log(random)

// functions, when the button is clicked and certain number from random generator
// is hit then display hidden items 
const clickCounter = () => {
    count++;
    document.getElementById(`display`).innerText = `${count}`
if (random === count) {
    resetButton.style.display = "flex";
    winnerText.style.display = "flex"
    winnerText.style.justifyContent = "center"
    cookieButton.style.display = "none"
    

}
}

// event listener, tell the clickCounter to be looking for the click
cookieButton.addEventListener(`click`, clickCounter)

