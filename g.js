class G {
  constructor(x,y,radius,angle) {
    var options = {
        isStatic: true,
        friction: 0
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = 5;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("brown");
    ellipseMode(RADIUS);
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
}