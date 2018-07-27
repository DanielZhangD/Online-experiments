function Platform(x, y, xSize, ySize, aColor, sinking, levitating, scrolling, moving) {
  this.x = x
  this.y = y
  this.xSize = xSize
  this.ySize = ySize
  this.aColor = aColor
  this.sinking = sinking
  this.levitating = levitating
  this.moving = moving

  this.draw = function() {
    fill(this.aColor)
    stroke(this.aColor)
    rect(this.x, this.y, this.xSize, this.ySize)
  }

}
