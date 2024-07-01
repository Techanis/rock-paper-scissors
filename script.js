// console.log("Prueba");

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
            choice = "scissor"
            break;
        default:
            return "Error"
    }

    return choice;
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = 0;
    console.log("Choose an option");
    console.log("1.- Rock");
    console.log("2.- Paper");
    console.log("3.- Scissor");
    choice=prompt("write the number only: ");
}

getHumanChoice();

