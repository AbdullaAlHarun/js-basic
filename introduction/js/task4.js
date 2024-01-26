// Task-4
// What will be the result of the following codes:
// var a = isNaN(‘11’);
// var a = isNaN(2-10);

// Explain your answers.

var b = isNaN('11');

console.log(b); // false 

// explanination: 
// In this line, isNaN stands for "is Not a Number." 
// It checks if the provided value can be converted to a valid number.
// The argument here is the string '11'. However, since isNaN attempts to convert the argument to a number, 
// and '11' is a valid representation of the number 11, the result will be false.

var a = isNaN(2-10); 

console.log(a); // false 

// explenation::
// In this line, 2 - 10 results in -8. Again, isNaN tries to convert this result to a number,
//  and since -8 is a valid number, the result will be false. So, after this line, the value of a will be false.
