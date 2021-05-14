
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var side1 , side2, base  ;

var ground , paper ;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    side1 = new Dustbin(790,300,20,120);
	side2 = new Dustbin(960,300,20,120);
	base = new Dustbin(880,350,170,20);

	ground = new Ground(600,370,1200,20);

	paper = new Paper(400,300,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

side1.display();
side2.display();
base.display();
ground.display();
paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}



