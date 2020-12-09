
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var block;

var boy;
var boy_img;

var tree_img;

var ball;

var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;

var tree;
var tree_img;

function preload()
{
	boy_img = loadImage("sprites/boy.png");
	tree_img = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block = new Ground(450,690,1200,5);

	boy = createSprite(200,630,10,10);
	boy.addAnimation("player",boy_img);
	boy.scale = 0.1;

	ball = new Stone(150,565);

	tree = createSprite(670,420,600,600);
	tree.addAnimation("tree",tree_img)
	tree.scale = 0.5;

	mango1 = new Mango(570,200);
	mango2 = new Mango(700,200);
	mango3 = new Mango(600,300);
	mango4 = new Mango(670,320);
	mango5 = new Mango(540,300);
	mango6 = new Mango(800,300);

	string = new Chain(ball.body, {x:150, y:570});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();
  block.display();
  ball.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectcollision(ball,mango1);
  detectcollision(ball,mango2);
  detectcollision(ball,mango3);
  detectcollision(ball,mango4);
  detectcollision(ball,mango5);
  detectcollision(ball,mango6);
  
  string.display();
  
}

function mouseDragged () { 
    Matter.Body.setPosition (ball.body, {x: mouseX, y: mouseY}) 
} 

function mouseReleased(){
	string.fly(ball.body)
}

function detectcollision(ball,mango1){
	mango1BodyPosition = mango1.body.position
	ballBodyPosition = ball.body.position

	var distance = dist(ballBodyPosition.x , ballBodyPosition.y,
					    mango1BodyPosition.x, mango1BodyPosition.y)
		
		if(distance <= 1){
			Matter.Body.setStatic(mango1.body,false);
		}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(ball.body, {x:150, y:570})
		string.attach(ball.body);
	}
}






