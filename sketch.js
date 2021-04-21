const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 350;
var bg_img;

function preload(){
  bg_img = loadImage("bg.jpg");
}

function setup() {
  createCanvas(880, 880);
  engine = Engine.create();
  world = engine.world;
  
  //ground
  ground = new Ground(440, 870, 880, 20);

  //pushing the divisions
  for(var d = 0; d<=width; d += 80){
    divisions.push(new Division(d, height-divisionHeight/2, 10, divisionHeight));
  }
  
  //pushing the plinkos
  for(var b = 15; b<=width; b += 50){
    plinkos.push(new Plinko(b, 100));
  }
  for(var o = 35; o<=width; o += 50){
    plinkos.push(new Plinko(o, 200));
  }
  for(var p = 15; p<=width; p += 50){
    plinkos.push(new Plinko(p, 300));
  }
  for(var m = 35; m<=width; m += 50){
    plinkos.push(new Plinko(m, 400));
  }
  
  Engine.run(engine);
}

function draw() {
  background(bg_img);  
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
    
  //plinko display
  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  } 

  //divisons display
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display(); 
  }

  //pushing particles
  if(frameCount % 60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10)); 
  }


  //particles display
  for(var j = 0; j < particles.length; j++) { 
    particles[j].display(); 
  }

  ground.display();
}