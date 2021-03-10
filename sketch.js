var start = 0;
var start2 = 0;
var angle = 0;
var mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var n = map((noise(start)*20), 0, 20, -20, 20);
  var vol = lerp((mic.getLevel()*40), 0, 0.2);
  
  
  translate(200, 200);
  //rotate(vol);

  fill(vol*255);
  // noFill();
  // stroke(255);
  beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(x*vol, y*vol);
        vertex(y*n, x*n);
    }
  }
  endShape();
  
    beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(-x*vol, -y*vol);
        vertex(-y*n, -x*n);
    }
  }
  endShape();
  
      beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(-x*vol, y*vol);
        vertex(y*n, -x*n);
    }
  }
  endShape();
  
        beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(x*vol, -y*vol);
        vertex(-y*n, x*n);
    }
  }
  endShape();
  angle += 0.02;
  start+=0.04;
}