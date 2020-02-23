/*
======================================
;Title: Assignment 1.3
;Author: Professor Krasso
;Date: 22 February 2020
;Modified By: Nicole Forke
;Description: Function Classes
======================================
*/

var header = require("../forke-header.js");
console.log(header.display("Nicole", "Forke", "Assignment 1.3"));

//create new line
console.log("");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

//function to create object
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  //get price function
  this.getPrice = function() {
    return this.price;
  };

  //get model function
  this.getModel = function() {
    return this.model;
  };

  //get details function
  this.getDetails= function() {
    return "Manufactuer: " + this.manufacturer + "\nModel: " + this.getModel() +
    "\nColor: " + this.color + "\nPrice: " + this.getPrice();
  }
  };

  //variable to instantiate the cell phone object
  var cellPhone = new CellPhone("Samsung", "Galaxy S10+", "Blue", "$599.99");

  //output
  console.log(cellPhone.getDetails());

// end program
