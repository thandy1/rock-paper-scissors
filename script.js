// Write the logic to get the computer choice
function getComputerChoice() {
    if (Math.random(Math.floor) >= 60) {
        return "Rock";
    } else if (Math.floor(Math.random() * 100) <= 30) {
        return "Paper";
    } else if (Math.floor(Math.random() * 100) >= 31 ) {
        return "Scissors";
    }
        
    }
// console.log(getComputerChoice());

// Write the logic to get the human choice choice
function getHumanChoice() {
    prompt("Rock, Paper, or Scissors?");
}
// Dont worry about handling invalid input, assume the input is correct
// console.log(prompt("Rock, Paper, or Scissors?")); returns correctly

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;
// Write the logic to play the entire game
function playGame() {
    // Write the logic to play single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == /rock/i && computerChoice == /rock/i) {
            console.log("Tie");
        } else if (humanChoice == /paper/i && computerChoice == /paper/i) {
            console.log("Tie");
        } else if (humanChoice == /scissors/i && computerChoice == /scissors/i) {
            console.log("Tie");
        } else if (humanChoice == /rock/i && computerChoice == /paper/i) {
            computerScore++;
            console.log("Paper beats Rock, Computer Wins!");
        } else if (humanChoice == /rock/i && computerChoice == /scissors/i) {
            humanScore++;
            console.log("Rock beats scissors, Human Wins!");
        } else if (humanChoice == /paper/i && computerChoice == /rock/i) {
            humanScore++;
            console.log("Paper beats rock, Human Wins!");
        } else if (humanChoice == /paper/i && computerChoice == /scissors/i) {
            computerScore++;
            console.log("Scissors beats paper, Computer Wins!");
        } else if (humanChoice == /scissors/i && computerChoice == /rock/i) {
            computerScore++;
            console.log("Rock beats scissors, Computer Wins!");
        } else if (humanChoice == /scissors/i && computerChoice == /paper/i) {
            humanScore++;
            console.log("Scissors beats paper, Human Wins!");
        } else {
            console.log("Game has stopped");
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); 
    playRound(humanSelection, computerSelection); 
    playRound(humanSelection, computerSelection); 
    playRound(humanSelection, computerSelection); 
    playRound(humanSelection, computerSelection); 
    playRound(humanSelection, computerSelection); 
}