class Game{
    constructor(){}
 
    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form;
            form.display();
        }

        player1 = createSprite(100,200);
        player1.addImage("img1",player1Img);
        player1.scale = 0.4;
        player2 = createSprite(300,200);
        player2.addImage("img2",player2Img);
        player2.scale = 0.45;
        player3 = createSprite(500,200);
        player3.addImage("img3",player3Img);
        player3.scale = 0.4;
        player4 = createSprite(700,200);
        player4.addImage("img4",player4Img);
        player4.scale = 0.4;
        players = [player1, player2, player3, player4];
    }

    play(){
        form.hide();

        sound1.play();

        Player.getPlayerInfo();
        Player.getPlayersAtEnd();

        if(allPlayers !== undefined){
            background('#c68767');

            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            var index = 0;
            var x = 175;
            var y;

            for(var plr in allPlayers){
                index = index + 1;

                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;

                players[index - 1].x = x;
                players[index - 1].y = y;

                if(index === player.index){
                    stroke(0);
                    fill(255,0,0)
                    ellipse(x,y,60,60);
                    //players[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = players[index-1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }

        if(player.distance > 3860){
            gameState = 2;
            player.rank += 1;
            Player.updatePlayersAtEnd(player.rank);
        }

        drawSprites();
    }

    end(){
        game.update(2);
        console.log("Game Ended");
    }
}