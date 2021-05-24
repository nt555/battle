var gameState = 0;
var player
var playerSelection
var screen1,screen2

function preload() {
  screen1= loadImage("screen1.png")
  screen2= loadImage("screen2.png")


}
function setup() {
  createCanvas(displayWidth, displayHeight);
}
function draw() {
  
  if(gameState === 0) {
    background(screen1);
    textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("s")){
      gameState = 1
    }
  }
   
  if(gameState === 1) {
     background(screen2)
     textSize(20)
    fill("white")
    text(mouseX +","+ mouseY,mouseX,mouseY)
    if(keyDown("1")) {
      playerSelection = 1
    }
    if(keyDown("2")) {
      playerSelection = 2
    }
    if(keyDown("3")) {
      playerSelection = 3
    }
    if(playerSelection == 1) {
      fill("yellow")
      circle(235, 552, 50)
      player = createSprite(235, 552, 50, 50)
      player.shapeColor = "white"
      player.visible=false
    }
    if(playerSelection == 2) {
      fill("yellow")
      circle(542, 542, 50)
      player = createSprite(542, 542, 50, 50)
      player.shapeColor = "white"
      player.visible=false
    }
    if(playerSelection == 3) {
      fill("yellow")
      circle(854, 566, 50)
      player = createSprite(854, 566, 50, 50)
      player.shapeColor = "white"
      player.visible=false
    }
    if(keyDown("p")) {
      console.log("label 2")
      gameState = 2
    }
  
    if(gameState === 2){
      background("orange")
    }

   }
  drawSprites();
}
