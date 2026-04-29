// DOM references
const startButton = document.getElementById("start-button");
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const homeButton = document.getElementById("home-button");
const choiceButtons = document.querySelectorAll(".choice-button");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");


choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});


// Each key beats its value
const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}


startButton.addEventListener("click", function() {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
});


homeButton.addEventListener("click", function() {
    mainMenu.style.display = "block";
    gameScreen.style.display = "none";
});


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if  (computerChoice === 1) {
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
        // tie
    } else if (winConditions[playerChoice] === computerChoice) {
        // player wins
    } else {
        // computer wins
    }
}