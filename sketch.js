var player;
var player1
var choice1
var choice2
var choice3
var gameMode;
let pacmanImg;
let flappyImg;
let spaceImg;
let tgbImg;
let play;
let back;
let quit;
let gameLink;

let bgImg;
let pmanImg
function preload(){
  pacmanImg = loadImage('pacmanLg.png');
  flappyImg = loadImage('flappy_logo.png');
  spaceImg = loadImage('space_logo.png');
  tgbImg = loadImage('TGB.png')
  bgImg = loadImage('bg.jpg');
  pmanImg = loadImage('arcadePacman.png');
  flappyarcImg = loadImage('arcadeFlappy.png');
  spacearcImg = loadImage('arcadeSpace.png');
}
function setup() {
  createCanvas(600, 400);
   gameMode =0
  
  createPlayer();
  
  choice1 = createSprite(100, 150, 0, 20)
  choice1.shapeColor = color(255)
  choice1.addImage(pmanImg)
   
  choice2 = createSprite(300, 150, 100, 20)
  choice2.shapeColor = color(255)
  choice2.addImage(flappyarcImg)
  
  choice3 = createSprite(500, 150, 100, 20)
  choice3.shapeColor = color(255)
  choice3.addImage(spacearcImg)
  
  play = createButton('');
  link = createA("https://editor.p5js.org/horaciovaldes/present/tjIPSUk51u", "Play")
  link2 = createA("https://editor.p5js.org/horaciovaldes/present/g2QG90e6X", "Play")
  link3 = createA("https://editor.p5js.org/horaciovaldes/present/XTSVMBUuF", "Play")
  
  link.position(285,159)
  link2.position(285,159)
  link3.position(285,159)
  play.position(250, 160);
  
  play.size(100)
  play.mousePressed();
  link.hide();
  link2.hide();
  link3.hide();
  play.hide();
  
  back = createButton('Back');
  back.position(250, 200);
  back.size(100)
  back.mousePressed(mainMenu);
  back.hide();
  

  
}

function draw() {
  background(bgImg);
  
  if(player.overlap(choice1)){
    gameMode=1
  }
  if(gameMode ==1){
    gameOne();
  }
  
  if(player.overlap(choice2)){
    // choice2.remove();
  gameMode =2
  }
  if(gameMode ==2){
    gameTwo();
  }
 
  if(player.overlap(choice3)){
  gameMode =3;
  }
  if(gameMode ==3){
  gameThree();
  }
  
   if(gameMode ==0){
  
    drawSprites()
     
    link.hide();
  link2.hide();
  link3.hide();
  play.hide();
  back.hide();
  // text("Pac-Man", 75,15)
  // text("Flappy Bird", 270,15)
  // text("Space Invaders", 460,15)
     fill(255)
  textAlign(CENTER)
  textSize(20)
  text("Instructions: \n WASD or Arrow Keys to control player",300,360);
  textSize(15)
 
   }
  // print(gameMode)
}

function createPlayer(){
player = createSprite(300, 300, 20, 20)
  player.shapeColor = color(255)
  player.addImage(tgbImg)
}


function mainMenu(){
  gameMode=0
  createPlayer();
}


function gameOne(){
  // background('blue');
  image(pacmanImg,200,50)
  gameLink = "https://editor.p5js.org/horaciovaldes/present/jlvb4syEZ"
  fill(255)
  textAlign(CENTER)
  textSize(20)
  textSize(20)
  text("Instructions: \n WASD or Arrow Keys to control player",300,280);
  player.remove();
  play.show()
  back.show();
  link.show();
  
  
  
}

function gameTwo(){
  image(flappyImg,200,50)
    fill(255)

  textAlign(CENTER)
  textSize(20)
  textSize(20)
  text("Instructions: \n Spacebar to jump",300,280);
  player.remove();
  play.show()
  back.show();
  link2.show();
  
}

function gameThree(){
  // background('green');
  image(spaceImg,200,50)
    fill(255)

  textAlign(CENTER)
  textSize(20)
  // text("Instructions",300,350);
  textSize(20)
  text("Instructions: \n A&D or Left and Right Arrow Keys to control player \n  Space Bar to Shoot",300,280);
  player.remove();
  play.show()
  back.show();
  link3.show();
  
  
}
function keyPressed() {

  if (keyCode == LEFT_ARROW || key == "a") {
    player.velocity.x= -5
    
   
  } else if (keyCode == RIGHT_ARROW || key == "d") {
    player.velocity.x= 5
   
  }
  
  else if (keyCode == DOWN_ARROW || key == "s") {
    player.velocity.y= 5
    
  } else if (keyCode == UP_ARROW || key == "w") {
    player.velocity.y= -5
   
  }
}
function keyReleased() {

  if (keyCode == LEFT_ARROW || key == "a") {
    player.velocity.x= 0
   

  } else if (keyCode == RIGHT_ARROW || key == "d") {
    player.velocity.x= 0
}
  
  else if (keyCode == DOWN_ARROW || key == "s") {
    player.velocity.y= 0
  } else if (keyCode == UP_ARROW || key == "w") {
    player.velocity.y= 0
     



  }
}

