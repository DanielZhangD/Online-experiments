function Weapon(spray, fireRate, x, y) {
  this.spray = spray
  this.fireRate = fireRate
  this.x = x
  this.y = y
  this.liveBullets = []
  this.fire = function() {
    this.liveBullets.push(new Projectile(this.x, this.y))
  }
  this.draw = function() {
    for (var i = 0; i < this.liveBullets.length; i++) {
      this.liveBullets[i].draw()
    }
  }

  this.update = function(player) {
    for (var i = 0; i < this.liveBullets.length; i++) {
        this.liveBullets[i].update()
    }
    if (this.liveBullets.x < 0) {
      this.liveBullets.shift()
    }
    this.x += player.xSpeed
    this.y += player.ySpeed
  }

}
