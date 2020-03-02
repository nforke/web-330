/*
===========================================
;Title: Assignment 2.2
;Author: Professor Krasso
;Date: 28 February 2020
;Modified By: Nicole Forke
;Description: Prototypes
===========================================
*/

var header = require("../forke-header.js");
console.log(header.display("Nicole", "Forke", "Assignment 2.2"));

console.log("");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//create object literal
var person = {
  getAge: function() {
    return this.age;
  }
};

//instantiate an object
var melissa = Object.create(person, {
  "age":
  {
    "value": "30"
  },
  "fullname":
  {
    "value": "Melissa Smith"
  }
});

//call getAge function
console.log(melissa.getAge());

//output
console.log("The person's full name is: '%s.'", melissa.fullname);
console.log("The person's age is: '%s.'", melissa.age);

// end program
