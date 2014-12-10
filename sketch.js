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

  createCanvas(720, 480);
}

function draw() {
  background(bg);
  var t1 = (new Date()%18000)/18000;
     
//물에 떠다니는 사람

  image(people2,300+sin(t1*2*PI)*80,160,85,93);

//발 담그는 사람

  if(isLeg){
    var time = (new Date()%2000)/2000;
    if(time <0.5){
      image(people, 451, 343);
    }else{
      image(leg, 451, 324);
    }
  }else{
    image(people, 451, 343);
  }

}
