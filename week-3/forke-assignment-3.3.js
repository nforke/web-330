/*
===========================================
;Title: Assignment 3.2
;Author: Professor Krasso
;Date: 06 March 2020
;Modified By: Nicole Forke
;Description: The Factory Pattern
===========================================
*/

var header = require("../forke-header.js");
console.log(header.display("Nicole", "Forke", "Assignment 3.3"));

console.log("");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
//declare database
var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

//create database function and call the databases to see if they match
function databaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  console.log("Same database instance? %s ", oracle === postgres);
}

//output the database function
databaseSingletonTest();


// end program
