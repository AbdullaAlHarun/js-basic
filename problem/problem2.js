function matchFinder (strin1, string2){
if (typeof strin1 !== 'string' || typeof string2 !== 'string'){
    return "Please input a string!"
}

    const result = strin1.includes(string2);
    return result;
}

console.log(matchFinder([2,3,4,5], "hon"));
console.log(matchFinder("Abdulla Harun", "Ehan"));