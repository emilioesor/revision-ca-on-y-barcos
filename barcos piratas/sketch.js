const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
   
  angle = -PI / 2;

  cañon = new  Cannon (158,155,230,180,angle); 

  torre = new Tower (150,350,160,310);
  torre2 = new Tower (800,270,120,230);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  torre.mostrar();
  torre2.mostrar();
   
  cañon.mostrar();


  Engine.update(engine);

 
}

