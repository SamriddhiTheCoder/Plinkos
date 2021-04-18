const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 780, 480, 20);

  for(var i = 0; k<=width; k += 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }
  
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
    

  background(0);  
 
}