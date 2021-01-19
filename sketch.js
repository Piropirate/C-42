const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella, umbrellaANM;
var drops = [];
var drop;
var maxDrops = 100;
var thunder, thunderANM;

function preload(){
    umbrellaANM = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");
    thunderANM = loadAnimation("images/thunderbolt/4.png","images/thunderbolt/3.png","images/thunderbolt/2.png","images/thunderbolt/1.png")
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
	world = engine.world;
    
    umbrella = createSprite(200,250,100,100);
    umbrella.addAnimation("walking", umbrellaANM);
    umbrella.scale = 0.3;

    thunder = createSprite(random(100,300),50,10,10);

    for(var i = 0; i < maxDrops; i++){
        drops.push(drop = new Drop(random(0,400),random(0,400)));
    }
    


    Engine.run(engine);
}

function draw(){
    background("black");

    console.log(frameCount);

    drop.display();
    drop.update();

    if(frameCount % 100 === 0){
        thunder = createSprite(random(100,300),50,10,10);
        thunder.addAnimation("thunder", thunderANM);
        thunder.scale = 0.5;
    }else{
        thunder.visible = false;
    }

    drawSprites();
}   

