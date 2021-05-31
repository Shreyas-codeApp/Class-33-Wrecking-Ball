class Rope{
    constructor(bodyA,pointB){
        var options = {
            length : 400,
            stifness : 1.2,
            bodyA : bodyA,
            pointB : pointB
            
        }
        this.pointB = pointB,
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }
    attach(body1){
        this.rope.bodyA = body1;
    }

    display(){
       if(this.rope.bodyA){
           var point1 =  this.rope.bodyA.position;
           var point2 = this.pointB;

        push();
        strokeWeight(10);
        stroke("brown");
        line(point1.x,point1.y,point2.x,point2.y);
        pop();

           
       }
        
        
    };
    
}