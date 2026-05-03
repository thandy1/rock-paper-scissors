"use strict"
// DOM references
const quitButton = document.getElementById("quit-button");
const choiceButtons = document.querySelectorAll(".choice-button");
const resultMessage = document.getElementById("result-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const roundIndicator = document.getElementById("round-indicator");
const playAgainButton = document.getElementById("play-again-button");
const choicesContainer = document.getElementById("choices-container");


// Declare the game state
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 1;


// Hand Map: each key beats it's value
const handMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if  (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function checkWinCondition() {
    if (playerScoreCount === 3) {
        choicesContainer.style.display = "none";
        resultMessage.textContent = "PLAYER WINS THE GAME!!!";
        playAgainButton.style.display = "block";
    } else if (computerScoreCount === 3) {
        choicesContainer.style.display = "none";
        resultMessage.textContent = "Computer Wins, Game Over...";
        playAgainButton.style.display = "block";
    }
}


function compareChoice(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultMessage.textContent = "It's a Tie!";
    } else if (handMap[playerChoice] === computerChoice) {
        playerScoreCount++;
        roundCount++;
        roundIndicator.textContent = roundCount;
        playerScore.textContent = playerScoreCount;
        resultMessage.textContent = "You Win!";
    } else {
        computerScoreCount++;
        roundCount++;
        roundIndicator.textContent = roundCount;
        computerScore.textContent = computerScoreCount;
        resultMessage.textContent = "Computer Wins!";
    }
}


function initializeGameState() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    roundCount = 1;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundIndicator.textContent = 1;
    resultMessage.textContent = "SELECT YOUR HAND";
    choicesContainer.style.display = "block";
    playAgainButton.style.display = "none";
}


function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    compareChoice(playerChoice, computerChoice);
    checkWinCondition();
}


// Event handles
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

quitButton.addEventListener("click", () => initializeGameState());

playAgainButton.addEventListener("click", () => initializeGameState());


// Initialize game state
initializeGameState();