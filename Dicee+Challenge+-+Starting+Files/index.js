var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // Form the image file name
var randomImageSource = "images/" + randomDiceImage; // Form the image source path
var image1 = document.querySelectorAll("img")[0]; // Select the first image element
image1.setAttribute("src", randomImageSource); // Set the source attribute of the first image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number for player 2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // Form the image source path for player 2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // Set the source attribute of the second image

// Determine the winner or if it's a draw
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
