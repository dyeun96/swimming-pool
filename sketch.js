var bg, people2, line1, line2, line3, line4, line5, line6;
var isLeg;
var timing;
var img;
var song;
var line1;

function setup() {

  bg = loadImage("bg.jpg");
  people = loadImage("people.png");
  leg = loadImage("people_leg.png");
  people2 = loadImage("people2.png");
  line1 = loadImage("line1.png");
  line2 = loadImage("line2.png");
  line3 = loadImage("line3.png");
  line4 = loadImage("line4.png");
  line5 = loadImage("line5.png");
  line6 = loadImage("line6.png");



  createCanvas(720, 480);
}

function draw() {
  background(bg);
  var t1 = (new Date()%18000)/18000;
  var isLeg = new Date()%4000/4000;
  var line1 = new Date()%4000/4000;
     
//물에 떠다니는 사람

    image(people2,300+sin(t1*2*PI)*80,160,85,93);

//발 담그는 사람

    if(isLeg < 0.5){
      image(people,451,343);
    }else{
      image(leg,451,324);
    }

//물결

    image(line1,460,307)
    image(line2,444,294)
    image(line3,434,290)
    image(line4,406,267)
    image(line5,373,248)
    image(line6,367,244)



  }