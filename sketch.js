
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var parede, bola2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var parede_options ={
     isStatic: true
   }
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(90,10,20,ball_options);
  World.add(world,ball);
  
  parede = Bodies.rectangle(100,200,200,20, parede_options);
  World.add(world, parede);

  bola2 = Bodies.circle(100,10,30,ball_options);
  World.add(world, bola2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(parede.position.x, parede.position.y, 100, 20);
  ellipse(bola2.position.x, bola2.position.y,30)
 


  
  
}

