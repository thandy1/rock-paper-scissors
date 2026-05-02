// DOM references
const quitButton = document.getElementById("quit-button");
const choiceButtons = document.querySelectorAll(".choice-button");
const resultDisplay = document.getElementById("result-display");
const resultMessage = document.getElementById("result-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const roundIndicator = document.getElementById("round-indicator");


// Game state
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 0;


// Event handles
choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});


quitButton.addEventListener("click", function() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    roundCount = 1;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundIndicator.textContent = 1;
    resultMessage.textContent = "";
});


// Win conditions: each key beats it's value
const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if  (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    compareChoice(playerChoice, computerChoice);
}


function compareChoice(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultMessage.textContent = "It's a Tie!";
    } else if (winConditions[playerChoice] === computerChoice) {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
        resultMessage.textContent = "You Win!";
    } else {
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        resultMessage.textContent = "Computer Wins!";
    }
}