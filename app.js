const cookieButton = document.getElementById(`cookie`)
const winnerText = document.getElementById(`winner`)

winnerText.style.display = "none"

let count = 0;

const clickCounter = () => {
    count++;
    document.getElementById(`display`).innerText = `${count}`
if (count === 6) {
    winnerText.style.display = "flex"
    winnerText.style.justifyContent = "center"
    cookieButton.style.display = "none"
}
}

cookieButton.addEventListener(`click`, clickCounter)

