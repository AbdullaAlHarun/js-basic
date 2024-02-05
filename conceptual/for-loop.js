// // Example 1 : 

// for (let i = 1; i <=10; i++){
//     console.log("Abdulla!")
// } 

// // Example 2 
// for (let i = 1; i <= 100; i++){
//     console.log("Sorry!!.........!!")
// }

// Example : 3 

const nums = [23, 43, 2, 5,345,203,2];

let sumOfOdd = 0;
let sumOfEven = 0;

for(let i =0; i < nums.length; i++){
    const x = nums[i];

    if (x%2 === 1){
        sumOfOdd += x;
    }else {
        sumOfEven += x;  
    }
}

console.log(sumOfEven);
console.log(sumOfOdd);

//for 0f loop
const num = [23, 43, 2, 5,345,203,2];
for (let item of num) {
    console.log(item);
}
