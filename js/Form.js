class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
      }

    Display(){
        var title = createElement("h2")
        title.html("CeaseFire")
        title.position(displayWidth/2 - 50,10);
        this.input.position(130,160);
        this.button.position(displayWidth/2 - 20,displayHeight-200)
        var Solo = createButton("Solo")
        Solo.position(displayWidth/2 - 140,displayHeight-300)
        var Duos = createButton("Duos")
        Duos.position(displayWidth/2 - 90,displayHeight-300)
        var Trios = createButton("Trios")
        Trios.position(displayWidth/2 + 50,displayHeight-300)
        var Squads = createButton("Squads")
        Squads.position(displayWidth/2 + 100,displayHeight-300)
        var Training = createButton("Training")
        Training.position(displayWidth/2 - 30,displayHeight-300)

        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()

            player.name = this.input.value()
            player.index = playerCount;
            this.greeting.html("Hello " + player.name + ", Welcome to CeaseFire")
            this.greeting.position(130,160)
            playerCount = playerCount + 1
            player.updateCount(playerCount)
            player.update()
        })
    }
}