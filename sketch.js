var wall ,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200,thickness,400/2);
  fill(80,80,80);

  bullet = createSprite(50,200,70,20);
 
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;
  
}

function draw() {

  background(255,255,255);

  bullet.collide(wall);

  if(hasCollided(bullet , width)){

    bullet.velocityX = 0;
    var damage= 0.5* weigth* speed* speed/(thickness*thickness*thickness);

    if(damage>10){

       wall.shapeColor = color(255,0,0);

      }

    if(damage<10){

      wall.shapeColor = color(0,255,0);

    }

  }

 
   
  drawSprites();
}


function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){

     return true
    
    }
    
    return false 

}