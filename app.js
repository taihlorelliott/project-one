// constants
const cookieButton = document.getElementById(`cookie`)
const winnerText = document.getElementById(`winner`)
const resetButton = document.getElementById(`resetButton`)

// hidden upon load items
winnerText.style.display = "none"
resetButton.style.display = "none"

// variable
let count = 0
let random = Math.floor(Math.random() * 50) + 1;
// syntax from stack overflow

// test 
// console.log(random)

// functions
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

// event listeners

cookieButton.addEventListener(`click`, clickCounter)

