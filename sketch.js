var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var fallingstar,fallingstarImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fallingstarImg=loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	fallingstar=createSprite(650,160);
	fallingstar.addImage("fallingstar",fallingstarImg);  
	fallingstar.scale=0.05;


	

	
	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fallingstar.y=starBody.position.y;

  if(fairy.x>480&&fairy.x<530&&fallingstar.y>500) {;
	Matter.Body.setStatic(starBody, true); 
  }

  drawSprites();

}

function keyPressed() {
	//write code here
   if(keyCode===LEFT_ARROW){
	   fairy.x=fairy.x-10
	   
   }
   if(keyCode===RIGHT_ARROW){
	fairy.x=fairy.x+5
	console.log(fairy.x);
   }

  if(keyCode===DOWN_ARROW){
	console.log("hello");
	Matter.Body.setStatic(starBody, false);
	
	
  }
	
}

