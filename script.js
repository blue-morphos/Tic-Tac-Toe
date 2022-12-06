let turn = 1
const gameboardObject = (() => {
    let gameboardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    let gamespaces = document.querySelectorAll(".gamespace");
    for (let i = 0; i < 9; i++){
        gamespaces[i].addEventListener('click', addToArray);
        function addToArray(e){
            if (turn %2 != 0){
                marker = "X";
                e.target.style.color = "red";
            };
            if (turn %2 == 0){
                marker = "O";
                e.target.style.color = "blue";
            }
            e.target.innerHTML= marker;
            gameboardArray[i]=marker;
            turn++;
            console.log(turn)
            if (turn > 4 &&
                gameboardArray[0] == 
                gameboardArray[1] && 
                gameboardArray[1] == 
                gameboardArray[2]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[3] == 
                gameboardArray[4] && 
                gameboardArray[4] == 
                gameboardArray[5]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[6] == 
                gameboardArray[7] && 
                gameboardArray[7] == 
                gameboardArray[8]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[0] == 
                gameboardArray[3] && 
                gameboardArray[3] == 
                gameboardArray[6]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[1] == 
                gameboardArray[4] && 
                gameboardArray[4] == 
                gameboardArray[7]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[2] == 
                gameboardArray[5] && 
                gameboardArray[5] == 
                gameboardArray[8]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[0] == 
                gameboardArray[4] && 
                gameboardArray[4] == 
                gameboardArray[8]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardArray[2] == 
                gameboardArray[4] && 
                gameboardArray[4] == 
                gameboardArray[6]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn === 10){
                document.getElementById('result').innerHTML = "game over. It's a draw!";
            }
        } 
    }
    return {gameboardArray};
})();

function reset(){
    let gamespaces = document.querySelectorAll(".gamespace");
    for (let i = 0; i < 9; i++){
        gamespaces[i].innerHTML="";
        gameboardObject.gameboardArray[i]=[i];
    }
    return turn=1;
}