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
// Write the logic to get the human choice choice
// console.log(getComputerChoice());