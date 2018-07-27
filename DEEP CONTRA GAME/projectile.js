function Projectile(x , y) {
  this.x = x
  this.y = y
  this.radius = 10
  this.speed = 10

  this.draw = function() {
    fill(21, 8, 69)
    stroke(21, 8, 69)
    ellipse(this.x, this.y, this.radius, this.radius)
  }

  this.update = function() {
    this.x += this.speed
    if (this.x >= 1000) {
      this.x = -10000
      this.y = -10000
      this.speed = 0
    }
  }
}
