class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.title = createElement('h1');
        this.reset = createButton("Reset");
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Multiplayer Running Game");
        this.title.position(displayWidth/2 - 200, 10);

        this.input.position(displayWidth/2 - 125,displayHeight/3 - 50);
        this.button.position(displayWidth/2 - 65, displayHeight/3 + 20);
        this.reset.position(displayWidth-100,20);

       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;

            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello, " + player.name);
            this.greeting.position(displayWidth/2 - 50, displayHeight/4);
        })

        this.reset.mousePressed(function(){
            player.updateCount(0);
            game.update(0);
        })
    }
}