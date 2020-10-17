var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine, world, ground, object


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world =engine.world;

var ground_option = {isStatic : true }
ground = Bodies.rectangle(400,390,800,10, ground_option)

World.add(world,ground);
var object_option = {restitution : 1 }
object = Bodies.circle(400,200,20, object_option)
World.add(world,object);

Engine.run(engine);
}

function draw() {
  background('purple');  
 rectMode (CENTER);
 fill('black')
 rect(ground.position.x, ground.position.y, 800, 10)

ellipseMode (RADIUS);
 fill('white')
 ellipse(object.position.x, object.position.y, 20, 40)
}
