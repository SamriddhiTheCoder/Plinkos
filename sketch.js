const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 350;
var bg_img;

var score = 0;
var particle;
var count = 0;
var gameState = "PLAY";

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

  //score 
  push();
  textSize(20);
  fill("white");
  text("Score: " + score, 10, 30);
  pop();

  //scores display
  fill("white");
  textSize(30);
  text("500", 15, 555);
  text("500", 95, 555);
  text("500", 175, 555);
  text("200", 255, 555);
  text("200", 335, 555);
  text("200", 415, 555);
  text("200", 495, 555);
  text("100", 575, 555);
  text("100", 655, 555);
  text("100", 735, 555);
  text("100", 815, 555);

  if(particle != null){
      particle.display();

      if(particle.position.y > 700){
        if(particle.position.x > 350){
          score += 500;
          particle = null;
          if(count <= 5) gameState = "END";
        }
        
        else if(particle.position.x > 500){
          score += 200;
          particle = null;
          if(count <= 5) gameState = "END";
        }
        
       else if(particle.position.x > 880){
          score += 100;
          particle = null;
          if(count <= 5) gameState = "END";
        }
      }
  }
   
  //plinko display
  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  } 

  //divisons display
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display(); 
  }

  ground.display();
}

function mousePressed(){
  if (gameState !== "END"){
    count =+ 1;
    particle = new Particles(mouseX, 10, 10, 10);
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10)); 
  }
}

