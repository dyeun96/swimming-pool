var bg;

function setup() {

  bg = loadImage("bg.jpg");
  people = loadImage("people.png");
  people = loadImage("people_water.png")

  createCanvas(720, 480);
}
function draw() {
  background(bg);
  var tDig = (new Date()%1000)/1000;

//사람
if(tDig < 0.5){
  image(people,451,340);
}else{
  image(people_water,451.340)
}

  }