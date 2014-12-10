var bg;
var isLeg;
var timing;
var img;
var x, y;


function setup() {

  bg = loadImage("bg.jpg");
  people = loadImage("people.png");
  leg = loadImage("people_leg.png");
  people2 = loadImage("people2.png")
  isLeg =false;
  x = width /2;
  y = height;

  createCanvas(720, 480);
}

function draw() {
  background(bg);

//다리 움직이는 사람


     
//물에 떠다니는 사람

    image(people2, 300, 200);
    y = y + random(-2, 1)
    x = x - 1;

    if(x < 0){
      x = width
    }


  }