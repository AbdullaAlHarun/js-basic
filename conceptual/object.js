// const name = "Minu";
// const age = 2;
// const isMale = true;
// const food = "finsh";
// const color = "white";
// const species = "Hulo Biral"

const myCat = {
    name: "Minu",
    age: 2,
    isMale: true,
    food: "fish",
    color: "white",
    species: "Hulo Biral"
}

// do notetion 
// console.log(myCat.color);
console.log(myCat.age);

// [] backet notetion 

const catFood = myCat["food"];
console.log(catFood);

myCat.color = "Black";

myCat.sound = "halum halum";


delete myCat["age"];

console.log(myCat);