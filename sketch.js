const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,685,800,20);
	tree = new Tree(500,10,300,700);
	boy = new Boy(50,500,225,250);
	stone = new Stone(250,600,50,50);
	mango1 = new Mango(600,320,40,40);
	mango2 = new Mango(570,220,40,40);
	mango3 = new Mango(700,300,40,40);
	mango4 = new Mango(630,200,40,40);
	mango5 = new Mango(750,230,40,40);
	mango6 = new Mango(660,100,40,40);
	chain= new Chain(stone.body,boy.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  ground.display();
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function detectCollision(lstone,lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if (distance<= lmango.r + lstone.r) {
Matter.Body.setStatic(lmango.body,false); 
  }
}