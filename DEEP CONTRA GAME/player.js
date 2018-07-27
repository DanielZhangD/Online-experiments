function Player() {
  this.x = 20
  this.y = 0
  this.xSize = 20
  this.ySize = 50
  this.xSpeed = 0
  this.ySpeed = 0

  //And/or this is jump
  this.thrust = 0
  this.gravity = 0.5
  this.weapon = null
  this.weapon = new Weapon(false, 0, this.x, this.y + this.ySize / 2)

  this.draw = function() {
    fill(0, 0, 200)
    stroke(0, 200, 0)
    rect(this.x, this.y, this.xSize, this.ySize)
  }

  this.update = function() {
    this.xSpeed += this.acc
    this.ySpeed += this.thrust + this.gravity
    this.thrust = 0
    if (this.xSpeed > 10) {
      this.xSpeed = 10
    }
    if (this.ySpeed > 10) {
      this.ySpeed = 10
    }
    if (this.x <= 0 && this.xSpeed < 0) {
      this.x = 0
      this.xSpeed = 0
    }
    this.x += this.xSpeed
    this.y += this.ySpeed
  }

  this.platformDetect = function(thePlatforms) {
    this.onPlatform = false
    for (var i = 0; i < thePlatforms.length; i++) {
      if ((this.ySpeed >= 0) &&
        (this.y + this.ySize >= thePlatforms[i].y) &&
        (this.y + this.ySize < thePlatforms[i].y + thePlatforms[i].ySize) &&
        (this.x >= thePlatforms[i].x) &&
        (this.x <= thePlatforms[i].x + thePlatforms[i].xSize))
        {
        this.ySpeed = 0
        this.y = thePlatforms[i].y - this.ySize
        this.onPlatform = true
      }
    }
  }

  this.jump = function() {
    if (this.onPlatform) {
      this.thrust = -15
    }
  }

  this.movement = function(dir) {
    if (dir == 0 && this.xSpeed  > 0) {
      this.acc = -1
    } else if (dir == 0 && this.xSpeed < 0) {
      this.acc = +1
    } else {
      this.acc = dir
    }
  }
}
