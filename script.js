let player1, player2, playerTurn;
let playerName = document.getElementById("player-name");
let playerNum = document.getElementById("player-num");

let submitButton = document.getElementById("submit");
let inputName = document.getElementById("player-name");

submitButton.addEventListener("click", (event) => {
    if(playerNum.innerText == "1"){
        player1 = playerName.value;
        console.log(player1);
        playerName.value = "";
        playerNum.innerText = "2"
    }else{
        player2 = playerName.value;
        console.log(player2);
        submitButton.disabled = true;
        inputName.disabled = true;
        playerName.value = "";
        startGame();
    }
})

function startGame(){

}

let camps = document.querySelectAll(".camp");

camps.addEventListener("click", (event) => {

})
