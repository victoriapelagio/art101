//index.js - purpose and description here
//Author: Victoria Pelagio
//Date: June 8th

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do elusmod tempor incididunt ut labore et dolore magna alique. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboric nisi ut aliquip ex ea commodo consequat. ";
    const min = 3;
    const max = 100;
    const randlem = Math.floor(Math.random() * (text.length - randLen + 1));

    // Get a random starting index to slice the lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

    //Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randlen);
}
// click listener for button
$("make-convo").click(function(){

//get new fake dialogue
const newText = generateRandomText(); 

//append a new div to our output div
$("output").append('div class="text"><p>' + newText + '</p></div');
});
