
var gamestate="onsling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var ground1,ground2,launcher;
var bgimg;
var score = 0;


	function preload(){

		getbgimg();

	}


function setup() {
	createCanvas(1600,700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	polygon=new Polygon(150,350,20);
	block1=new Box(570,240,20,40)
	block2=new Box(590,240,20,40)
	block3=new Box(610,240,20,40)
	block4=new Box(630,240,20,40)
	block5=new Box(650,240,20,40)
	block6=new Box(670,240,20,40)
	block7=new Box(690,240,20,40)
	block8=new Box(620,190,20,40)
	block9=new Box(640,190,20,40)
	block10=new Box(660,190,20,40)
	block11=new Box(600,190,20,40)
	block12=new Box(610,140,20,40)
	block13=new Box(630,140,20,40)
	block14=new Box(650,140,20,40)
	block15=new Box(630,100,20,40)
	

	ground1=new Ground(650,290,200,6)
    
	slingshot=new Sling(polygon.body,{x:220,y:250})
	
	Engine.run(engine);
  
}

console.log("press backspace to reset mango position")

function draw() {
  
  if(bgimg)
  background(bgimg);
  

  
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width/2, 50)
  
  Engine.update(engine);
  polygon.display();
  

  slingshot.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
fill("green")
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display()
  block10.score();
  block11.display();
  block11.score();
  fill("blue")
  block12.display();
  block12.score();
  block13.display();
  block15.score();
  block14.display();
  block14.score();
  fill("grey");
  block15.display();
  block15.score();
  ground1.display();


  

  drawSprites();
 
}


function mouseDragged() 
{
	if(gamestate!=="launched"){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
 
    }}

	function mouseReleased(){
		slingshot.fly();
		gamestate="launched";
		
		
	}
	
	function keyPressed(){
		if(keyCode === 32){
			slingshot.attach(polygon.body);
			Matter.Body.setPosition(polygon.body,{x:150, y:300});
		gamestate="onsling";
		
	
		
		}
	}

async function getbgimg(){

var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON =await response.json();
var datetime =responseJSON.datetime
var hour=datetime.slice(11,13);

if(hour>=6 && hour <=19){
bg= "Night.jpg";}
else{

	bg= "dAY.jpg"

}
bgimg=loadImage(bg);
}







