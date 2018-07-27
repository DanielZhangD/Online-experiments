/*
var myVar

console.log("Oh hi mark")
myVar = "5"
console.log(myVar);
*/
/*
var x = 4,
    y = 8

if (x > y) {
  console.log('hallo, x > y')
} else if (x < y) {
  console.log('hoi, y > x')
} else if (x == y) {
  console.log("You're tearing me apart lisa");
}
*/
//this function takes two numbers and outsputs the sum to console

/*
function addMe(number1, number2) {
  console.log("result is: " + (number1 + number2))
}
addMe(3, 7)
*/
//outputs to console all ints between startVal and endVal
function iterate(startVal, endVal) {
  /*
  for (var i = startVal; i <= endVal; i++) {
    console.log(i);
  }*/
  var i = startVal
  while (i <= endVal) {
    console.log(i);
    i++;
  }
}
