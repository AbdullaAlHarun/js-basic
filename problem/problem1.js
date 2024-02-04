function cubeNumber(number){
if(typeof number !== 'number'){
    return "Please provide a valid number "
}

    const result = Math.pow(number, 3)

    return result;
}

console.log(cubeNumber(3));
//console.log(cubeNumber("theee"));