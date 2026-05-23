const prompt = require('prompt-sync')();
console.log("welcome to RPS");

// Ditambahin .toLowerCase() biar lu bebas ngetik huruf gede/kecil
let player = prompt("Enter your choice: rock, paper, or scissors: ").toLowerCase();

let computer = Math.floor(Math.random() * 3) + 1;
let computerChoice = "";
const RPS = ["rock", "paper", "scissors"];

switch (computer) {
    case 1:
        computerChoice = "rock";
        break;
    case 2:
        computerChoice = "paper";
        break;
    case 3:
        computerChoice = "scissors";
        break;
    default:
        computerChoice = "error";
}

// Validasi input
if (!RPS.includes(player)) {
    console.warn("i don't remember that in the actual game");
} else {
    console.log("player = " + player);
    console.log("computer = " + computerChoice);

    // Jalankan logika penentu kemenangan cuma kalau inputnya valid
    if (player === computerChoice) {
        console.log("no one win! (SERI)");
    } else if (
        (computerChoice === "rock" && player === "paper") || 
        (computerChoice === "scissors" && player === "rock") || 
        (computerChoice === "paper" && player === "scissors")
    ) {
        console.log("player win!!");
    } else {
        console.log("computer win!!");
    }
}