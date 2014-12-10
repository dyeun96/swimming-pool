var bg, people2, line1, line2, line3, line4, line5, line6;
var isLeg;
var timing;
var img;
var song;

function setup() {

  bg = loadImage("bg.jpg");
  people = loadImage("people.png");
  leg = loadImage("people_leg.png");
  people2 = loadImage("people2.png");
  line1 = loadImage("line1.png");
  line1_1 = loadImage("line1_1.png")
  line2 = loadImage("line2.png");
  line3 = loadImage("line3.png");
  line3_1 = loadImage("line3_1.png")
  line4 = loadImage("line4.png");
  line5 = loadImage("line5.png");
  line5_1 = loadImage("line5_1.png")
  line6 = loadImage("line6.png");



  createCanvas(720, 480);
}

function draw() {
  background(bg);
  var t1 = (new Date()%18000)/18000;
  var isLeg = new Date()%4000/4000;
  var line1_1 = new Date()%4100/4100;
  var line1 = new Date()%4500/4500;

     
//물에 떠다니는 사람

    image(people2,300+sin(t1*2*PI)*80,160,85,93);

//발 담그는 사람

    if(isLeg < 0.5){
      image(people,451,343);
    }else{
      image(leg,451,324);
    }

//물결

    if(line1_1 < 0.5){
      image(people,450,343);
    }else{
      image(line1,460,307);
    }

    if(line1 < 0.5){
      image(people,450,343);
    }else{
      image(line2,444,294);
    }

  }