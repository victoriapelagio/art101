/*
// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author:Victoria Pelagio 
// Date:5/16/2024

$("#My-button").append("<button id='my-button'>name button</button>");


$(document).on('click', '#My-button', function(){
    var name = prompt("name please: ");
    $('#title').html("Hello " + name)
});

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ukkamci laboris nisi ut
    aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max-min + 1)) + min;
    //Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math,random() * (text.length - randlen + 1));
    //Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

//click listener for button
$("#My-button").click(function(){
});

//const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ukkamci laboris nisi ut
    aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max-min + 1)) + min;
    //Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math,random() * (text.length - randlen + 1));
    //Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);

    const newText = generateRandomText();

    //apend a new div to our output div
    $("#output").append('<div class="text"><p>') + newText + '</p></div>');
