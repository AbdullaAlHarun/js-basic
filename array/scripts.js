const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length); //array length

console.log(numbers[2]);

numbers[1] = 9999;
console.log(numbers); // change the value 

numbers.push(44);
console.log(numbers); // add data 

const friends = ["balam", "kalam", "salam", "khailam"]
friends.pop();
console.log(friends); // remove last data 

friends.shift();
console.log(friends); // remove from beganning 

friends.unshift("khailam"); // add from beganning 
console.log(friends);

console.log(friends.length);

console.log(friends.includes("salam"));

if (friends.includes("rahim")){
    console.log("khela hobe!!!");
}else {
    console.log("Ghumabo!!!")
}