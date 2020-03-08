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
console.log(header.display("Nicole", "Forke", "Assignment 3.2"));

console.log("");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
//database classes with default values
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Oracle(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "selfie";
  this.server = properties.server || "localhost:5454";
  this.version = properties.version || "8.1";
}

function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "sweet";
  this.server = properties.server || "localhost:3030";
}

function DatabaseFactory() {}

//create database class
DatabaseFactory.prototype.databaseClass = MySql;

//method to check database class
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

//create database factory objects
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "selfie"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "sweet"
});

//output the results
console.log(oracle);

console.log(informix);
// end program
