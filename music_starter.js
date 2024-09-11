
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let clouds = [];
let angle = 0;

let x = 0;
let m = 0;
let S1 = 0;
let r = 0;
let n = 0;
let e = 0;
let f = 0;
let d = 10;
let x1 = 0;
let x2 = 0;
let shakeX = 0;
let shakeY = 0;
let counterS = 0;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(counter == 1){
    for (let i = 0; i < 5; i++) {
      clouds.push(new Cloud(random(width), random(height / 2), random(50, 75)));
      console.log("clouds generated");
    }
  }
  scale(2);
 
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  angleMode(DEGREES);
  
    // Draw background
  setGradient(0, 0, width, height, color(255, 150, 0), color(0, 0, 128), "Y");

    // Draw gradient sun
  drawSun(400, 300, 450);
  
    // Update and draw clouds
    for (let cloud of clouds) {
     cloud.update();
     cloud.display();
     }
     drawBack(counter, drum);
     let n = map(vocal, 45, 90, 0, 50);
     let r = map(drum, 60, 90, 0, 100);
     let e = map(bass, 50, 90, 0, 100);
     let f = map(other, 70, 80, 0, 50);
     let d = map(vocal, 0, 5, 0, 10);
  
// if(counter > 0){
//   fill(255);
//   text("vocal: " + vocal, 0, 100);
//   text("drum: " + drum,0,200);
//   text("bass: " + bass,0,300);
//   text("other:" + other,0,400);
//   text("counter:" + counter,0,500);
// }


  if(bass > 50){
    noStroke();//changable color bars
    let cr1 = color (0, 19, 255, 180);
    let cr2 = color (255, 0, 0, 180);
    let amt = map(r, 0 , 50, 0, 1);
    let cr3 = lerpColor(cr1, cr2, amt);
    fill(cr3); 
    quad(250, 560, 350, 560, 350, 560-e, 250, 560-e);
    quad(550, 560, 450, 560, 450, 560-e, 550, 560-e);
  }

  if(drum>65){
   noStroke();//middle bar
   let cl1 = color (255, 69, 0, 210);
   let cl2 = color (255, 204, 0,210);
   let amt = map(e, 0, 100, 0 , 1);
   let cl3 = lerpColor(cl1, cl2, amt);
   fill(cl3);
   quad(350,560,450,560,450,560-r,350,560-r);
  }

  if(other > 70){
    noStroke();//blue bars
    fill(77, 244, 250, 120);
    quad(150,560,250,560,250,560-f,150,560-f);
    quad(650,560,550,560,550,560-f,650,560-f);
  }
  
  
 if(vocal > 45){
  let c = map(n, 0, 50, 0, 255);
  let c1 = color(255, 101, 0);
  let c2 = color(255, 0, 0);
  let amt1 = map(n, 0, 50, 0, 1);
  let c3 = lerpColor(c1, c2, amt1);
  noFill();//heartbeat squard
  strokeWeight(4);
  stroke(c3);
  quad(200-n,300,400,100-n,600+n,300,400,500+n);
 } else {
   x += 1;
   if(x > 50) {
    x = 0
  }
  noFill();//keep moving squard
  let m = map(x, 0, 50, 0, 4);
  let co = map(x, 0, 50, 0, 255);
  let co1 = color(255,0,0);
  let co2 = color(255,255,255);
  let amt = map(x, 0, 50, 0, 1);
  let co3 = lerpColor(co1, co2, amt);
  strokeWeight(4-m);
  stroke(co3);
  quad(200-x,300,400,100-x,600+x,300,400,500+x);


  noFill();//heartbeat squard
  strokeWeight(2);
  stroke(255,0,0);
  quad(200,300,400,100,600,300,400,500);

  let y = map(x, 0, 50, 0, 200);//white balls
  noStroke();
  fill(255);
  circle(200+y,300-y,10);
  circle(400+y,100+y,10); 
  circle(600-y,300+y,10);
  circle(400-y,500-y,10);
 }


 if(other < 70){
  for (let i = 0; i < 2; i++) {
    let x = random(800);//white noise
    let y = random(600);
    let w = random(20, 200);
    noStroke();
    fill(255, 255, 255);
    rect(x, y, w, 3);
  }
 }

 if(vocal<=5 && counter > 10000){
  background(0);//switch of TV effect
  translate(400, 300); 
  scale(d); 
  if (d < 0) {
    noLoop(); 
   }
  beginShape();
  vertex(0, -300);
  vertex(-40, -30);
  vertex(-400, 0);
  vertex(-40, 30);
  vertex(0, 300);
  vertex(40, 30);
  vertex(400, 0);
  vertex(40, -30);
  endShape(CLOSE);
 }

}

function drawBack(counter, drum) {

  noStroke();//land
  fill(255, 195, 0);  
  quad(0,400,800,400,800,600,0,600);

  x1 += 7;
  x2 += 15;
  if(x1>810){
    x1 = 0;
  } 
  if(x2>1210){
    x2 = 0;
  }
  stroke(88, 24, 69);//poles
  strokeWeight(8);
  line(800-x1,400,800-x1,300);
  line(790-x1,300,810-x1,300);
  line(1200-x2,500,1200-x2,350);
  line(1190-x2,350,1210-x2,350);

  strokeWeight(30);//railway(slice)
  stroke(99, 99, 90);
  noFill();
  quad(0,500,0,600,800,600,800,500);

  S1 += 18;
  if (S1 > 400){
    S1 = 0
  }
  strokeWeight(30);//railway(moving)
  stroke(99, 99, 90);
  line(800-S1,500,800-S1,600);
  line(400-S1,500,400-S1,600);
  
  noStroke();//window
  if (counterS % 15 === 0) { // how fast of the shake
    shakeX = random(-6, 6);
    shakeY = random(-4, 4);
  }
  counterS++;//shake effect
  push();
  translate(shakeX, shakeY);
  fill(135, 125, 72);
  quad(40, -10, 40, 40, 760, 40, 760, -10); // top
  quad(-10, 40, 40, 40, 40, 560, -10, 560); // left
  quad(40, 560, 40, 610, 760, 610, 760, 560); // bottom
  quad(760, 560, 810, 560, 810, 40, 760, 40); // right
  triangle(-10, -10, 100, -10, -10, 100);
  triangle(-10, 610, 100, 610, -10, 500);
  triangle(810, 610, 700, 610, 810, 500);
  triangle(810, -10, 700, -10, 810, 100);
  pop();
}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === "Y") {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function drawSun(x, y, diameter) {
  noStroke();
  for (let r = diameter; r > 0; r--) {
    let inter = map(r, 0, diameter, 0, 1);
    let c = lerpColor(color(255, 204, 0), color(255, 69, 0), inter);
    fill(c);
    ellipse(x, y, r, r);
  }
}

class Cloud {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x -= 1; // Move left
    if (this.x < -this.size) {
      this.x = width + this.size;
      this.y = random(height / 2); // Reappear at the top half of the right edge
    }
  }

  display() {
    noStroke();
    for (let i = -0.5; i <= 0.5; i += 0.5) {
      let inter = map(this.x + i * this.size, 0, width, 0, 1);
      let c = lerpColor(color(255, 69, 0), color(0, 0, 139), inter);
      fill(c);
      ellipse(this.x + i * this.size, this.y, this.size, this.size * 0.6);
      ellipse(this.x + i * this.size * 0.5, this.y, this.size, this.size * 0.6);
      ellipse(this.x + i * this.size * -0.5, this.y, this.size, this.size * 0.6);
      ellipse(this.x + i * this.size, this.y - this.size * 0.3, this.size, this.size * 0.6);
    }
  }
}
