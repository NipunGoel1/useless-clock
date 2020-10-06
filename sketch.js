var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  translate(200, 200);
  rotate(-90);
  var hr = hour();
  var mn = minute();
  var sc = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(4);
  line(0, 0, 75, 0);
  pop();
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(9);
  line(0, 0, 50, 0);
  pop();
  noFill();
  strokeWeight(10);
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);
  stroke(0, 255, 0);
  arc(0, 0, 280, 280, 0, mnAngle);
  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hrAngle);

  console.log(scAngle);
}
//https://p5js.org/reference/#/p5/arc
