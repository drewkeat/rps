const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const scores = {
  user: document.getElementById("user_score"),
  computer: document.getElementById("computer_score"),
};

const choices = {
    rock: 1,
    paper: 2,
    scissors: 3
}

rock.addEventListener("click", activateChoice);
paper.addEventListener("click", activateChoice);
scissors.addEventListener("click", activateChoice);

function activateChoice(event) {
    rock.style.backgroundColor = "white"
    paper.style.backgroundColor = "white"
    scissors.style.backgroundColor = "white"
    let winner = playRound(choices[event.target.id]);
    switch (winner) {
        case "user":
            event.target.style.backgroundColor = "lightgreen"
            break;
        case "computer":
            event.target.style.backgroundColor = "coral"
            break;
        default:
            event.target.style.backgroundColor = "yellow"
    }
}

function playRound(choice) {
    let computer = Math.floor(Math.random() * 3) + 1
    let user = choice
    let score = (`${user} : ${computer}`)
    let message;
    let winner;
    switch(score) {
        case '1 : 2': 
            message = "Paper covers Rock"
            winner = 'computer'
            break;
            case '1 : 3': 
            message = "Rock beats Scissors"
            winner = 'user'
            break;
            case '2 : 1': 
            message = "Paper covers Rock"
            winner = 'user'
            break;
            case '2 : 3': 
            message = "Scissors cut Paper"
            winner = 'computer'
            break;
            case '3 : 1': 
            message = "Rock beats Scissors"
            winner = 'computer'
            break;
            case '3 : 2': 
            message = "Scissors cut Paper"
            winner = 'user'
            break;
        default: 
            winner = 'tie'

    }

    updateScore(winner, message)

    return winner
}


function updateScore(winner, message) {
  if (winner != "tie") {
    scores[winner].innerText = parseInt(scores[winner].innerText) + 1;
  }
  
  switch (winner) {
    case "user":
      message += ", you win!";
      break;
    case "computer":
      message += ", I win!";
      break;
    default:
      message = "Tie!";
  }
  response = document.getElementById("result_message")
  response.innerText = message
}
