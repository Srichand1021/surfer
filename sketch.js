
var path
var surfer_running

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  bombImage = loadImage("bomb.png");
  coinImage = loadImage("coin.png");
  energyDrinkImage = loadImage("energyDrink.png");
  powerImage = loadImage("power.png");
  runner1Image = loadImage("Runner-1.png");
  runner2Image = loadImage("Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite("200,200");
  path.addAnimation(pathImage);
  path.setVelocityY = 4;
  path.scale = 1.2;
  surfer = createSprite("200,200");
  surfer_running = loadAnimation("Runner-1.png,Runner-2.png");
  if(path.y > 400){
    path.y = height/2;
  }
  invisbleLeft = createSprite(200,50,200,20);
  invisibleLeft.visible = false;
  invisibleRight = createSprite(350,200,200,20);
  invisibleRight.visible = false;

}

function draw() {
  background(0);

}
