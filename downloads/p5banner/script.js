// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  // createCanvas() is the js equivalent to Processing's size()
  // create the canvas in a variable called "myCanvas"
  var myCanvas = createCanvas(800, 250);

  // parent "myCanvas" to the id in the html "mySketch"
  myCanvas.parent('mySketch');
  background(255);
}

function draw() {
  //statements
  ellipse(100,100,50,50)
}
