var bg, people2;
var isLeg;
var timing;
var img;
var song;

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

function preload() {
  song = loadSound('water.mp3');
}

function draw() {
  background(bg);
  var t1 = (new Date()%18000)/18000;
     
//물에 떠다니는 사람

    image(people2,300+sin(t1*2*PI)*80,160,85,93);

//발 담그는 사람

    image(people)

  }