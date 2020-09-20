
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bannanaGroup, obstacleGroup;
var score, ground, survivalTime;
var bg, backgroundImage;
function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png")
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle2.jpg");
}



function setup() {
  createCanvas(400,400)

  bananaGroup= new Group();
  obstacleGroup = new Group();
  
  bg = createSprite(200,200,0,0)
  bg.addImage(backgroundImage);
  bg.scale=0.6;
  
  monkey = createSprite(20,200,20,20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,350,400,10);
  ground.visible= false;
}


function draw() {
   background(180);
  
  console.log(monkey.y);
  
   stroke("black");
   textSize(20);
   fill("black");
  
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 315.1) {
        monkey.velocityY = -15;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  bananas();
  obstacles();
  drawSprites();
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
}

function bananas(){
  if (frameCount % 80 === 0) {
    banana=createSprite(200,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-10;
    banana.lifetime=40;
    bananaGroup.add(banana);
  }
}
function obstacles(){
if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}