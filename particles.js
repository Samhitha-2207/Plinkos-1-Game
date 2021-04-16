class Particles {
    constructor(x,y,radius){
        var options = {
            restitution: 0.4
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);38
    }
  
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        ellipse(pos.x, pos.y, this.radius);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.r);
        pop();
    }
}