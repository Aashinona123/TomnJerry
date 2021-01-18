var cat, catImg1, catImg2, tcatImg2
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4
var background, backgroundImage

function preload() {
  catImg1 = loadAnimation("images/tomOne.png");
  catImg2 = loadAnimation("images/tomTwo.png");
  catImg3 = loadAnimation("images/tomThree.png");
  catImg3 = loadAnimation("images/tomFour.png");
  mouseImg1 = loadAnimation("images/jerryOne.png");
  mouseImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
  mouseyImg3 = loadAnimation("images/jerryFour.png");

  backgroundImage = loadImage("images/garden.png")
}

function setup() {
  createCanvas(1000, 800);

  cat = createSprite(870, 600)
  cat.addAnimation("catSleeping", catImg1)
  cat.scale = 0.2

  mouse = createSprite(200, 600)
  mouse.addAnimation("mouseStanding", mouseImg1)
  mouse.scale = 0.15
}

function draw() {

  background(backgroundImage);
  text(mouseX + ',' + mouseY, 10, 45);
  drawSprites();



  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation("catSitting", catImg3)
    cat.changeAnimation("catSitting")
    mouse.addAnimation("jerryExamining", mouseImg2)
    mouse.changeAnimation("jerryExamining")
    cat.scale = 0.2
    mouse.scale = 0.15
    cat.x = 300
  }

  //   if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
  //     cat.velocityX = 0
  //     mouse.addAnimation("mouseStanding", mouseImg1)
  //     mouse.addAnimation("mouseStanding")
  //   }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
  }
}
