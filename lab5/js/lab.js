//index.js - to utilize jQuery to make a special button
//Author: Victoria Pelagio <vpelagio@ucsc.edu>
// Date: April 25, 2024
// ART 101 Lab 5

$(#My-button").append("<button id='my-button'>name button</button>");


$(document).on("click", '#My-button', function(){
    var name = prompt("name please: ")
    $('#title').html("Hello"+name)
});





