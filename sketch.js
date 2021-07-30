const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle = [];
var plinko = [];
var division = [];
var divisionHeight=300;

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,200,20);
    for (var k=0; k <=width; k = k + 80) {
        division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
        
    }
    for (var j=40; j<=width; j=j+50)
    {
        plinko.push(new Plinko(j,75));
    }
    for (var j=15; j <=width-10; j=j+50)
    {
        plinko.push(new Plinko(j,175));
    }
}

function draw(){

    Engine.update(engine);
 

}
