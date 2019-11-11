// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Snowflake

// Renders a simple fractal, the Koch snowflake
// Each recursive level drawn in sequence

ArrayList<KochLine> lines  ;   // A list to keep track of all the lines

void setup() {
  size(600, 692);
  background(255);
  lines = new ArrayList<KochLine>();
  PVector a   = new PVector(0, 173);
  PVector b   = new PVector(width, 173);
  PVector c   = new PVector(width/2, 173+width*cos(radians(30)));
  
  // Starting with additional lines
  lines.add(new KochLine(a, b));
  lines.add(new KochLine(b, c));
  lines.add(new KochLine(c, a));
  
  for (int i = 0; i < 5; i++) {
    generate();
  }
}

void draw() {
  background(255);
  for (KochLine l : lines) {
    l.display();
  }
}

void generate() {
  ArrayList next = new ArrayList<KochLine>();    // Create emtpy list
  for (KochLine l : lines) {
    // Calculate 5 koch PVectors (done for us by the line object)
    PVector a = l.kochA();                 
    PVector b = l.kochB();
    PVector c = l.kochC();
    PVector d = l.kochD();
    PVector e = l.kochE();
    // Make line segments between all the PVectors and add them
    next.add(new KochLine(a, b));
    next.add(new KochLine(b, c));
    next.add(new KochLine(c, d));
    next.add(new KochLine(d, e));
  }
  lines = next;
}


















// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve

// A class to describe one line segment in the fractal
// Includes methods to calculate midPVectors along the line according to the Koch algorithm

class KochLine {

    // Two PVectors,
    // a is the "left" PVector and 
    // b is the "right PVector
    PVector start;
    PVector end;
  
    KochLine(PVector a, PVector b) {
      start = a.get();
      end = b.get();
    }
  
    void display() {
      stroke(0);
      strokeWeight(2);
      line(start.x, start.y, end.x, end.y);
    }
  
    PVector kochA() {
      return start.get();
    }
  
  
    // This is easy, just 1/3 of the way
    PVector kochB() {
      PVector v = PVector.sub(end, start);
      v.div(3);
      v.add(start);
      return v;
    }    
  
    // More complicated, have to use a little trig to figure out where this PVector is!
    PVector kochC() {
      PVector a = start.get(); // Start at the beginning
      
      PVector v = PVector.sub(end, start);
      v.div(3);
      a.add(v);  // Move to point B
  
      rotate(v, -radians(60)); // Rotate 60 degrees
      a.add(v);  // Move to point C
  
      return a;
    }    
  
    // Easy, just 2/3 of the way
    PVector kochD() {
      PVector v = PVector.sub(end, start);
      v.mult(2/3.0);
      v.add(start);
      return v;
    }
  
    PVector kochE() {
      return end.get();
    }
  }
  
  public void rotate(PVector v, float theta) {
    float xTemp = v.x;
    // Might need to check for rounding errors like with angleBetween function?
    v.x = v.x*PApplet.cos(theta) - v.y*PApplet.sin(theta);
    v.y = xTemp*PApplet.sin(theta) + v.y*PApplet.cos(theta);
  }
  