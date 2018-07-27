function pipe() {
  this.gap = random(100, 350)
  this.top = random(100, height - this.gap - 200)
  this.bottom = this.top + this.gap

  this.x = width
  this.w = random(30, 80)
  this.xSpeed = -5

  this.r = random(0, 255)
  this.g = random(0, 255)
  this.b = random(0, 255)

  this.draw = function() {
    stroke(255 - this.r, 255 - this.g, 255 - this.b)
    fill(this.r, this.g, this.b)
    rect(this.x, 0 , this.w, this.top)
    rect(this.x, this.bottom, this.w, height - this.bottom)
  }

  this.move = function() {
    this.x += this.xSpeed
  }

  this.collision = function(aBird) {
    if (aBird.x < this.x || aBird.x > this.x + this.w) {
      return false
    } else if ((aBird.x >= this.x) && (aBird.x <= this.x + this.w) && (aBird.y > this.top) && (aBird.y < this.bottom)) {
      return false
    }
      return true
  }

}
