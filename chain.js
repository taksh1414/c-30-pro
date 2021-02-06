class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
       this.taksh= pointB
       this.sling1=loadImage("sprites/sling1.png")
       this.sling2=loadImage("sprites/sling2.png")
     this.sling3=loadImage("sprites/sling3.png")
    }

fly(){
    this.chain.bodyA=null
}






    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
        image(this.sling1,225,25);
        image(this.sling2,200,20);
        image(this.sling3,pointA.x-10,pointA.y,30,15)
        strokeWeight(4);
        line(pointA.x-20, pointA.y, this.taksh.x, this.taksh.y);
        line(pointA.x+20, pointA.y, this.taksh.x+60,this.taksh.y);

        }
        
    }
    
}
