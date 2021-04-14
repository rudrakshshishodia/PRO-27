class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r-5,options);
        World.add(world, this.body);
       
    }

    display(){
        var bobpos=this.body.position;
        push();
        translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        stroke("orange");
        fill("white");
        ellipse(0,0,this.r-5,this.r-5)
        pop();
    }
}