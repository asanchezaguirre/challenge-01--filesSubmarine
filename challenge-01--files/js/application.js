/**
*
* The company Nav-G, Ltd., has decided to develop a prototype of the minisubmarine game,
* for this the development team has the following requirements:
*
* - It's neccesary to have a function that executes an event in the DOM to start the game.
* - It is necessary to have a function that starts the game, which will have two nested
*   functions:
*
* - A function to detect DOM event for every cell board.
* - A function for matching values of player with submarines positions.
*
* - It's neccesary to have a function to generate positions of two submarines for destroying them.
* - It's neccesary to have a function for getting destroyed submarines or winner. This
*   function will show score of submarines destroyed and in case of destroying the 
*   two submarines, it will show the message 'winner'.
* - It's neccesary to have a function to generate dinamically the board.
*
*
* For these requirements, the team has already considered a code structure that must be followed.
*
**/

/***code goes here****/


//startGame function
function startGame() {
  //variable with positions of submarines for destroying them
  var positions = randomCell();
  //eventClick function to detect DOM event for every cell board
  eventClick(positions)
    //document.querySelector(".container").addEventListener('click', eventClick());

  //eventClick function
  function eventClick(submarinePositions) {
    //What should go here to detect DOM event for every cell board?
    //
     var buttons = document.querySelectorAll('.cell');
     //console.log(buttons);
      buttons.forEach(function(button){
       button.addEventListener('click', function(e){
       console.log(e.target.id);
       matcher = (e.target.id, submarinePositions) 
      })
})
        //What should go here for matching values of player with submarines positions?
      
  }


  //matcher function
  function matcher(playerValue, subValue) {
    //What conditional should go here to alert 'Game Over'?

    //What conditional should go here for matching values of player with submarines positions
    //and show 'red' cells and 'X' cells?

    //What should go here for getting destroyed submarines or winner?
    
  }
}

//score function
function score(value) {
  
  if (value <= 2){
    //What should go here to show the number of submarines destroyed?

  }
  if (value == 2){
    //What should go here to show if the player is a winner?

  }
}

//board function
var board = function() {
  //What should go here to dynamically show the board cells?
  //validacion para que no vuelva a crear los divs
  if()
  
    for (var i = 0; i < 9; i++){
      var contenedor = document.querySelector('#container');
      contenedor.innerHTML += '<div class="cell" id=' + i + '></div>'
    }
}
//reset boardver codigo


  
var randomCell = function() {
  //call board function to generate dinamically board
  board();
  //get positions of two submarines
  var subOne = Math.floor(Math.random()* 9)
  var subTwo = Math.floor(Math.random()* 9)


  var valueSubOne = "c" + subOne;
  var valueSubTwo = "c" + subTwo;
 
  return [valueSubOne, valueSubTwo];
}

 
  

//function to execute DOM event for starting game
function executeGame() {
document.querySelector("#play").addEventListener('click', startGame);


}


executeGame();
