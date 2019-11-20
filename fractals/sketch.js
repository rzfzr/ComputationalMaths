// variables: A B
// axiom: A
// rules: (A → AB), (B → A)
var angleO;
var axiom = "F+F+F+F";
var sentence = axiom;
var lenD = 100;

// rules[0] = {
//   a: "F",
//   b: "FF+[+F-F-F]-[-F+F+F]"
// }
// var rules = [];
// rules[0] = {
//   a: "F",
//   b: "F+F--F+F"
// }
var rules = [];
rules[0] = {
  a: "F",
  b: "F[-F+F+F]FF"
}


function generate() {
  lenD *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();

}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == "F") {
      line(0, 0, 0, -lenD);
      translate(0, -lenD);
    } else if (current == "+") {
      rotate(angleO);
    } else if (current == "-") {
      rotate(-angleO)
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(400, 400);
  // angleO = radians(25);
  // angleO = radians(60);
  angleO = radians(90);
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}
