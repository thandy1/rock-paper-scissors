// Write the logic to get the computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // 0, 1, or 2
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
// console.log(getComputerChoice());

// Write the logic to get the human choice choice
function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    return userInput;
}
// Dont worry about handling invalid input, assume the input is correct
// console.log(prompt("Rock, Paper, or Scissors?")); returns correctly

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Write the logic to play single round
function playRound(humanChoice, computerChoice) {
    // Converts both human and computer choice strings to lowercase for case-insentive behavior
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();  
    // Refactor the case-insentive syntax and turn each choice into a lowercase string 
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Tie");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Tie");
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Tie");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Paper beats Rock, Computer Wins!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Rock beats scissors, Human Wins!");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Paper beats rock, Human Wins!");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Scissors beats paper, Computer Wins!");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Rock beats scissors, Computer Wins!");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Scissors beats paper, Human Wins!");
    } else {
        console.log("Game has stopped");
    }
}

// Write the logic to play the entire game
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: Human ${humanScore}, Computer: ${computerScore}`);
}

// Play the game # times
playGame();
playGame();
playGame();
playGame();
playGame();

