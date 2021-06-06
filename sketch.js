
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var plane;
var Block1;
var Block2;
var Rotator1;
var Rotator2;
var Rotator3;
var angle1=60;
var angle2=60;
var angle3=60;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;


function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    var plane_options ={
		isStatic: true
	};

	var Block_options ={
        isStatic: true
	};

	var Rotator_options ={
		isStatic: true
	};

	var particle_options ={
		restitution: 0.4,
		friction: 0.02
	};

	plane = Bodies.rectangle(350,590,700,20,plane_options);
	World.add(world,plane);

	Block1 = Bodies.rectangle(150,400,200,20,Block_options);
	World.add(world,Block1);

	Block2 = Bodies.rectangle(550,400,200,20,Block_options);
	World.add(world,Block2);

	Rotator1 = Bodies.rectangle(350,250,150,20,Rotator_options);
	World.add(world,Rotator1);

	Rotator2 = Bodies.rectangle(350,250,20,150,Rotator_options);
	World.add(world,Rotator2);

	Rotator3 = Bodies.rectangle(350,250,20,150,Rotator_options);
	World.add(world,Rotator3);

	particle1 = Bodies.circle(350,10,10,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(450,10,10,particle_options);
    World.add(world,particle4);

	particle5 = Bodies.circle(250,10,10,particle_options);
	World.add(world,particle5);

	fill("white");
	rectMode(CENTER);
	ellipseMode(RADIUS);


  
}


function draw() {
	background(0);
	Engine.update(engine);
	
	ellipse(particle1.position.x,particle1.position.y,10);
	ellipse(particle2.position.x,particle2.position.y,10);
	ellipse(particle3.position.x,particle3.position.y,10);
	ellipse(particle4.position.x,particle4.position.y,10);
	ellipse(particle5.position.x,particle5.position.y,10);
    
	rect(plane.position.x,plane.position.y,700,20);
	rect(Block1.position.x,Block1.position.y,200,20);
	rect(Block2.position.x,Block2.position.y,200,20);
   // rect(Rotator1.position.x,Rotator1.position.y,150,20);
	//rect(Rotator2.position.x,Rotator2.position.y,20,150);
	//rect(Rotator3.position.x,Rotator3.position.y,20,150);
	
    

    Matter.Body.rotate(Rotator1,angle1)
	push()
	translate(Rotator1.position.x,Rotator1.position.y);
	rotate(angle1)
	rect(0,0,150,20);
	pop()
	angle1 += 3;
 
	Matter.Body.rotate(Rotator2,angle2)
	push()
	translate(Rotator2.position.x,Rotator2.position.y);
	rotate(angle2)
	rect(0,0,20,150);
	pop();
	angle2 += 2;

	Matter.Body.rotate(Rotator3,angle3)
	push()
	translate(Rotator3.position.x,Rotator3.position.y);
	rotate(angle3)
	rect(0,0,20,150);
	pop();
	angle3 += 1;

	
}



