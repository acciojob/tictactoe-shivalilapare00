let player1 = "";
let player2 = "";
let currentPlayer = "x";   // Cypress expects lowercase x and o
let turnName = "";

// When user clicks Start Game
document.getElementById("submit").addEventListener("click", () => {
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    if (player1 === "" || player2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Hide input screen, show board
    document.getElementById("input-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");

    turnName = player1;
    updateMessage();
});

// All cell click logic
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => handleMove(cell));
});

// Handle player move
function handleMove(cell) {
    if (cell.innerText !== "") return;  // prevent overwriting

    cell.innerText = currentPlayer;  // place x or o

    if (checkWinner()) {
        document.getElementById("message").innerText =
            `${turnName} congratulations you won!`;
        disableBoard();
        return;
    }

    switchTurn();
}

// Switch player turn
function switchTurn() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
        turnName = player2;
    } else {
        currentPlayer = "x";
        turnName = player1;
    }

    updateMessage();
}

// Update message box
function updateMessage() {
    document.getElementById("message").innerText = `${turnName}, you're up`;
}

// Disa
