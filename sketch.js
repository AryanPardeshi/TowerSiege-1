//Create variables here
var dog = createSprite(10,10,125,125);
var dogImg, dogHappyImg;
function preload()
{
	//load images here
  dogImg=loadImage('images/Dog.png');
  dogHappyImg=loadImage('images/happydog.png');

}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dogImg);

  var foodS=database.ref("Food");
  foodS.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);

  if (keyDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappyImg);
  }
  drawSprites();
 
  //add styles here
  textSize(5)
  fill("white")
  
  text("Note:Press Up arrow to feed milk to the dog")
}

function readStock(data) {
  foodS=data.val();

}

function writeStock(x) {

  if(x<=0){
    x=o;

  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}




