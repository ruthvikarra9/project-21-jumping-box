var square
var edges
var yellows,blues,reds,oranges
var music
function preload(){
  music=loadSound("music.mp3");
}
function setup() {
  createCanvas(800,600);
 

  yellows=createSprite(100, 580, 180, 20);
  yellows.shapeColor="yellow"; 

  blues=createSprite(300, 580, 180, 20);
  blues.shapeColor="blue"; 
  
  oranges=createSprite(500, 580, 180, 20);
  oranges.shapeColor="orange";  

  reds=createSprite(700, 580, 180, 20);
  reds.shapeColor="red"; 
  
square=createSprite(random(20,750),300,40,40);
square.shapeColor="white"
square.velocityX=4
square.velocityY=-3
}

function draw(){
  background("black");
  edges=createEdgeSprites();
square.bounceOff(edges[0]);
square.bounceOff(edges[1]);
square.bounceOff(edges[2]);
if(yellows.isTouching(square) && square.bounceOff(yellows)){
  square.shapeColor=yellows.shapeColor
}
if(blues.isTouching(square) && square.bounceOff(blues)){
  square.shapeColor=blues.shapeColor
  music.play()
}
if(oranges.isTouching(square) && square.bounceOff(oranges)){
  square.shapeColor=oranges.shapeColor
}
if(reds.isTouching(square) && square.bounceOff(reds)){
  square.shapeColor=reds.shapeColor
  music.stop()
  square.velocityX=0
  square.velocityY=0
}
  drawSprites();
}
