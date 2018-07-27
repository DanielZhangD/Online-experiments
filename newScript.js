var isPressed = false

var clicked = [[false, false, false],
              [false, false, false],
              [false, false, false]]

var xClicked = [[false, false, false],
              [false, false, false],
              [false, false, false]]

var yClicked = [[false, false, false],
              [false, false, false],
              [false, false, false]]

var playerTurn = 1;

var winner = false;

function drawLine(line1, line2) {
  xClicked[line1][line2] = true;
  line(width / 3 * line1, height / 3 * line2, width / 3 * (line1 + 1), height / 3 * (line2 + 1))
  line(width / 3 * (line1 + 1), height / 3 * line2, width / 3 * line1, height / 3 * (line2 + 1))
}

function drawTheCircle(line1, line2) {
  yClicked [line1][line2] = true;
  fill(226, 131, 255)
  ellipse(width / 6 * (line1 * 2 + 1), height / 6 * (line2 * 2 + 1), 150, 150);
}

function setup() {
  createCanvas(800, 600)
  background(104, 191, 242)
}

function resetTheGame() {
  alert("game reset");
  playerTurn = 1;
  winner = false;
  isPressed = false;
  background(104, 191, 242)
  strokeWeight(5)
  line(width/3, height, width/3, 0)
  line(2*width/3, height, 2*width/3, 0)
  line(width, height/3, 0, height/3)
  line(width, 2*height/3, 0, 2*height/3)
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      xClicked[i][j] = false;
      yClicked[i][j] = false;
      clicked[i][j] = false;
    }
  }
}

function mousePressed() {
  isPressed = true;
  mouseTurn = 0;
  strokeWeight(5)
  if (!winner) {
    if (mouseX < width / 3 && mouseX > 0 && mouseY < height / 3 && mouseY > 0) {
      if (!clicked[0] [0]) {
        console.log("HIIII");
        if (playerTurn % 2 != 0) {
          drawLine(0, 0)
        } else {
          drawTheCircle(0, 0);
        }
        clicked[0] [0] = true;
        playerTurn++
      }
    } else if (mouseX < 2 * width / 3 && mouseX > width / 3 && mouseY < height / 3 && mouseY > 0) {
      if(!clicked[1] [0]){
        console.log("2")
        if (playerTurn % 2 != 0) {
          drawLine(1, 0)
        } else {
          drawTheCircle(1, 0);
        }
        clicked[1] [0] = true;
        playerTurn++;
      }
    } else if (mouseX < width && mouseX > 2 * width / 3 && mouseY < height / 3 && mouseY > 0) {
      console.log("3")
      if (!clicked[2] [0]) {
        if (playerTurn % 2 != 0) {
          drawLine(2, 0)
        } else {
          drawTheCircle(2, 0);
        }
        clicked[2] [0] = true;
        playerTurn++
      }
    } else if (mouseX < width / 3 && mouseX > 0 && mouseY < 2 * height / 3 && mouseY > height / 3) {
      console.log("4")
      if (!clicked[0] [1]){
        if (playerTurn % 2 != 0) {
          drawLine(0, 1)
        } else {
          drawTheCircle(0, 1);
        }
        clicked[0][1] = true;
        playerTurn++
      }
    } else if (mouseX < 2 * width / 3 && mouseX > width / 3 && mouseY < 2 * height / 3 && mouseY > height / 3) {
      console.log("5")
      if (!clicked[1][1]) {
        if (playerTurn % 2 != 0) {
          drawLine(1, 1)
        } else {
          drawTheCircle(1, 1);
        }
        clicked[1][1] = true;
        playerTurn++
      }
    } else if (mouseX < width && mouseX > 2 * width / 3 && mouseY < 2 * height / 3 && mouseY > height / 3) {
      console.log("6")
      if (!clicked[2][1]){
        if (playerTurn % 2 != 0) {
          drawLine(2, 1)
        } else {
          drawTheCircle(2, 1);
        }
        clicked[2][1] = true;
        playerTurn++
      }
    } else if (mouseX < width / 3 && mouseX > 0 && mouseY > 2 * height / 3 && mouseY < height) {
      console.log("7")
      if (!clicked[0][2]){
        if (playerTurn % 2 != 0) {
          drawLine(0, 2)
        } else {
          drawTheCircle(0, 2);
        }
        clicked[0][2] = true;
        playerTurn++
      }
    } else if (mouseX < 2 * width / 3 && mouseX > width / 3 && mouseY > 2 * height / 3 && mouseY < height) {
      console.log("8")
      if (!clicked[1][2]){
        if (playerTurn % 2 != 0) {
          drawLine(1, 2)
        } else {
          drawTheCircle(1, 2);
        }
        clicked[1][2] = true;
        playerTurn++
      }
    } else if (mouseX < width && mouseX > 2 * width / 3 && mouseY > 2 * height / 3 && mouseY < height) {
      console.log("9");
      if (!clicked[2][2]) {
        if (playerTurn % 2 != 0) {
          drawLine(2, 2)
        } else {
          drawTheCircle(2, 2);
        }
        clicked[2][2] = true;
        playerTurn++
      }
    }
  }
}

function mouseReleased() {
  isPressed = false
}


function draw() {
  strokeWeight(5)
  line(width/3, height, width/3, 0)
  line(2*width/3, height, 2*width/3, 0)
  line(width, height/3, 0, height/3)
  line(width, 2*height/3, 0, 2*height/3)


  if (!winner) {
    for (var i = 0; i < 3; i++) {
      if (xClicked[i][0] == true && xClicked [i][1] == true && xClicked[i][2] == true) {
        console.log("Crosses have Won!")
        alert("Crosses have won!")
        winner = true;
        break
      }
      if (yClicked[i][0] == true && yClicked [i][1] == true && yClicked[i][2] == true) {
        console.log("Circles have Won!")
        alert("Circles have won!")
        winner = true;
        break
      }
    }

    for (var i = 0; i < 3; i++) {
      if (xClicked[0][i] == true && xClicked [1][i] == true && xClicked[2][i] == true) {
        console.log("Crosses have Won!")
        alert("Crosses have won!")
        winner = true;
        break
      }
      if (yClicked[0][i] == true && yClicked [1][i] == true && yClicked[2][i] == true) {
        console.log("Circles have Won!")
        alert("Circles have won!")
        winner = true;
        break
      }
    }

    if (xClicked[0][0] && xClicked[1][1] && xClicked[2][2]) {
      console.log("Crosses have won!")
      alert("Crosses have won!")
      winner = true;
    } else if (xClicked[2][0] && xClicked[1][1] && xClicked[0][2]) {
      console.log("Crosses have Won!")
      alert("Crosses have won!")
      winner = true;
    }

    if (yClicked[0][0] && yClicked[1][1] && yClicked[2][2]) {
      console.log("Circles have won!")
      alert("Circles have won!")
      winner = true;
    } else if (yClicked[2][0] && yClicked[1][1] && yClicked[0][2]) {
      console.log("Circles have Won!")
      alert("Circles have won!")
      winner = true;
    }

    if (playerTurn == 10 && !winner) {
      playerTurn++
      alert("No winners, only losers ):")
    }
  }

  //background(12, 30, 204)
  /*
  if (!isPressed) {
    background(65, 205, 244)
  } else {
    background(187, 65, 244)
  }

  stroke(255, 0, 0)
  strokeWeight(1)
  line(0, 0, width/2, height/2)

  stroke(0, 255, 0)
  strokeWeight(5)
  line(width/2, height/2, width, 0)

  stroke(244, 66, 66)
  strokeWeight(10)
  fill(83, 244, 65)
  ellipse(mouseX, mouseY, 55, 55)
  */
}
