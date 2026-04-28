const startButton = document.getElementById("start-button");
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const homeButton = document.getElementById("home-button");

startButton.addEventListener(onclick, function() {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
});

homeButton.addEventListener(onclick, function() {
    mainMenu.style.display = "block";
    gameScreen.style.display = "none";
});
