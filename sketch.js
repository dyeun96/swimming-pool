var bg;
var isLeg;
var timing;


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

//다리 움직이는 사람


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


//사람2_둥둥떠다니는 사람

  if(people2){
    var time = (new Date()%2000)/2000;
    if(time <0.5){
      image(people, 451, 343);
    }

  function mousePressed(){
    if(timing*3 <1){
    image(people2, timing*899,568);  
   }
     
  }