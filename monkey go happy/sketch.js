var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
  monkey = createSprite(80,315 ,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  score = 0;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
 
}


function draw() {
background("white");
textSize(30);
text("survival time :"+score,50,50);
score = Math.ceil(frameCount);
  
if (monkey.isTouching(obstacleGroup)){
  monkey.velocityX = 0;
  FoodGroup.setVelocityXEach (0) ;
  obstacleGroup.setVelocityXEach (0);
  ground.velocityX = 0;
  FoodGroup.setLifetimeEach (-1);
  obstacleGroup.setLifetimeEach (-1) ;
}
  
if (ground.x<0){

  
  
  ground.x = ground.width/2
}
if(keyDown("space")){
  monkey.velocityY = -12
}
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  drawSprites();
     
}

function bananas(){
 if(frameCount%80 === 0 ) {
    banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.y = random(120,200);
    monkey.depth = banana.depth + 1;
    banana.velocityX = -4; 
    banana.scale = 0.05
    banana.lifetime = 300;
   FoodGroup.add(banana);
 }

}

function obstacles(){
  if(frameCount%300 === 0){
  obstacle = createSprite(100,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.1;
  obstacle.lifetime = 100;
  obstacleGroup.add(obstacle)
  
  }  
}













