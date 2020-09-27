class Game{
    constructor(){
        
    }

    play(){
      form.hide()
        text("Game Starts", 100, 100)
        Player.getplayerinfo() 
      if(allPlayers !== undefined){
        var index = 0;
        var x = 100;
        var y;
        for(var plr in allPlayers){
          index = index + 1;
          x = x + 200;
          y = displayHeight - allPlayers[plr].distance;
          players[index - 1].x = x;
          players[index - 1].y = y;
          if(index === player.index){
            //cars[index].shapeColor = "red";
            camera.position.x = displayWidth/2
            camera.position.y = players[index -1].y
          }
        }
      }
      
      if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance = player.distance + 50;
      player.update();
      }
      drawSprites();
      }


    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    
    start(){
        if (gameState === 0){
            form = new Form()
            form.Display()
            player = new Player()
            player.getCount()
        }
        player1 = createSprite(displayWidth/2, displayHeight/2+100,20,50)
        players = [player1];
    }
}