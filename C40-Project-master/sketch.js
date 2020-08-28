var canvas;

var gameState = 0;
var playerCount;

var database;

var form,player,game;

var allPlayers;

var players, player1, player2, player3, player4;

var player1Img,player2Img,player3Img,player4Img;

var sound1;

var track,ground;

function preload(){
    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png");
    player1Img = loadImage("images/Player1.png");
    player2Img = loadImage("images/Player2.png");
    player3Img = loadImage("images/Player3.png");
    player4Img = loadImage("images/Player4.png");
    sound1 = loadSound("sounds/Beach_Bum_Happy_Rock.mp3");
}

function setup(){
    canvas = createCanvas(displayWidth - 5, displayHeight -5);
    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }
}