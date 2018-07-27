function snake() {
  this.xSnake = [320, 310, 300, 290, 280]
  this.ySnake = [300, 300, 300, 300, 300]
  this.segmentLength = 10
  this.length = 5
  this.previousDirection = 0
  this.alive = true;
  this.firstTurn = true;

  this.draw = function() {
    for (var i = 0; i < this.length; i++) {
      fill(255, 255, 255)
      rect(this.xSnake[i], this.ySnake[i], this.segmentLength, this.segmentLength)
    }
  }
  //MOVEMENT FUNCTION
  this.move = function() {
    for (var i = this.length - 1; i >= 0; i--) {
      if (keyCode == DOWN_ARROW && this.previousDirection != 38)  {
        this.firstTurn = false
        console.log(keyCode)
        this.previousDirection = keyCode
        if (i != 0) {
          this.xSnake[i] = this.xSnake[i - 1]
          this.ySnake[i] = this.ySnake[i - 1]
        } else {
          this.ySnake[i] = this.ySnake[i] + this.segmentLength
        }
      } else if (keyCode == UP_ARROW && this.previousDirection != 40) {
        this.firstTurn = false
        if (i != 0) {
          console.log(keyCode)
          this.previousDirection = keyCode
          this.xSnake[i] = this.xSnake[i - 1]
          this.ySnake[i] = this.ySnake[i - 1]
        } else {
          this.ySnake[i] = this.ySnake[i] - this.segmentLength
        }
      } else if (keyCode == RIGHT_ARROW && this.previousDirection != 37) {
        this.firstTurn = false
        if (i != 0) {
          console.log(keyCode)
          this.previousDirection = keyCode
          this.xSnake[i] = this.xSnake[i - 1]
          this.ySnake[i] = this.ySnake[i - 1]
        } else {
          this.xSnake[i] = this.xSnake[i] + this.segmentLength
        }
      } else if (keyCode == LEFT_ARROW && this.previousDirection != 39 && this.firstTurn != true) {
        this.firstTurn = false
        if (i != 0) {
          console.log(keyCode)
          this.previousDirection = keyCode
          this.xSnake[i] = this.xSnake[i - 1]
          this.ySnake[i] = this.ySnake[i - 1]
        } else {
          this.xSnake[i] = this.xSnake[i] - this.segmentLength
        }
      } else {
        keyCode = this.previousDirection
      }
    }
  }

  this.collide = function() {
    this.selfCollision()
    if ((this.xSnake[0]>= 600) || (this.xSnake[0]<= 0) ||
          (this.ySnake[0]>= 600) || (this.ySnake[0]<= 0)) {
      this.alive = false
      console.log("youded")
    }
  }

  this.selfCollision = function() {
    for (var i = 1; i < this.length; i++) {
      if (this.xSnake[0] == this.xSnake[i] && this.ySnake[0] == this.ySnake[i]) {
        this.alive = false
        console.log("youCommittedSudokus")
      }
    }
  }

  this.eatFruit = function(fruit) {
    if ((this.xSnake[0] == fruit.xFruitLocation) &&
        this.ySnake[0] == fruit.yFruitLocation) {
        fruit.fruitMade = false;
        this.xSnake.push(this.xSnake[this.length - 1] +
          (this.xSnake[this.length - 2] - this.xSnake[this.length - 1]))
        this.ySnake.push(this.ySnake[this.ySnake.length - 1] +
          (this.ySnake[this.length - 2] - this.ySnake[this.length - 1]))
        this.length += 1
    }
  }
}
