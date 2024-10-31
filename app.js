const cookieButton = document.getElementById(`cookie`)
console.dir(cookieButton)

let count = 0;

const clickCounter = () => {
    count++;
    document.getElementById(`display`).innerText = `${count} Cookies!`
}

cookieButton.addEventListener(`click`, clickCounter)

