const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dropper1;
var backgroundImg;
var backgroundSound;
var muteButton;
var brick,brick1,brick2,brick3,brick4; //more brick vairents avilable soon

function preload(){

backgroundImg = loadImage("Image/Background.jpg");
backgroundSound = loadSound("Music/Background.mp3");

backgroundSound.looping = true;
}

function setup() {
  createCanvas(1200,680);

  engine = Engine.create();
  world = engine.world;

  muteButton = createImg("Image/Mute.png");
  muteButton.position(1150,10);
  muteButton.size(50,50);
  muteButton.mouseClicked(mute)

  ground = new Dropper(50,670,2300,20);
  dropper1 = new Dropper(500,10,100,20);
  brick = new Brick(220,30,30,10);
  brick1 = new Brick(240,30,10,30);
  brick2 = new Brick(260,30,40,40);
  brick3 = new Brick(280,30,50,30);
  brick4 = new Brick(280,30,80,70);
}


function draw() 
{
  background(51);
  image(backgroundImg,600,300,width,height);
  imageMode(CENTER)

  Engine.update(engine);
  ground.show();
  dropper1.show();
  brick.show();
  brick1.show();
  brick2.show();
  brick3.show();
  brick4.show();
}

function keyPressed() {

if (keyCode === 37){

}

if (keyCode === 87) {
  
  }



}

function mute(){

if (backgroundSound.isPlaying()){
backgroundSound.stop();
backgroundSound.looping = false;
}
else {
backgroundSound.play();
backgroundSound.looping = true
}

}