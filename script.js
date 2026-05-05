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
const handDisplay = document.getElementById("hand-display");
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");


// Globals to track game state.
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 1;
let isAnimating = false;


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
 * Checks if either player or computer has reached 2 wins to end the game.
 * Updates the UI to show the winner and hide game elements.
 */
function checkWinCondition() {
    if (playerScoreCount === 2) {
        choices.style.display = "none";
        quitButton.style.display = "none";
        resultMessage.textContent = "PLAYER WINS THE GAME!!! 🎉";
        playAgainButton.style.display = "block";
    } else if (computerScoreCount === 2) {
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
        roundIndicator.textContent = Math.min(roundCount, 3);
        playerScore.textContent = playerScoreCount;
        resultMessage.textContent = "You Win!";
    } else {
        computerScoreCount++;
        roundCount++;
        roundIndicator.textContent = Math.min(roundCount, 3);
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
    playerHand.textContent = "✊";
    computerHand.textContent = "✊";
}


// Helper function to retrieve hand(s) for UI updates.
const getEmoji = (choice) => {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "🖐";
    if (choice === "scissors") return "✌️";
}


// Plays a round of the game with the given player and computer choice.
function playGame(playerChoice, computerChoice) {
    compareChoice(playerChoice, computerChoice);
    checkWinCondition();
}


/**
 * Plays the shaking animation for the player and computer hands. Prevents user from repeatedly clicking a choice button while the animation is playing. Uses a delay to provide the UI enough time to update the UI before the player can play another round.
 * @param {HTMLButtonElement} button - The clicked choice button. 
 */
function playAnimation(button) {
    if (isAnimating) return;
    let playerChoice = button.dataset.choice;
    let computerChoice = getComputerChoice();

    playerHand.textContent = "✊";
    computerHand.textContent = "✊";

    playerHand.classList.add("shake");
    computerHand.classList.add("shake");
    isAnimating = true;

    setTimeout(() => {
        playerHand.classList.remove("shake");
        computerHand.classList.remove("shake");
        playerHand.textContent = getEmoji(playerChoice);
        computerHand.textContent = getEmoji(computerChoice);
        playGame(playerChoice, computerChoice);
        isAnimating = false;
    }, 1000);
}


// Event Listeners
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => playAnimation(button));
});
quitButton.addEventListener("click", () => initializeGameState());
playAgainButton.addEventListener("click", () => initializeGameState());


// Initialize game state
initializeGameState();
