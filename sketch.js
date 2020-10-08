 
var canvas,backroundImage,gameState=0,playerCount;
var player,form,game;
var database


function setup() {
  canvas=createCanvas(400,400);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}