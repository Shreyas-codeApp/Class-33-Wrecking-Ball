class Ball{
    constructor(x,y,radius_1,radius_2){
        var options = {
            density : 1,
            frictionAir : 0.005
        }
        
        this.r1 = radius_1;
        this.r2 = radius_2;
        this.body = Bodies.rectangle(x,y,this.r1,this.r2,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("black");
        ellipseMode(CENTER);
        ellipse(0,0,this.r1,this.r2);
        pop();

    };
    
}