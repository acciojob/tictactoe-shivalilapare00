//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let turnName = "";

document.getElementById("submit").addEventListener("click", () => {
    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    if (player1 === "" || player2 === "") {
        alert("Please enter both names!");
        return;
    }

    document.getElementById("input-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");

    turnName = player1;
    updateMessage();
});

const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => makeMove(cell));
});

function makeMove(cell) {
    if (cell.innerText !== "") return; // Prevent overwrite

    cell.innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById("message").innerText =
            `${turnName}, congratulations you won!`;
        disableBoard();
        return;
    }

    switchTurn();
}

function switchTurn() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
        turnName = player2;
    } else {
        currentPlayer = "X";
        turnName = player1;
    }
    updateMessage();
}

function updateMessage() {
    document.getElementById("message").innerText = `${turnName}, you're up`;
}

function disableBoard() {
    cells.forEach(c => c.style.pointerEvents = "none");
}

function checkWinner() {
    const winPatterns = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,8]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return (
            document.getElementById(a).innerText !== "" &&
            document.getElementById(a).innerText === document.getElementById(b).innerText &&
            document.getElementById(b).innerText === document.getElementById(c).innerText
        );
    });
}

