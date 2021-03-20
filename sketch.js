var question1;
var database;
var gameState = 0;
var game;
var allPlayers;
var form;
var playerCount;
var player;


function setup(){
 createCanvas(800,800);
 database = firebase.database();
 game = new Game;
 game.getGameState();
 game.start();
}

function draw(){
 background(147,178,206);
 if(playerCount === 2){
    game.update(1);
 }
 if(gameState ===1){
    game.play();
 }

 
}