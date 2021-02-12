const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var bgImage
var world,engine;
var block

function preload() {
//preload the images here
//bgImage = loadImage("images/GamingBackground.png")


}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
engine = Engine.create()
world = engine.world
  block1 = new Block(20,20,30,30)
  block2= new Block(40,40,30,30)
  block3 = new Block(60,60,30,30)
  block4= new Block(80,80,30,30)
  block5 = new Block(100,100,30,30)
  block6 = new Block(120,120,30,30)
  block7 = new Block(140,140,30,30)
  block8 = new Block(160,160,30,30)
  block9 = new Block(180,180,30,30)
  block10 = new Block(200,200,30,30)
  block11 = new Block(220,220,30,30)
  block12 = new Block(240,240,30,30)
  block13 = new Block(260,260,30,30)
  block14 = new Block(280,280,30,30)
  block15 = new Block(300,300,30,30)

}

function draw() {
  background("white");
 Engine.update(engine)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();


}

