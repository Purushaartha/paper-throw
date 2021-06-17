
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin;



function preload()
{

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

	ground = new Ground(600,height,1200,20);

     ball = new Ball(100,100);

     dustbin = new Dustbin(1000,370,100,150)
   
  

}


function draw() {
  rectMode(CENTER);
  background('white');
  Engine.update(engine);
  
  ground.display();
  ball.display();
  dustbin.display();

  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145})
  }
}



