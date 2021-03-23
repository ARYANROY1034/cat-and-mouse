var canvas,bg
var cat,mouse
function preload() {
    //load the images here
   catImage1=loadAnimation("images/cat1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
   catImage3=loadAnimation("images/cat4.png")
    mouseImage1=loadAnimation("images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3=loadAnimation("images/mouse4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("catsleeping",catImage1)
mouse=createSprite(200,600)
mouse.addAnimation("mousestanding",mouseImage1)
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x <cat.width/2-mouse.width/2){
     cat.velocityX=0
     cat.addAnimation("catlastimage",catImage3)
     cat.scale=0.000000000000000000000000001
     cat.x=300
     cat.changeAnimation("catlastimage")
     mouse.changeAnimation("mouselastImage")
mouse.addAnimation("mouselastImage",mouseImage3)
mouse.scale=0.00000000000000000000001
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==left_arrow){
    cat.velocityX=-5
    cat.addAnimation("catRunning",catImage2)
    cat.changeAnimation("catRunning")
    mouse.addAnimation("mouseTeasing",mouseImage3)
    mouse.changeAnimation("mouseTeasing")
}

}
