const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, divisions1, divisions2, divisions3, divisions4, divisions5;

var particle = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);

  divisions1 = new Divisions(200,800,40,40);
  divisions2 = new Divisions(300,800,40,40);
  divisions3 = new Divisions(400,800,40,40);
  divisions4 = new Divisions(500,800,40,40);
  divisions5 = new Divisions(600,800,40,40);

  for(var j = 40; j <= width; j = j + 50)
  {
    
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <= width - 10; j = j + 50)
  {
    
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 75; j <= width; j = j + 50) 
  {
    
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50; j <= width - 10; j = j + 50) 
  {
  
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }
  
  if(frameCount % 60 === 0){
   particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10,10));
   
 }

  for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; j++) {
  
    divisions[k].display();
  }
  drawSprites();
}