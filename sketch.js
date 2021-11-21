const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boy;
var drops = []
var MaxDrops = 100;
var Thunder,Thunder2,Thunder3,Thunder4;
var thunderFrameCount = 0;



function preload(){
    
     Thunder = loadImage('thunderbolt/1.png')
     Thunder2 = loadImage('thunderbolt/2.png')
     Thunder3 = loadImage('thunderbolt/3.png')
     Thunder4 = loadImage('thunderbolt/4.png')

}

function setup(){
   
    var canvas = createCanvas(600,700);

    engine = Engine.create();
    world = engine.world;
    
    boy = new Umbrella(200,500);

    if(frameCount%150===0){

        for(var i = 0 ; i<MaxDrops ; i++){

            drops.push(new Drop(random(0,400),random(0,400)))
        }


    }


}

function draw(){
    
    background("black")
    Engine.update(engine);


    boy.display();

    for(var i = 0 ; i<MaxDrops ; i++){


        drops[i].showDrop();
        drops[i]. updateY();


    }


    var rand = Math.round(random(1,4))

    if(frameCount%60===0){

        thunderFrameCount = frameCount;
        var thunder = createSprite(random(20,370),random(10,30),10,10)
        thunder.scale = 0.5;
        switch(rand){

            case 1 : thunder.addImage(Thunder)
            break; 
            case 2 : thunder.addImage(Thunder2)
            break;
            case 3 : thunder.addImage(Thunder3)
            break; 
            case 4 : thunder.addImage(Thunder4)
            break;
            default: break                  



        }


        if(thunderFrameCount+10===frameCount&& thunder){

            thunder.destroy();


        }
       

        drawSprites();

    }




}   

