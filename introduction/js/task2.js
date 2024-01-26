// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics,
// and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

let mathematics = 75.25; 
let biology = 65;
let chemistry = 80; 
let physics = 35.45;
let bangla = 99.50;

const  totalMark = mathematics + biology + chemistry + physics +bangla;
console.log(totalMark); // totalMark = 355.2 

const totalSubject = 5; 

const averageMark = totalMark / totalSubject;
console.log(averageMark);

let finalAverageMark = averageMark.toFixed(2);
console.log(finalAverageMark);

// Fianl answer is 71.04
