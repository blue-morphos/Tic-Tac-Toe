//Your main goal here is to have as little global code as possible. 
//Try tucking everything away inside of a module or factory. 
//Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
//If you need multiples of something (players!), create them with factories.

//You’re going to store the gameboard as an array inside of a Gameboard object, so start there!
//Gameboard object 
    //gameboard array 
//need one of this, so use a module
const gameboardObject = (() => {
    let gameboardArray = ["", "", "", "", "", "", "", "", ""];
    return {gameboardArray}
})();


//Your players are also going to be stored in objects
//player object
//need multiple of these, so use a factory
function Player(name) {
    const getName = () => name;
    return { getName };
}

//you’re probably going to want an object to control the flow of the game itself.
//


//function that will render the contents 
//of the gameboard array to the webpage
const displayController = (() => {
    let gamespaces = document.querySelectorAll(".gamespace");
    for (i = 0; i < 9; i++){
        console.log(gameboardObject.gameboardArray[i]);
        gamespaces[i].innerHTML = gameboardObject.gameboardArray[i];
        gamespaces[i].addEventListener('click', addToArray)
    }
})();


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
function addToArray(e){
    gameboardObject.gameboardArray.shift();
    gameboardObject.gameboardArray.push("x");
   console.log(gameboardObject.gameboardArray);
    e.target.innerHTML= "X";
}
//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

//Clean up the interface to allow players to put in their names, 
//include a button to start/restart the game and add a display
// element that congratulates the winning player!
