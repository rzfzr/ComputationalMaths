
var angle = 0;
var slider;
var canvasSize = 600;

function setup() {
  createCanvas(canvasSize, canvasSize);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(canvasSize/2, canvasSize);
  branch(canvasSize/4);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 2) {
    push();
    rotate(angle);


    branch(len * 0.7)
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}