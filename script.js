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

console.log(getComputerChoice());