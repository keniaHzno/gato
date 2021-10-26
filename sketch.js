var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
  
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/.png");
   tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;
  tom.debug=false;
  tom.setCollider("rectangle",0,0,1000,470);

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
  jerry.debug=false;
    jerry.setCollider("rectangle",0,0,800,0);


}

function draw() {

    background(bg);

    if(tom.collide(jerry)) { 
      //cambiar animaciòn
      tom.changeAnimation("tomRunning",tomImg3);
      jerry.changeAnimation("jerryRunning",jerryImg3);
        tom.velocityX = 0; 
        jerry.velocityX = 0; 

    }  
    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}