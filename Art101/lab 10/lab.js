/*
// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author:Victoria Pelagio 
// Date:5/16/2024

$("#My-button").append("<button id='my-button'>name button</button>");


$(document).on('click', '#My-button', functinon(){
    var name = prompt("name please: ");
    $('#title').html("Hello " + name)
});

