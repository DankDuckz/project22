const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball, ball2, ball3, ball4, ball5
var rope1, rope2, rope3, rope4, rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 1,
		friction: 0,
		density: 0.8
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(300,400,20,ball_options)
	ball2 = Bodies.circle(350,400,20,ball_options)
	ball3 = Bodies.circle(400,400,20,ball_options)
	ball4 = Bodies.circle(450,400,20,ball_options)
	ball5 = Bodies.circle(500,400,20,ball_options)

	World.add(world,ball);
	World.add(world,ball2);
    World.add(world,ball3);
    World.add(world,ball4);
    World.add(world,ball5);

	rope1 = new rope(ball,roof,-80,0)
	rope2 = new rope(ball2,roof,-40,0)
	rope3 = new rope(ball3,roof,0,0)
	rope4 = new rope(ball4,roof,40,0)
	rope5 = new rope(ball5,roof,80,0)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,22);

  //call display() to show ropes here
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

  //create ellipse shape for multiple bobs here
	ellipse(ball.position.x,ball.position.y,20,20)
	ellipse(ball2.position.x,ball2.position.y,20,20)
	ellipse(ball3.position.x,ball3.position.y,20,20)
	ellipse(ball4.position.x,ball4.position.y,20,20)
	ellipse(ball5.position.x,ball5.position.y,20,20)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode == UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:-50,y:-45})
	}
}