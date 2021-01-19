class Drop{
    constructor(x,y){
        var options ={
            isStatic : false,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

    update(){
        if(this.body.position.y > 400){
            Matter.Body.setPosition(this.body, {x: random(0,400),y : 0});
        }
    }
}