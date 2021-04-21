class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: true,
          restitution : 0.8,
          friction : 1.0,
          density : 1.0
      }

      this.body = Bodies.circle(x, y, 10, options);
      this.r = 10;
      World.add(world, this.body);
    }
    
    display(){
      var pos = this.body.position;

      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
