const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var stand;
var polygon, slingshot;
var gameStates="notLaunch";


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
    stand = new Ground(390, 260, 300, 10);

    block1 = new Box(300,235,30,40);
    block2 = new Box(330,235,30,40);
    block3 = new Box(360,235,30,40);
    block4 = new Box(390,235,30,40);
    block5 = new Box(420,235,30,40);
    block6 = new Box(450,235,30,40);
    block7 = new Box(480,235,30,40);

    block8 = new Box(330,195,30,40);
    block9 = new Box(360,195,30,40);
    block10 = new Box(390,195,30,40);
    block11 = new Box(420,195,30,40);
    block12 = new Box(450,195,30,40);

    block13 = new Box(360,155,30,40);
    block14= new Box(390,155,30,40);
    block15= new Box(420,155,30,40);

    block16 = new Box(390,115,30,40);




   polygon=new Polygon(100,100,20);
  

    slingshot = new Slingshot(polygon.body,{x:100, y:100});
}

function draw(){
    background("#D6DBDF ");
    Engine.update(engine);
    //strokeWeight(4);
    fill("white");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("lightblue");
    block13.display();
    block14.display();
    block15.display();
    fill("lavender");
    block16.display();
   

    polygon.display();
    stand.display();
   
    slingshot.display();    
}

function mouseDragged(){
    if(gameStates!=="Launch"){ 
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    gameStates="Launch";
    slingshot.fly();
  
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}