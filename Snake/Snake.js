var movingSnake,
    newFruit

function setup() {
  createCanvas(600, 600)
  background(0, 0, 0)
  movingSnake = new snake()
  newFruit = new Fruit()
}

function draw() {
  background(0, 0, 0)
  if (movingSnake.alive) {
    movingSnake.move()
    newFruit.createFruit()
    movingSnake.eatFruit(newFruit)
  }
  movingSnake.draw()
  movingSnake.collide()
  movingSnake.selfCollision()
  frameRate(25)

}
