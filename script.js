// Write the logic to get the computer choice
function getComputerChoice() {
    if (Math.random() > 0) {
        return "Rock";
    } else if (Math.random() < 1) {
        return "Paper";
    } else {
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

// Write the logic to play single round
