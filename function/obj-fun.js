function hello(){

    console.log("before return");
    return 'hello';
    console.log("after return");
}

console.log(hello());

// return stop the exucution of functiom imidietly ! 

function inchToFeet (inch){
    const feet = inch / 12; 
    return feet;
}

function inchToFeet2 (inch){
    const feetFraction = inch / 12; 
    const feetNumber = parseInt(feetFraction)
    const inchReaming = inch %12;
    const result = feetNumber + 'ft' + inchReaming + 'inch';
    return result;
} 

const shuvoHeight = inchToFeet(75);

const shuvoHeight2 = inchToFeet(75);

console.log(shuvoHeight2)


//mile to kilometer

function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

//kilo to mile
function kiloMeterToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
