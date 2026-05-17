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
            btn.innerText = "0";
            playerTurnO = false;
        }
        else{
            btn.innerText = "X";
            playerTurnO = true;
        }
        btn.disabled = true;

        winner();
    });
});

const winner = () => {
    for(let pattern of winningPatterns){
        let position1 = buttons[pattern[0]].innerText;
        let position2 = buttons[pattern[1]].innerText;
        let position3 = buttons[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 == position2 && position2 == position3){
                console.log("Winner",position1);
            }
        }
    }
};

// pattern se pta lgega total pattern kitne h.
// pattern[0] , patterm[1] se pta lgta h k uss position k uss position me ane vale total patterns kitne h.
// winner() se pta lgta h k jb bhi ek button pe click kia jayega to vo button function ko call krega for checking winner.
// != se pta lgta h k koi bhi position khali na ho.
// == for checking every position is full and equal
// now have to build winner announcement message container.
// also build new game button.
