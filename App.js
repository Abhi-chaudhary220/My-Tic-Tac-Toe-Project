// Accessing by query methods.

const buttons = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".Reset");

let playerTurnO = true;

// Calculating WinningPatterns. 

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Accessing each button.

buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
        if(playerTurnO){
            btn.innerText = "O";
            playerTurnO = false;
        }
        else{
            btn.innerText = "X";
            playerTurnO = true;
        }

    })
})
