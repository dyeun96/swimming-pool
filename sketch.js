var bg, people2;
var isLeg;
var timing;
var img;


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
  var t1 = (new Date()%10000)/10000;
     
//물에 떠다니는 사람

    image(people2,240+sin(t1*2*PI)*100,160,85,93);


  }