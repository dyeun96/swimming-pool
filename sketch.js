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
     
//물에 떠다니는 사람

    image(people2,430+sin(t1*2*PI)*50,230,30,31);
    image(people2,280+cos(t2*2*PI)*50,250,30,31);


  }