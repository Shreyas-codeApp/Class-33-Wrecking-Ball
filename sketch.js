const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var ball;
var rope;



function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,3000,20);

    b1 = new Block(900,100,70,70);
    b2 = new Block(900,100,70,70);
    b3 = new Block(900,100,70,70);
    b4 = new Block(900,100,70,70);
    b5 = new Block(900,100,70,70);
    b6 = new Block(900,100,70,70);

    b7 = new Block(800,100,70,70);
    b8 = new Block(800,100,70,70);
    b9 = new Block(800,100,70,70);
    b10 = new Block(800,100,70,70);
    b11 = new Block(800,100,70,70);
    b12 = new Block(800,100,70,70);

    b13 = new Block(700,100,70,70);
    b14 = new Block(700,100,70,70);
    b15 = new Block(700,100,70,70);
    b16 = new Block(700,100,70,70);
    b17 = new Block(700,100,70,70);
    b18 = new Block(700,100,70,70);
    b19 = new Block(700,100,70,70);
    b20 = new Block(700,100,70,70);

    ball = new Ball(200,400,80,80);
    rope = new Rope(ball.body,{x:500,y:50});
   
}

function draw(){
    background("orange");
    Engine.update(engine);

    ground.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    
    ball.display();
    rope.display();

        
    
}





function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}