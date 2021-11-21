class Umbrella{

     constructor(x,y){

        var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0,
                'isStatic' : true,
        }


        this.radius = 30
        this.body = Bodies.circle(x,y,this.radius,options)
        this.image = loadImage("Walking Frame/walking_1.png");
        World.add(world, this.body);
     }


    display(){

        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 300, 300);    
        pop();
    }

    
    


}