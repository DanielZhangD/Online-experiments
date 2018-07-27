
var platforms = []
var playerOne
var bullet
var drawBullet = false

function setup() {
  createCanvas (1000, 750)
  platforms.push(new Platform(
    0,
     height - 50,
      width / 2,
       40,
        (255, 0, 0),
         false,
          false,
           false
        )
    )
  playerOne = new Player()
}

function drawPlatforms() {
  for (i = 0; i < platforms.length; i++) {
    platforms[i].draw()
  }
}

function keyPressed() {
  if (keyCode == "32") {
    playerOne.jump()
  }
}

function watchKeyboard() {
  if (keyIsDown(RIGHT_ARROW)) {
    playerOne.movement(1)
  } else if (keyIsDown(LEFT_ARROW)) {
    playerOne.movement(-1)
  } else {
    playerOne.movement(0)
  }
  if (keyIsDown("81")) {
    playerOne.weapon.fire()
  }
}


function draw() {
  background(240)
  drawPlatforms()
  watchKeyboard()
  playerOne.weapon.update(playerOne)
  playerOne.weapon.draw()
  playerOne.update()
  playerOne.platformDetect(platforms)
  playerOne.draw()
}
