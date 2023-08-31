let humanScore = 0;
let computerScore = 0;
let win = false;

function getComputerChoice() {
    let random = Math.random();
    if (random < 0.3) {
        return "rock";
    } else if (random < 0.6) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(e) {
    if (humanScore == 5 || computerScore == 5) {
        return
    }

    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;

    let roundResult = 0;

    if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult = 3;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = 2;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = 1;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        roundResult = 3;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = 2;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = 2;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = 1;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResult = 3;
    }

    if (roundResult == 1) {
        humanScore++;
    } else if (roundResult == 2) {
        computerScore++;
    }

    if (humanScore == 5) {
        if (win == false) {
            humanWinner();
        } else {
            return
        }
        win = true;
    } else if (computerScore == 5) {
        if (win == false) {
            computerWinner();
        } else {
            return
        }
        win = true;
    }

    updateScoreUi();

    return roundResult;
}

function humanWinner() {
    const container = document.querySelector('#container');
    const p = document.createElement('p');
    p.id = "score";
    p.style.color = 'red';
    p.textContent = 'You win!';
    container.appendChild(p);
}

function computerWinner() {
    const container = document.querySelector('#container');
    const p = document.createElement('p');
    p.id= "score";
    p.style.color = 'red';
    p.textContent = 'Computer wins!';
    container.appendChild(p);
}

function updateScoreUi() {
    const human = document.getElementById('human');
    const computer = document.getElementById('computer');
    human.textContent = humanScore;
    computer.textContent = computerScore;
}

function restartGame(e) {
    const playerSelection = e.target.id;
    if (playerSelection == "restart") {
        humanScore = 0;
        computerScore = 0;
        const score = document.querySelector('#score');
        score.remove();
        win = false;
    }
    updateScoreUi();
}

window.addEventListener("click", function (e) {
    const result = playRound(e);
    const restart = restartGame(e);
    console.log(result);
});