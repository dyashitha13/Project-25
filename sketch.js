var paper;
var dustbin1, dustbin2, dustbin3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,height,800,25);
	paper = new Paper();
	dustbin1 = new Dustbin(700,675,150,20);
	dustbin2 = new Dustbin(620,621,20,130);
	dustbin3 = new Dustbin(780,620,20,130);

	Engine.run(engine);
		
}

function draw() {
  rectMode(CENTER);
  background(6,79,158);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
		
	Matter.Body.applyForce(paper.body, paper.body.position,{x:75, y:-85});
	   
    }
}