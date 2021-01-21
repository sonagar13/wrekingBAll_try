

const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18;
var box19, box20;
var boxes1 = [];
var boxes2 = [];
var boxes3 = [];

var ball, rope;
var ground;


function setup() {
  createCanvas(1200,700);
  // add commnet
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,640,1400,60);
  /*
  box1 = new box(700,100,70,70);
  box2 = new box(700,100,70,70);
  
 
  box3 = new box(700,100,70,70);
  box4 = new box(700,100,70,70);
  
  box5 = new box(700,100,70,70);
  box6 = new box(700,100,70,70);


  box7 = new box(800, 100, 70, 70);
  box8 = new box(800, 100, 70, 70);
  box9 = new box(800, 100, 70, 70);
  box10 = new box(800, 100, 70, 70);
  box11 = new box(800, 100, 70, 70);
  box12 = new box(800, 100, 70, 70);
  box13 = new box(900, 100, 70, 70);
  box14 = new box(900, 100, 70, 70);
  box15 = new box(900, 100, 70, 70);
  box16 = new box(900, 100, 70, 70);
  box17 = new box(900, 100, 70, 70);
  box18 = new box(900, 100, 70, 70);
  box19 = new box(900, 100, 70, 70);
  box20 = new box(900, 100, 70, 70);
  */


  
    for(var i=0; i<=7; i++){


      boxes1[i] = new box(700,100+i*70,70,70);
      console.log(i);

  }

  for(var i=0; i<=7; i++){

    
    boxes2[i] = new box(800,100+i*70,70,70);
    console.log(i);
  }


  for(var i=0; i<=7; i++){

    
    boxes3[i] = new box(900,100+i*70,70,70);
    console.log(i);

  }

  

  

  

  ball = new Ball(500,200,80,80);
  //rope = new Rope(ball.body,{x:500,y:0});
  rope = new Rope(ball.body,{x:500,y:0});
  

 

  console.log(ground);

  
}


function draw(){



    background("DeepSkyBlue");
    Engine.update(engine);

    ground.display();
    /*
    box1.display();
    box2.display();
    

    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
   
    box7.display();
    box8.display();
   
    box9.display();
    box10.display();
   
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    
    box15.display();
    box16.display();
    
    box17.display();
    box18.display();

    box19.display();
    box20.display();
    */

    for(var i = 0; i < boxes1.length;i++){
      boxes1[i].display();
    }


    for(var i = 0; i < boxes2.length;i++){
      boxes2[i].display();
    }

    for(var i = 0; i < boxes3.length;i++){
      boxes3[i].display();
    }


    ball.display();
    rope.display();
    


}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


