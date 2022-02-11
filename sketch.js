
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, balloptions;
 var rect1, rect2, rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
 
 
  ballopitions = {
   restitution:0.3,
   friction:0,
   density:1.2
  }
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   rect1 = new Ground(140,600,50,1500);
   rect2 = new Ground(650,525,100,10); 
   rect3 = new Ground(550,525,100,10);
   ball = Bodies.circle(200,200,20, balloptions);
	 World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("blue");
  
  rect1.show();
  rect2.show();
  rect3.show();
  circle(ball.position.x, ball.position.y, 20);
  drawSprites();
 //console.log(mouseX, mouseY);
}
function keyPressed(){

  if(keyDown("w")){

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05, y:-0.09});
    console.log('ja');
    }
}


