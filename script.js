const gameboardObject = (() => {
    let gameboardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return {gameboardArray};
})();

const displayController = (() => {
    let turn = 1;
    let gamespaces = document.querySelectorAll(".gamespace");
    for (let i = 0; i < 9; i++){
        gamespaces[i].addEventListener('click', addToArray);
        function addToArray(e){
            if (turn %2 != 0){
                marker = "x";
            };
            if (turn %2 == 0){
                marker = "o"
            }
            e.target.innerHTML= marker;
            gameboardObject.gameboardArray[i]=marker;
            turn++;
            console.log(turn)
            if (turn > 4 &&
                gameboardObject.gameboardArray[0] == 
                gameboardObject.gameboardArray[1] && 
                gameboardObject.gameboardArray[1] == 
                gameboardObject.gameboardArray[2]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[3] == 
                gameboardObject.gameboardArray[4] && 
                gameboardObject.gameboardArray[4] == 
                gameboardObject.gameboardArray[5]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[6] == 
                gameboardObject.gameboardArray[7] && 
                gameboardObject.gameboardArray[7] == 
                gameboardObject.gameboardArray[8]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[0] == 
                gameboardObject.gameboardArray[3] && 
                gameboardObject.gameboardArray[3] == 
                gameboardObject.gameboardArray[6]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[1] == 
                gameboardObject.gameboardArray[4] && 
                gameboardObject.gameboardArray[4] == 
                gameboardObject.gameboardArray[7]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[2] == 
                gameboardObject.gameboardArray[5] && 
                gameboardObject.gameboardArray[5] == 
                gameboardObject.gameboardArray[8]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[0] == 
                gameboardObject.gameboardArray[4] && 
                gameboardObject.gameboardArray[4] == 
                gameboardObject.gameboardArray[8]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
            if (turn > 4 &&
                gameboardObject.gameboardArray[2] == 
                gameboardObject.gameboardArray[4] && 
                gameboardObject.gameboardArray[4] == 
                gameboardObject.gameboardArray[6]){
                document.getElementById('result').innerHTML = "game over. Winner: " + marker;
            }
        }
    }
})();