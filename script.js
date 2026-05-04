"use strict"    // Directive tells the JS engine to user stricter rules to avoid JS very permissive behavior.
// DOM references
const quitButton = document.getElementById("quit-button");
const choiceButtons = document.querySelectorAll(".choice-button");
const resultMessage = document.getElementById("result-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const roundIndicator = document.getElementById("round-indicator");
const playAgainButton = document.getElementById("play-again-button");
const choices = document.getElementById("choices");


// Globals to track game state.
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 1;


// Hand Map: each key beats it's value.
const handMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


// Returns a random choice for the computer ("rock", "paper", "scissors")
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


/**
 * Checks if either player or computer has reached 3 wins to end the game.
 * Updates the UI to show the winner and hide game elements.
 */
function checkWinCondition() {
    if (playerScoreCount === 3) {
        choices.style.display = "none";
        quitButton.style.display = "none";
        resultMessage.textContent = "PLAYER WINS THE GAME!!! 🎉";
        playAgainButton.style.display = "block";
    } else if (computerScoreCount === 3) {
        choices.style.display = "none";
        quitButton.style.display = "none";
        resultMessage.textContent = "Computer Wins, Game Over...";
        playAgainButton.style.display = "block";
    }
}


/**
 * Compares the player's choice with the computer's choice and determines the winner.
 * Updates scores, round count, and result message accordingly.
 * @param {string} playerChoice - The player's selected choice ("rock", "paper", or "scissors")
 * @param {string} computerChoice - The computer's selected choice ("rock", "paper", or "scissors")
 */
function compareChoice(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultMessage.textContent = "It's a Tie!";
    } else if (handMap[playerChoice] === computerChoice) {
        playerScoreCount++;
        roundCount++;
        roundIndicator.textContent = Math.min(roundCount, 5);
        playerScore.textContent = playerScoreCount;
        resultMessage.textContent = "You Win!";
    } else {
        computerScoreCount++;
        roundCount++;
        roundIndicator.textContent = Math.min(roundCount, 5);
        computerScore.textContent = computerScoreCount;
        resultMessage.textContent = "Computer Wins!";
    }
}


/**
 * Resets the game state to initial values and updates the UI accordingly.
 * Used when starting a new game or quitting the current one.
 */
function initializeGameState() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    roundCount = 1;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundIndicator.textContent = 1;
    resultMessage.textContent = "SELECT YOUR HAND";
    choices.style.display = "grid";
    quitButton.style.display = "block";
    playAgainButton.style.display = "none";
}


// Plays a round of the game with the given player choice.
function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    compareChoice(playerChoice, computerChoice);
    checkWinCondition();
}


// When clicked, retrieves the player's choice from the button's data attribute and starts the game round.
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});


// Resets game state when clicked.
quitButton.addEventListener("click", () => initializeGameState());


// Resets the game state to start a new game when clicked.
playAgainButton.addEventListener("click", () => initializeGameState());


// Initialize game state
initializeGameState();