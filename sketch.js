const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,  dustbin1, dustbin2, dustbin3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
    paper = new Paper(100,100,20,20);
    
	ground = new Ground(400,height,800,25)
	
	dustbin1 = new dustbin(550,350,200,20);
	dustbin2 = new dustbin(550,370,20,100);
	dustbin3 = new dustbin(550,330,20,100);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  paper.display();
  ground.display();
  dustbin1.diplay();
  dustbin2.diplay();
  dustbin3.diplay();

}

function keyPreseed(){
if( keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})	
   }
}





