//kristina matis, vsvu, 2025, bubble game

let posY;
let bubles = [];
let buble ;
let img;
let img2;
let wind;
let m = 0;
let noisePosX;
let aud;
let pop;

function preload() {
  //preload images and sounds
  img = loadImage('face.png');
  img2 = loadImage('hand.png');
  soundFormats("mp3", "ogg");
  aud = loadSound('music.mp3');
  pop = loadSound('bubble.mp3');

}

function setup() {
   createCanvas(windowWidth, windowHeight);
   // define possition of the bubbles
   pos = createVector(mouseX, mouseY);
   buble = new Circ(width/2, height/2);
   speed = createVector(0,2);
   wind = createVector(0.01,-0.02);
   noisePosX = 0;


  //play music
   aud.play();
   aud.loop();

}

function draw() {

  //gradient background
  let c1 = color(120, 204, 255); 
  let c2 = color(0, 150, 150); 
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, width, i);
  }
  //create bubbles
   if (bubles.length > 0) {
    for (let i = 0; i < bubles.length; i++) {
      bubles[i].applyForce(wind);
      bubles[i].update();
      bubles[i].display();
    }
  }

  //out of bounds remove bubbles
  for (let i = bubles.length - 1; i >= 0; i--) {
    if (bubles[i].pos.x > width+200 || bubles[i].pos.x < 0 || bubles[i].pos.y > height || bubles[i].pos.y < -200) {
      bubles.splice(i, 1); 
    }
  }

  //show images (face and hand)
  image(img, -100, -10,300, 550);
  image(img2, mouseX-400, mouseY-100, 400 , 800);
  text('click to blow bubbles', width/2, height-20, width - 50);
    

}

function mousePressed() {
  //if mouse is pressed, add bubbles
 append(bubles, new Circ(mouseX, mouseY));
 pop.play();
  
}





  

  




 


