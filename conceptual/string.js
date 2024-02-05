
// toLowerCase 
const x = "hello";
const y = "hEllo";

if (x.toLowerCase == y.toLowerCase){
    console.log("Both are same");
} else 
{
    console.log("They are different!")
}

const a = "Hello World";
const b = "hello";

// console.log(x.includes(y));
console.log(x.toLowerCase().includes(y.toLowerCase()));

const aa = "hello";
const bb = " hello "

if (aa === bb.trim()){
    console.log("Both are same");
} else 
{
    console.log("They are different!")
}


//array Method 

const arrayMethod = "My name is abdulla al harun"

const words = arrayMethod.split(" ");

console.log(words)

const arrayMethodJoin = words.join("__");
console.log(arrayMethodJoin)
