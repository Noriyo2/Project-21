const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var groundObj, leftSide, rightSide;
var ball;

function setup() {
  createCanvas(1500, 800);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2
  };

  groundObj = new Ground(width / 2, 670, width, 20);
  leftSide = new Ground(1100,600,10,120);
  rightSide = new Ground(1300,600,10,120);


  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);


  groundObj.display();
  leftSide.display();
  rightSide.display();

  fill("white");
  ellipse(ball.position.x, ball.position.y, 20);
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:20,y:-12})

	}
}

