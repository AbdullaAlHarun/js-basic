//1. write function

document.write("Name: Abdulla Al Harun Mehedi <br>");
document.write("Phone: +47 000000 <br>");
document.write("Adress: Teppavien 9");


// ###----DATA TYPE----###
//string 
let greeting ="Hello World";
console.log(typeof greeting);

//number data type 
let numberData = 888;
console.log(typeof numberData);

//bollean data type
let isHappy = true;
console.log(typeof isHappy);

// Variables 
// Variable name should follow 
// 1) letter
// 2) number 
// _ 
// $ 
const myName = "abdulla"
const myAge = 31;
console.log(myName);
console.log(myAge);

// Number Method 
// number convert by strings
var num = 44;
num = toString(num); // number convert by strings
console.log(typeof num);

//string converted by intiger 
var num2 = "22";
num2 = parseInt(num);
console.log(typeof num2);


//string converted by intiger (decimel / .)
var num3 = "11.11";
num3 = parseFloat(num3);
console.log(typeof num3);

var number = 8.9777

// toFixed means after . how many number can take! 
console.log(number.toFixed(2));

//how to add or concatenate strings
document.write("mehedi" + " hasan" + " Abdulla");

var firstName = " Abdulla Al ";
var lastName = "Harun Mehedi";
var fullName = firstName + lastName ;

console.log("My name is" + fullName);

var myFullName = "Abdulla Al Harun Mehedi";
document.write(myFullName+ " is my Name");


var num5 = 20;
var num6 = 20;
document.write("num5 = " + num5 + "and num6 =" + num6);

// tutorial 8 : Library functions for string

var text = "Bangladesh";
var len = text.length;

console.log("Number of character: " + len);

//var text2 = prompt("Enter Your name : ");

var text3 ="Bangladesh";
document.write(text.charAt(2));


