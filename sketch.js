var bg;

function setup() {

  bg = loadImage("bg.jpg");
  people = loadImage("people.png");
  people = loadImage("people_water.png")

  createCanvas(720, 480);
}
function draw() {
  background(bg);

//사람
image(people, 451, 343, 504.374);


  }