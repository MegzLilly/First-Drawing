function circle (x, y, diameter) {
  
  ellipse (x, y, diameter, diameter);
  
}

function square (x, y, side) {
  
  rect (x, y, side, side);
  
}



function hourglass () {
  
  background (89, 89, 76);
  for (j = 0; j <= 7; j++) {
    fill ('blue');
    circle (120, 140, 300, 300);
    circle (220, 240, 150, 150);
    circle (120, 140, 75, 75);
  }

  for (i = 7; i >= 1; i--)  {
    fill ('orange');
    square (40, 40, 20, 20);
    square (60, 60, 30, 30);
    
  }
  
  
}



function setup() {
  
  createCanvas(640,480);
  hourglass();
  hourglass();
  square (340, 340, 270, 270);
  square (280, 420, 33, 33);
  fill (245, 237, 10);
  circle (510, 100, 90, 90);
  
}

function draw() {
  
}