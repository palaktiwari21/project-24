class Paper{

    constructor(x,y,height){
    var options=
    {
        isStatic : false ,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
    
    }
    
    this.body=Bodies.circle(x,y,height,options);
    
    this.height=height;
    World.add(world,this.body);
    
    
    }
    display() {
    var  pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(0,0,this.height);
    pop();
    
    }
    }
    