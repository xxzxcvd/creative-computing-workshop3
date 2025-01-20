let img1, img2, img3;

function preload() {
  // Preloading images
  img1 = loadImage('./image1.jpg');
  img2 = loadImage('./image2.jpg');
  img3 = loadImage('./image3.jpg');
}

function setup() {
  createCanvas(800, 600);
  background(220);
  drawCollage();
}

function drawCollage() {
  // Randomly rotate image 
  let angle1 = random(0, TWO_PI);
  push();
  translate(random(width), random(height));
  rotate(angle1);
  imageMode(CENTER);
  image(img1, 0, 0, img1.width / 2, img1.height / 2);
  pop();
  
  // filters
  tint(random(255), random(255), random(255), 150);
  imageMode(CORNER);
  image(img2, random(width), random(height), img2.width / 3, img2.height / 3);
  
  // Random scaling
  let scaleFactor = random(0.5, 1.5);
  push();
  translate(random(width), random(height));
  scale(scaleFactor);
  imageMode(CENTER);
  image(img3, 0, 0, img3.width, img3.height);
  pop();
}

function draw() {
  // background(220);
  // generate image
  // drawCollage();

}