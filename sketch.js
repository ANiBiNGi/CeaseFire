var playerCount,database,form,player,game;

var gameState = 0;

var allPlayers,player1

var players
function preload()
{
	
}

function setup() {
createCanvas(displayWidth, displayHeight);

	database = firebase.database();
    game = new Game()
    game.getState()
    game.start()



	//Create the Bodies Here.
  
}


function draw() {
 if(playerCount === 1){
     game.update(1)
 }
 if(gameState === 1){
    clear()
    game.play()
 }
}



