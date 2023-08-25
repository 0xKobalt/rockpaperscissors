function getComputerChoice(){
    let random = Math.random();
    if(random < 0.3){
        return "rock";
    }else if(random < 0.6){
        return "paper";
    }else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "rock"){
        return 0;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return 1;
    }else if (playerSelection == "rock" && computerSelection == "scissor"){
        return 2;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return 3;
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        return 4;
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return 5;
    }else if (playerSelection == "scissor" && computerSelection == "rock"){
        return 6;
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return 7;
    }else if (playerSelection == "scissor" && computerSelection == "scissor"){
        return 8;
    }
}

function game(){
    let human = 0;
    let computer = 0;    
    let computerSelection = getComputerChoice();
    let playerSelection = prompt();

    while(human <= 5 || computer <= 5){
        switch (playRound(playerSelection, computerSelection)){
            case 0:
                console.log("Tie");
                computerSelection = getComputerChoice();
                playerSelection = prompt()
            case 1:
                console.log("Computer wins!");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
                computer++;
            case 2:
                console.log("You win!");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
                human++;
            case 3:
                console.log("You win!");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
                human++;
            case 4:
                console.log("Tie");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
            case 5:
                console.log("Computer wins!");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
                computer++;
            case 6:
                console.log("Computer wins!");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
                computer++;
            case 7:
                console.log("You win!");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
                human++;
            case 4:
                console.log("Tie");
                computerSelection = getComputerChoice();
                playerSelection = prompt();
        }
    }

    if(human > computer){
        console.log("You win the game");
    }else{
        console.log("Computer wins the game");
    }
}

game();
