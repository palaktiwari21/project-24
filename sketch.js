
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground=new Ground(600,height,1200,20);

box1=new Dustbin(540,640,20,100);
box2=new Dustbin(760,640,20,100);
box3=new Dustbin(650,680,200,20);
ball=new Paper(100,200,20,80);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

  keyPressed();
  drawSprites();
   box1.display();
   box2.display();
   box3.display();
   ball.display();
   ground.display();
}

function keyPressed(){
 if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.Body,ball.Body.position,{x:85,y:-85});
}
}
