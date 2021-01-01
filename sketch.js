var score;
var sword,swordimg;

var play=1;
var over=0;
var gameState=play;

var fruit1img,fruit2img,fruit3img,fruit4img;

var enemyimg;

var gameoverimg,overSound;

var cutting;

function preload(){
  
  swordimg= loadImage("sword.png");
  
  fruit1img= loadImage("fruit1.png");
  fruit2img= loadImage("fruit2.png");
  fruit3img= loadImage("fruit3.png");
 fruit4img= loadImage("fruit4.png");
  
  enemyimg=loadImage("alien1.png");
  gameoverimg=loadImage("gameover.png");
  
  cutting=loadSound("knifeSwooshSound.mp3");
  overSound=loadSound("gameover.mp3");
}
function setup(){
  createCanvas(400,400);
  
  sword=createSprite(20,40,10,10);
  sword.addImage(swordimg);
  sword.scale=0.7;
 
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  score=0;
   
}
function draw(){
   background("blue");
 
   
 
  if (gameState===play){
    fruits();
  enemys();
 sword.x=World.mouseX;
  sword.y=World.mouseY;
    
    if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
      cutting.play();
    score=score+2;
     
     }
    
     if(enemyGroup.isTouching(sword)){
       gameState=over;
       overSound.play();
       }
    
    
    
    
  }else if(gameState===over){
    sword.addImage(gameoverimg);
    sword.scale=1.3;
    sword.x=200;
    sword.y=200;
    //gameoverimg.visible=true;
    
     
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
   
           
           }
  
     text("score:"+score,200,50);
  
 
  drawSprites();


}
function fruits(){
  if(frameCount %50===0){
    
   position=Math.round(random(1,2));
    fruit=createSprite(400,200,10,10);
      
    if (position==1){
        fruit.x=400;
      fruit.velocityX=-(7+(score/4))
        }
    else if (position==2){
       fruit.x=0;
      fruit.velocityX=(7+(score/4))
    }
    
    
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1img);
      fruit.scale=0.3;
     
    } else if (r==2){
       fruit.addImage(fruit2img);
      fruit.scale=0.2;
      
    }else if (r==3){
       fruit.addImage(fruit3img);
      fruit.scale=0.2;
      
    }else if (r==4){
       fruit.addImage(fruit4img);
      fruit.scale=0.2;
     
    }
   
    
    
    
    fruit.y=Math.round(random(50,350));
     
    
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
    
     
     }
}
function enemys(){
  if(frameCount%100===0){
  enemy=createSprite(400,200,10,10);
    
   enemy.addAnimation("enemy",enemyimg);
  
     enemy.y=Math.round(random(100,300));
  
    enemy.velocityX=-(8+(score/10));
    enemy.setLifetime=50;
    enemyGroup.add(enemy);
    
    
  }
}







