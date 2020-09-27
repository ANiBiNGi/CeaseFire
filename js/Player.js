class Player{
    constructor(){
        this.name = null;
        this.score = 0;
        this.index = null;
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            score:this.score            
        })
    }

    static getplayerinfo(){
        var playerinfo = database.ref("players")
        playerinfo.on("value", (data) =>{
          allPlayers = data.val();
        })
      }

}