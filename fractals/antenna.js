// variables: A B
// axiom: A
// rules: (A → AB), (B → A)
var angleO;
var angleQ;
var axiom = "F+F+F+F";
// var axiom = "F1F1F1F";
var sentence = axiom;
var lenD = 60;
var lenE = 30;

var rules = [];
// rules[0] = {
//   a: "F",
//   b: "FF+[+F-F-F]-[-F+F+F]"
// }

// rules[0] = {
//     a: "F",
//     b: "FF+GGGG-G-GGGG+F"
//   }
// rules[1] = {
//     a: "G",
//     b: "GGG"
//   }


// var rules = [];
// rules[0] = {
//   a: "F",
//   b: "FF+GGGG-G-GGGG+F"
// };
// rules[1] = {
//   a: "G",
//   b: "GGG"
// };



//final:
rules[0] = {
    a: "F",
    b: "FF+GGGG-G-GGGG+F"
  };
  rules[1] = {
    a: "G",
    b: "GGG"
  };
//   rules[0] = {
//     a: "F",
//     b: "F-F++F-F"
//   };
    

//   rules[1] = {
//     a: "L",
//     b: "+F-F-F+"
//   }

//   rules[2] = {
//     a: "R",
//     b: "-F+F+F-"
//   }

//   rules[3] = {
//     a: "D",
//     b: "--F++F"
//   }

//   rules[4] = {
//     a: "E",
//     b: "F--F++"
//   }


function generate() {
  lenD *= 0.5;
  lenE *= 0.5;
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
    }else if (current == "G") {
        line(0, 0, 0, -lenE);
        translate(0, -lenE);
        

    } else if (current == "+") {
        rotate(angleO);
    } else if (current == "-") {
        rotate(-angleO);

      
    } else if (current == "0") {
        rotate(angleQ);
    } else if (current == "1") {
        rotate(-angleQ);
    }else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(500, 500);
  angleO = radians(90);
  angleQ = radians(90);
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}
