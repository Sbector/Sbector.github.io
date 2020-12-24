let t = 0;
let loc;

function setup() {
  let c = createCanvas(windowWidth,windowHeight);
  c.position(0,0);
  background(255);
}

function draw() {
  t += 0.002;

  loc = createVector(map(noise(t), 0, 1, 0, width), map(noise(t+1500), 0, 1, 0, height));
  noFill();
  stroke(0,10);
  ellipse(loc.x,loc.y,40,40);
}
