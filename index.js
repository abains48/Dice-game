
var randomNumber1 = Math.random();
var playerOneNumber = Math.floor(randomNumber1 * 6) + 1;
var displayedImage1 = "images/dice" + playerOneNumber + ".png"

var randomNumber2 = Math.random();
var playerTwoNumber = Math.floor(randomNumber2 * 6) + 1;
var displayedImage2 = "images/dice" + playerTwoNumber + ".png"

document.querySelector(".img1").setAttribute("src",displayedImage1);
document.querySelector(".img2").setAttribute("src",displayedImage2);

function winnerDeterminer(num1,num2) {
  if (num1 > num2) {
    return "Player 1 wins!";
  } else if (num2 > num1) {
    return "Player 2 wins!";
  } else {
    return "Match drawn!"
  }
}

document.querySelector(".heading").textContent = winnerDeterminer(playerOneNumber,playerTwoNumber);
