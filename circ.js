class Circ{
  constructor(posX,posY){
    this.pos = createVector(posX,posY);
    this.vel = createVector( random(1, 2), 0  );
    this.win = createVector(0,0);
    this.age = 0;
    this.maxAge = 100;
  }

 applyForce(force) {
    //wind force
   this.win.add(force);
}
  
  update() {
    //update pos, vel, age and wind
    this.vel.add(this.win);
    this.pos.add(this.vel);
    this.age+1;
     this.win.mult(0.2);
         
    }


  display() {
    //draw the bubble
    let c1 = color(150, 255, 255,50); 
    let c2 = color(100, 200, 200,20); 
    stroke(255,30);
    strokeWeight(8);
    noFill();
    ellipse(this.pos.x, this.pos.y, 100, 100);
    for (let i = 0; i < 100; i++) {
      let inter = map(i, 0, 100, 0, 1);
      let c = lerpColor(c1, c2, inter);
      fill(c,100,100,10);
      noStroke();
      ellipse(this.pos.x, this.pos.y, 100 , 100 - i);
}
}
}