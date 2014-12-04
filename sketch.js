var bg;
var isLeg;


function setup() {

  bg = loadImage("bg.jpg");
  people = loadImage("people.png");
  leg = loadImage("people_leg.png");
  isLeg =false;

  createCanvas(720, 480);
}
function draw() {
  background(bg);

//사람


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
  function mousePressed(){
    if(mouseX>451 && mouseX <500 && mouseY >343 && mouseY <373){
      isLeg = !isLeg;
    }
  }