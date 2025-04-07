// Variables globales pour suivre les scores
let humanScore = 0;
let computerScore = 0;

// Fonction qui génère un choix aléatoire pour l'ordinateur
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fonction qui récupère le choix du joueur
function getHumanChoice() {
    let choice = prompt("Choisissez rock, paper ou scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Entrée invalide. Choisissez rock, paper ou scissors:").toLowerCase();
    }
    return choice;
}

// Fonction qui joue une manche
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

// Fonction qui joue 3 manches et affiche le résultat final
function playGame() {
    for (let i = 0; i < 3; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    let result;
    if (humanScore > computerScore) {
        result = "You win the game!";
    } else if (computerScore > humanScore) {
        result = "You lose the game!";
    } else {
        result = "The game is a tie!";
    }
    console.log(result);
    return result;
}

// Démarrer le jeu
console.log(playGame());