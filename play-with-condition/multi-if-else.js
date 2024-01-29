const age = 50; 
const price = 500;

if (age <= 12 ) {
    console.log("you can eat free");
} else if (age >= 60) {
    console.log(price * 50 / 100);
} else if (age == 50) {
    console.log(price * 40 / 100);
} else 
console.log("You have to pay 100%")

// Nasted If else !! 
const money =  12 ;

if (money > 500){
    console.log("you are reach!!");
}else {
    if (money > 200){
        console.log("tui gorib o na abar boror lok o na!!")
    } else if (money > 100) {
        console.log("tui almost gorib!");
    } else {
        console.log("tui hala jonmer fokira!");
    }
}
