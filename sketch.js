var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxside1,boxside2,boxside3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxside1 = new Box(100,400,200,20);
	boxside1.shapeColor=("red");

	boxside2 = new Box(110,400,20,100);
	boxside2.shapeColor=("red");

	boxside3 = new Box(90,400,20,100);
	boxside3.shapeColor=("red");

	packageSprite=createSprite(120,200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX=2;
	///Matter.Body.setStatic(packageSprite,true);

	helicopterSprite=createSprite(widht/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helicopterSprite.velocityX=2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageSprite,false);
    
  }
}



