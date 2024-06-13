"use strict";
/*else block.
Q27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
If the alien is green, print a message that the player earned 5 points.
If the alien is yellow, print a message that the player earned 10 points.
If the alien is red, print a message that the player earned 15 points.
Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//If the alien is green, print a message that the player earned 5 points.
//VERSION 
let alian_colour = "Green";
if (alian_colour == "Green") {
    console.log(" the player earned 5 points .");
}
//If the alien is yellow, print a message that the player earned 10 points.
else if (alian_colour == "Yellow") {
    console.log(" the player just earned 10 points .");
}
//If the alien is red, print a message that the player earned 15 points.
else if (alian_colour == "Red") {
    console.log(" the player just earned 15 points .");
}
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
else {
    console.log("Please select right colour");
}
// VERSION 2
alian_colour = "Red";
if (alian_colour == "Green") {
    console.log(" the player earned 5 points .");
}
else if (alian_colour == "Yellow") {
    console.log(" the player just earned 10 points .");
}
else if (alian_colour == "Red") {
    console.log(" the player just earned 15 points .");
}
else {
    console.log("Please select right colour");
}
// 3rd version
alian_colour = "Yellow";
if (alian_colour == " Green") {
    console.log(" the player earned 5 points .");
}
else if (alian_colour == "Yellow") {
    console.log(" the player just earned 10 points .");
}
else if (alian_colour == " Red") {
    console.log(" the player just earned 15 points .");
}
else {
    console.log("Please select right colour");
}
