var board
var coin1 
var coin2
var bouncer
var boarder,boarder2,boarder3,boarder4
var barrier,goal1, goal2
var point,reset1
function preload()
{
  board=loadImage("background.jpg")
}

function setup() {

  createCanvas(1000,700);
 
  bg1=createSprite(500,350,200,100)
  bg1.addImage("bg1",board)
bg1.scale=3

coin1=createSprite(250,350,30,30)
coin1.shapeColour=("yellow")
coin2=createSprite(730,350,30,30)
bouncer=createSprite(500,350,20,20)

boarder=createSprite(500,93,850,10)
boarder.visible=false
boarder2=createSprite(500,600,850,10)
boarder2.visible=false
boarder3=createSprite(100,170,10,850)
boarder3.visible=false
boarder4=createSprite(900,200,50,850)
//boarder4.visible=false
barrier=createSprite(500,170,5,840)
barrier.visible=false
goal1=createSprite(150,350,30,60)
goal1=createSprite(830,350,30,60)
}

function draw() 
{
  background(51);
  movement();
  //reset()
  if(keyDown("space")){
    reset()
  }
bouncer.y = coin2.y;
  drawSprites();
//points()
}

function movement(){
  if(keyIsDown(UP_ARROW)){
coin1.velocityY=-2


  }
  //bouncer.positionY=coin2.positionY
  if(keyIsDown(DOWN_ARROW)){
    coin1.velocityY=+2

}
if(keyIsDown(LEFT_ARROW)){
  coin1.velocityX=-2

}

  if(keyIsDown(RIGHT_ARROW)){
    coin1.velocityX=+2

  }

if (coin1.isTouching(boarder)){
 coin1.bounceOff(boarder)

}

if (coin1.isTouching(boarder2)){
  coin1.bounceOff(boarder2)
}



  if (coin1.isTouching(boarder3)){
    coin1.bounceOff(boarder3)
  }



    if (coin1.isTouching(boarder4)){
      coin1.bounceOff(boarder4)
    }


    if (coin2.isTouching(boarder)){
      coin2.bounceOff(boarder)
     
     }
     
     if (coin2.isTouching(boarder2)){
       coin2.bounceOff(boarder2)
     }
     
     
     
       if (coin2.isTouching(boarder3)){
         coin2.bounceOff(boarder3)
       }
     
     
     
         if (coin2.isTouching(boarder4)){
           coin2.bounceOff(boarder4)
         }
         if (coin2.isTouching(barrier)){
          coin2.bounceOff(barrier)
         
      
        
        }
        
        

    if (coin2.isTouching(bouncer)){
      coin2.bounceOff(bouncer)
    // bouncer.velocityX=2
   // coin2.velocityX=2
    // bouncer.bounceOff(coin2)
    }



if(coin1.isTouching(bouncer)){

 bouncer.bounceOff(coin1)
 

}
 if (coin1.isTouching(barrier)){
  coin1.bounceOff(barrier)
}



if (bouncer.isTouching(boarder)){
 bouncer.bounceOff(boarder)

}

if (bouncer.isTouching(boarder2)){
  bouncer.bounceOff(boarder2)
}



  if (bouncer.isTouching(boarder3)){
    bouncer.bounceOff(boarder3)
  }



    if (bouncer.isTouching(boarder4)){
      bouncer.bounceOff(boarder4)
    }
    

      
          
          
        }

        function reset() {
          coin1.x=250
          coin1.y=350
          coin1.velocityX=0
          coin1.velocityY=0

coin2.x=730
          coin2.y=350
          coin2.velocityX=0
          coin2.velocityY=0
          bouncer.velocityX=0
          bouncer.velocityY=0
          bouncer.x=500
          bouncer.y=350
          
        


























}












