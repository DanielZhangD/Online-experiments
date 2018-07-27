function Fruit() {
  this.fruitMade = false

  this.createFruit = function() {
    if (this.fruitMade == false) {
      this.fruitMade = true
      this.xFruitLocation = Math.round(Math.random() * 59) * 10
      this.yFruitLocation = Math.round(Math.random() * 59) * 10
      console.log(this.xFruitLocation)
      console.log(this.yFruitLocation)
    }
    fill(255, 255, 255)
    rect(this.xFruitLocation, this.yFruitLocation,  movingSnake.segmentLength, movingSnake.segmentLength)
  }


}
