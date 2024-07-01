// console.log("Prueba");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    let choice = "";
    switch (i){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
        default:
            return "Error"
    }

    return choice;
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice;
    choice=prompt("Choose rock, paper or scissor: ");
    return choice;
}

// getHumanChoice();

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice){
    // 1 = win, 2 = lose, 3 = tie
    let result = 0;
    if (humanChoice === computerChoice){
        result = 3;
    } else if ( ((humanChoice === "rock") &&  (computerChoice === "scissors"))
        || ((humanChoice === "paper") &&  (computerChoice === "rock"))
        || ((humanChoice === "scissors") &&  (computerChoice === "scissor")) ){
        result = 1;
    } else {
        result = 2;
    }         
    console.log(result);
    switch (result){
        case 1 :
            console.log(`You win!! ${humanChoice} beats ${computerChoice}`);
            break;
        case 2 :
            console.log(`You lose!! ${humanChoice} is beaten by ${computerChoice}`);
            break;
        case 3 :
            console.log(`It's a tie!! You both choose ${computerChoice}`);
            break;
    }
}


playRound(humanChoice, computerChoice);