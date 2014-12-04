var bg;
var y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 710x400 pixels.
  bg = loadImage("bg.jpg");
  createCanvas(720, 480);
}
function draw() {
  background(bg);

  }
}