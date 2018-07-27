function bird() {
  this.x = 80
  this.y = height / 2
  this.size = 40

  this.lift = 0
  this.gravity = 0.5
  this.ySpeed = 0

  this.draw = function() {
    fill(229, 55, 6)
    ellipse(this.x, this.y, this.size)
  }

  this.fly = function() {
    this.ySpeed += this.lift + this.gravity
    this.y += this.ySpeed
    this.lift = 0
    if (this.y < this.size / 2) {
      this.ySpeed = 0
      this.y = this.size / 2
    } else if (this.y > height- this.size / 2) {
      this.ySpeed = 0
      this.y = height - this.size / 2
    }
  }

  this.flap = function() {
    if (this.ySpeed >= -12) {
      this.lift = -10
    }
  }
}
