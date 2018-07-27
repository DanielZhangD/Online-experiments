var myPaddle,
    myBall

var bricks = []

function setup() {
  createCanvas(600, 600)
  angleMode(DEGREES)
  myPaddle = new paddle()
  myBall = new ball()
  createBricksRow(20, 20, 40, 5)
}

function createBricksRow(x, y, spacing, numBricks) {
  for (var i = 0; i < numBricks; i++) {
    var aBrick = new brick((60 + spacing) * i + x, y, 60, 20, (0, 0, 0), (255, 255, 255), 1)
    bricks.push(aBrick)
  }
}


function drawTitle() {
  textSize(40)
  stroke(255, 0, 0)
  textAlign(CENTER)
  text("Brickbreaker G A M E", width / 2, 40)
}

function ball() {
  this.x = width / 2
  this.y = height / 2
  this.radius = 10
  this.colour = (12, 72, 201)
  this.xSpeed = 5
  this.ySpeed = 5.6

  this.draw = function() {
    fill(this.colour)
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
  }

  this.move = function() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    if (this.x  + this.radius >= width) {
      this.xSpeed = -this.xSpeed
    } else if (this.x - this.radius <= 0) {
      this.xSpeed = -this.xSpeed
    } else if (this.y - this.radius <= 0) {
      this.ySpeed = -this.ySpeed
    } else if (this.y + this.radius >= height) {
      this.ySpeed = 0
      this.xSpeed = 0
    }
  }
}

function drawBricks() {
  for (i = 0; i < bricks.length; i++) {
    bricks[i].draw()
  }
}

function brick(x, y, xSize, ySize, innerColor, outerColor, hitCount) {
  this.x = x
  this.y = y
  this.xSize = xSize
  this.ySize = ySize
  this.innerColor = innerColor
  this.outerColor = outerColor
  this.hitCount = hitCount
  this.inXSpace = false
  this.inYSpace = false

  this.draw = function() {
    stroke(outerColor)
    fill(innerColor)
    if (this.hitCount > 0) {
      rect(this.x, this.y, this.xSize, this.ySize)
    }
  }

  this.ballCollision = function(aBall) {
    //getting hit from bottom
    if (this.hitCount > 0) {
      if ((aBall.x >= this.x) && (aBall.x <= this.x + this.xSize)) {
        this.inXSpace = true
        if (this.inYSpace) {
          this.hitCount--
          aBall.xSpeed *= -1
        }
      } else {
        this.inXSpace = false
      }
      if ((aBall.y >= this.y) && (aBall.y <= this.y + this.ySize)) {
        this.inYSpace = true
        if (this.inXSpace) {
          this.hitCount--
          aBall.ySpeed *= -1
        }
      } else {
        this.inYSpace = false
      }
    }


    /*
    if (this.hitCount > 0 && aBall.x > this.x && aBall.x < this.x + this.xSize && aBall.y > this.y && aBall.y < this.y + this.ySize) {
      aBall.xSpeed *= -1
      aBall.ySpeed *= -1
      this.hitCount -= 1
    }
    */
  }

}

function ballPaddleCollision(aBall, aPaddle) {
  var d, ballSpeed, theta
  if ((Math.abs(aPaddle.y - aBall.y) <= aBall.radius) && (aBall.x > aPaddle.x) && (aBall.x < aPaddle.x + aPaddle.xSize)) {
    theta = ((aBall.x - aPaddle.x) / aPaddle.xSize) * 180
    ballSpeed = sqrt(sq(aBall.xSpeed) + sq(aBall.ySpeed))
    aBall.xSpeed = -ballSpeed * cos(theta)
    aBall.ySpeed = -ballSpeed * sin(theta)

  } else if (aBall.y > aPaddle.y) {
    //BALLDEATH
    this.xSpeed = 0
    this.ySpeed = 0
  }
}


function paddle() {
  this.x = width / 2 - 35
  this.y = height - 30
  this.xSize = 70
  this.ySize = 20
  this.colour = (255, 0, 0)
  this.speed = 10;

  this.draw = function() {
    fill(this.colour)
    rect(this.x, this.y, this.xSize, this.ySize)
  }

  this.move = function() {
    if (keyIsDown(LEFT_ARROW) && (this.x > 0)) {
      this.x -= this.speed
    }else if (keyIsDown(RIGHT_ARROW) && (this.x + this.xSize < 600)) {
      this.x += this.speed
    }
  }
}

function detectBrickCollision() {
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].ballCollision(myBall)
  }
}

function draw() {
  background(135, 211, 255)
  drawTitle()

  myPaddle.move()
  myPaddle.draw()
  myBall.draw()
  myBall.move()
  drawBricks()
  ballPaddleCollision(myBall, myPaddle)
  detectBrickCollision()
}
