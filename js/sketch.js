function setup() {
  let c = createCanvas(windowWidth,windowHeight);
  c.position(0,0);
  clear();
}

function draw() {
  stroke(255);
  strokeWeight(4);
  line(mouseX,mouseY,pmouseX,pmouseY);


}
