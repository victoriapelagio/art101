// Author: Victoria Pelagio
// Lab 6: Arrays and Objects
// ART 101
//APRIL 28 2024

// Define Varibales
let myTransport = ["car", "bus", "feet", "bike"]

// create an object for my main ride
myMainRide = {
  make: "Toyota",
 model: "Le",
 color: "white",
 year: 2009,
}

//output:
document.writeln("Getting around: " + myTransport + "<br>");
// output object:
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    


// let's get this party started
main();
