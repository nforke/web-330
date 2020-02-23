/*
===========================================
;Title: Assignment 1.4
;Author: Professor Krasso
;Date: 22 February 2020
;Modified By: Nicole Forke
;Description: Duck Typing, A.K.A Interfaces
===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

//header
var header = require("../forke-header.js");
console.log(header.display("Nicole", "Forke", "Assignment 1.4"));

console.log("");

// start program

//functions to create objects
function Car(model) {
  this.model = model;
};

//create prototype method
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};

function Truck(model, year) {
  this.model = model;
  this.year = year;
};

//create prototype method
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack");
};

function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
};

//create prototype method
Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack");
};

//array to receive vehicles
var raceTrack = [];

//push vehicles to the raceTrack array
function driveIt(vehicle) {
  vehicle.start();
  raceTrack.push(vehicle);
};

//instantiate vehicle objects
var ford = new Car("Escort");
var chevy = new Truck("Silverado", "2020");
var wrangler = new Jeep("Wrangler", "2020", "Yellow");

//function to pass in variables
driveIt(ford);
driveIt(chevy);
driveIt(wrangler);

//output
console.log("\n-- The following vehicles have been added to the racetrack! --");

for(var x = 0; x < raceTrack.length; x++){
  console.log(raceTrack[x].constructor.name + ": " + raceTrack[x].model);
};

// end program
