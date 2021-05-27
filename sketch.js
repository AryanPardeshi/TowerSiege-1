const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImg;
var stand;
var slingShot;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1200,height,1200,20);
    stand = new Ground(390,235,200,20);

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,195,30,40);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot= new SlingShot(this.polygon,{x:100,y:200});
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
 
}




function draw(){
    Engine.update(engine);
}
    
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}