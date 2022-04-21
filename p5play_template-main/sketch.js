var quadrado 
function setup() {
  createCanvas(400,400);
  quadrado = createSprite(100,100,50,50)
}


function draw() 
{
  
  background(168,134,224);

  if(keyIsDown(RIGHT_ARROW)){
 quadrado.position.x = quadrado.position.x +4

  }
  if(keyIsDown(LEFT_ARROW)){
    quadrado.position.x = quadrado.position.x -4
   
     }
   if(keyIsDown(UP_ARROW)){
     quadrado.position.y = quadrado.position.y -4
    
      }

      if(keyIsDown(DOWN_ARROW)){
        quadrado.position.y = quadrado.position.y +4
       
         }





  drawSprites();
}




