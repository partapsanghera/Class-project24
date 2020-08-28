class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
     pos.y = mouseY;
      var angle = this.body.angle;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("blue");
      fill("green");
      ellipse(100, 300, 50);
      pop();
    }
  };
  