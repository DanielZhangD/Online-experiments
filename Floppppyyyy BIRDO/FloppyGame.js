
var myFrameRate = 30,
    timeIncrement = 1 / myFrameRate,
    currentTime = 0,
    score = 0,
    flooppyBard,
    pipes = []

function setup() {
  createCanvas(900, 750)
  flooppyBard = new bird()
}

function keyPressed() {
  if (keyCode == "32"){
    flooppyBard.flap()
  }
}

function pipeWork() {
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].draw()
    pipes[i].move()
    pipes[i].collision(flooppyBard)
  }
}

function displayScoreTime() {
  textSize(32)
  text("Score: " + score, width - 180, 60)
  text("Time: " + currentTime, width - 180, 120)

}

function draw() {
  frameRate(myFrameRate)
  currentTime += timeIncrement
  if (frameCount % (2 * myFrameRate) == 0) {
    pipes.push(new pipe())
  }
  background(82, 219, 255)
  pipeWork()
  displayScoreTime()
  flooppyBard.draw()
  flooppyBard.fly()
}
