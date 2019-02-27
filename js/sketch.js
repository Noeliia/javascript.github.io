var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}
function setup() {
  createCanvas(192, 157);
  background(0);
  frameRate(30);
}

function draw() {

  col.r = random(0, 255);
  col.g = random (0, 255);
  col.b = random(0, 255);
  
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 60);
  ellipse(spot.x, spot.y, 20, 20);
  push();
noStroke();
rotate(frameCount * -0.02);
fill(255, 204, 0);
ellipse(70, 60, 36, 36);
  push();
fill('red');
ellipse(115, 60, 36, 36);
  push();
fill(color(0, 0, 255));
ellipse(70, 110, 36, 36);
  push();
fill(0);
ellipse(115, 110, 36, 36);;


}