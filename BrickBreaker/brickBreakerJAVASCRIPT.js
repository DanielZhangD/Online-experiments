function setup() {
  createCanvas(500, 500)
  background(135, 211, 255)
}

var xPaddleLocation = 250
var yPaddleLocation = 400
var xCircleLocation = 250
var yCircleLocation = 250
var xVelocity = 3
var yVelocity = 3

//PADDLE STUFF
function paddleDraw() {
  line(xPaddleLocation - 50, yPaddleLocation, xPaddleLocation + 50, yPaddleLocation)
}

function paddleControls() {
  if (keyCode == LEFT_ARROW && xPaddleLocation - 49 >= 0) {
    xPaddleLocation -= 3
  } else if (keyCode == RIGHT_ARROW && xPaddleLocation + 49 <= 500) {
    xPaddleLocation += 3
  }
}

function paddle() {
  this.
}

//BALL FUNCTION STUFF
function ballDraw() {
  strokeWeight(0)
  ellipse(xCircleLocation, yCircleLocation, 20, 20)
  fill(255, 107, 146)
}

function ballMovement() {
  if (xCircleLocation + 20 >= 500 || xCircleLocation - 20 <= 0) {
    xVelocity = xVelocity * -1
  }
  if (yCircleLocation + 20 >= 500 || yCircleLocation - 20 <= 0) {
    yVelocity = yVelocity * -1
  }
  if ((xCircleLocation >= xPaddleLocation - 50 && xCircleLocation <= xPaddleLocation + 50))
  xCircleLocation += xVelocity
  yCircleLocation += yVelocity
}


function draw() {
  background(135, 211, 255)
  strokeWeight(5)
  paddleControls()
  paddleDraw()
  ballDraw()
  ballMovement()
}
