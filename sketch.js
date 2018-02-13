var linelength = 400;
var margin = 100;
var view1 = 1;
var view2 = 2;
var view3 = 3;
var view;
var fatness = 5;
var count = 10;
var dash = 20;
var r = 18;
var variable = 40;
var currentfill;
var dotbase = 550;


var stroke1 = true;
var stroke2 = false;
var stroke3 = false;
var stroke4 = false;
var stroke5 = false;

var dot1hovered = false;
var dot2hovered = false;
var dot3hovered = false;
var dot4hovered = false;
var dot5hovered = false;

var color1;
var color2;
var color3;
var color4;
var color5;
var a = 100;
var b = 150;
var c = 240;

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
  view = view1;
  
  color1 = color(a + 0, b + 0, c + 0);
  color2 = color(a + 40, b + 0, c + 10);
  color3 = color(a + 70, b + 10, c + 20);
  color4 = color(a + 90, b + 0, c + 20);
  color5 = color(a + 110, b + 20, c + 30);
  colorarray = [color5, color4, color3, color2, color1];
  
  
}

function mouseClicked(){
  if (view === view1){
  view = view2;
  fatness = 2;
  } else if (view === view2){
  view = view3;
  fatness = 22;
  } else if (view === view3){
  view = view1;
  fatness = 13;
  } 
  if (dot1hovered === true){
  stroke5 = false;
  stroke4 = false;
  stroke3 = false; 
  stroke1 = true;
  stroke2 = false;
  dash = 20;
  } else if (dot2hovered === true){
  stroke5 = false;
  stroke4 = false;
  stroke3 = false; 
  stroke2 = true; 
  stroke1 = false;
  dash = 15;
  } else if (dot3hovered === true){
  stroke5 = false;
  stroke4 = false;
  stroke3 = true;
  stroke2 = false; 
  stroke1 = false;
  dash = 15;
  } else if (dot4hovered === true){
  stroke5 = false;
  stroke4 = true;  
  stroke3 = false;
  stroke2 = false; 
  stroke1 = false;
  dash = 20;
  } else if (dot5hovered === true){
  stroke5 = true;
  stroke4 = false;  
  stroke3 = false;
  stroke2 = false; 
  stroke1 = false;
  dash = 20;
  }
}

function mouseMoved(){
  // for (var b = 0; b < count; b++){
             if (mouseX > margin && mouseX < margin + r && mouseY < dotbase + r/2 && mouseY > dotbase - r/2){
      dot1hovered = true;
      } else if (mouseX > margin + 92 && mouseX < margin + 92 + r && mouseY < dotbase + r/2 && mouseY > dotbase - r/2){
      dot2hovered = true; 
      } else if (mouseX > margin + 92 * 2 && mouseX < margin + 92 * 2 + r && mouseY < dotbase + r/2 && mouseY > dotbase - r/2){
      dot3hovered = true; 
      } else if (mouseX > margin + 92 * 3 && mouseX < margin + 92 * 3 + r && mouseY < dotbase + r/2 && mouseY > dotbase - r/2){
      dot4hovered = true; 
      } else if (mouseX > margin + 92 * 4 && mouseX < margin + 92 * 4 + r && mouseY < dotbase + r/2 && mouseY > dotbase - r/2){
      dot5hovered = true; 
      } else {
      dot1hovered = false;
      dot2hovered = false;
      dot3hovered = false;
      dot4hovered = false;
      dot5hovered = false;
      }
}


function draw(){
  background(0);
  noFill();
  frameRate(12);
  stroke(255);
  strokeWeight(fatness);
  
  
  for (var i = 0; i < count; i++){
    for (var j=0; j < count; j++){
      x = margin + variable * i;
      y = margin + variable * j;
      if (stroke1 === true){
      line(x, y, x + dash, y + dash);
      } else if (stroke2 === true){
      line(x, y, x + dash, y + dash);
      line(x, y + dash, x + dash, y);  
      } else if (stroke3 === true){
      arc(x + dash/2, y + dash/2, 1.3 * dash, 1.3 * dash, map(millis(), 0, 10000, 0, 2 * PI), map(millis(), 0, 10000, 0, 2 * PI) - PI/3);  
      } else if (stroke4 === true){
      strokeWeight(4);
      stroke(210, 100+ map(mouseY, 0, 600, -100, 55), 200 + map(mouseX, 0, 600, -100, 55));
      triangle(x, y + dash, 
               x + map(mouseX, 0, 600, -10, 10) + dash/2, 
               y + map(mouseY, 0, 600, -4, 9), x + dash, y + dash);
      } else if (stroke5 === true){
      line(x + dash/2, y - dash/2, x - dash/2, y + dash/2);
      line(x, y, x - dash/2, y - dash/2);
      }
    }
  }
  
  
  for (var b = 0; b < 5; b++){
    noStroke();
    currentfill = colorarray[b];
    if(abs(margin + 92 * b - mouseX) < 12 && mouseY > dotbase - r/2 && mouseX < dotbase + r/2){
    fill(255);
    } else {
    fill(currentfill);      
    }
    ellipse(margin + 92 * b + r/2, dotbase, r, r);
  }
  
  
  
  // line(margin, terminal.get(), margin + linelength, terminal.get());
}
   