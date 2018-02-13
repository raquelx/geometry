var linelength = 400;
var margin = 100;
var terminal;
var view1 = 1;
var view2 = 2;
var view;
var fatness = 5;

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
  view = view1;
  
  terminal = new SoftFloat(300, 0.3, 0.1);

}

function mouseClicked(){
  if (view === view1){
  view = view2;
  terminal.setTarget(200); 
  fatness = 2;
  } else if (view === view2){
  view = view1;
  terminal.setTarget(400); 
  fatness = 20;
  }

}

function draw(){
  background(0);
  noFill();
  terminal.update();
    console.log(view);
  
  stroke(255);
  strokeWeight(fatness);
  line(margin, terminal.get(), margin + linelength, terminal.get());
}
   