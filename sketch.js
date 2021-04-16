const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var r = 500;

function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,790,1000,20);

  for(var k=0; k<=r; k=k+80) {
    divisions.push(new Division(k, 600, 10, divisionHeight));
  }

  for(var x=40; x<=r; x=x+50) {
    plinkos.push(new Plinkos(x,70,10));
  }
  for(var x=20; x<=r; x=x+50) {
    plinkos.push(new Plinkos(x,170,10));
  }
  for(var x=40; x<=r; x=x+50) {
    plinkos.push(new Plinkos(x,270,10));
  }
  for(var x=20; x<=r; x=x+50) {
    plinkos.push(new Plinkos(x,370,10));
  }
}

function draw() {
  background("black");
  textSize(20);
  text("x:"+mouseX+", y:"+mouseY, mouseX, mouseY);
  Engine.update(engine); 
  drawSprites();

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  ground1.display();

  if(frameCount%60===0) {
    particles.push(new Particles(random(0,480),10,10));
  }
  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}