const gameboardObject = (() => {
    let turn = 1;
    let gameboardArray = ["", "", "", "", "", "", "", "", ""];
    const displayController = (() => {
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
                gameboardArray[i]=marker;
                turn++;
            }
            for (j = 0; j < gameboardArray.length; j++){
                gamespaces[j].innerHTML = gameboardArray[j];
            }
        }
    })();
    return {gameboardArray, displayController}
})();


//Your players are also going to be stored in objects
//player object
//need multiple of these, so use a factory
function Player(name) {
    const getName = () => name;
    return { getName };
}

//you’re probably going to want an object to control the flow of the game itself.


//Build the functions that allow players to 
//add marks to a specific spot on the board, and then 
//tie it to the DOM, letting players click on the gameboard 
//to place their marker. Don’t forget the logic that keeps 
//players from playing in spots that are already taken!
//Think carefully about where each bit of logic 
//should reside. Each little piece of functionality 
//should be able to fit in the game, player or gameboard 
//objects.. but take care to put them in “logical” places.
// Spending a little time brainstorming here can make your 
//life much easier later!

//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

//Clean up the interface to allow players to put in their names, 
//include a button to start/restart the game and add a display
// element that congratulates the winning player!


