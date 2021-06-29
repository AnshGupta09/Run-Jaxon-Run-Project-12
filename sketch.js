var path , pathImage ;
var runner , runner_running ;
var boundary1 , boundary2 ;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY=4;
  path.scale=1.2;

  boundary1=createSprite(20,20,80,900)
  boundary1.visible=false;
  boundary2=createSprite(390,300,80,900)
  boundary2.visible=false
  runner=createSprite(195,160,20,50);
  runner.addAnimation("running",runner_running);
  runner.scale=0.1;
}

function draw() {
  background(0);
  runner.x=mouseX
  if(path.y > 400){
    path.y= height/2
  }
  runner.collide(boundary1);
  runner.collide(boundary2);
  drawSprites();
}
