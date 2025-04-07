// Global score variables
let humanScore = 0;
let computerScore = 0;

// Get references to DOM elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if (humanScore >= 5 || computerScore >= 5) {
        return; // Game is already over
    }

    let result;
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Update display
    updateDisplay(result);
    checkWinner();
}

// Function to update the display
function updateDisplay(roundResult) {
    resultsDiv.innerHTML = `
        <p>${roundResult}</p>
        <p>Score - You: ${humanScore}, Computer: ${computerScore}</p>
    `;
}

// Function to check and announce winner
function checkWinner() {
    if (humanScore >= 5) {
        resultsDiv.innerHTML += '<p>You win the game!</p>';
        disableButtons();
    } else if (computerScore >= 5) {
        resultsDiv.innerHTML += '<p>You lose the game!</p>';
        disableButtons();
    }
}

// Function to disable buttons when game ends
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Add event listeners to buttons
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));
