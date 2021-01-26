class Bob {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution :1,
            friction :  0,
            density :7.8,
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r
      World.add(world,this.body);

      console.log(this.body);

    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }

}