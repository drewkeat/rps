const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


rock.addEventListener("click", activateChoice)
paper.addEventListener("click", activateChoice)
scissors.addEventListener("click", activateChoice)

function activateChoice(event) {
    event.target.style.backgroundColor = "lightgreen"
    console.log("click")
}

