function sortMaker(arr){
    const [a,b] = arr;

    if(a < 0 || b < 0){
        return 'Invalid Input';
    } 
    
    if ( a == b){
        return 'equale'
    } 

    if ( a > b) {
        return [a,b];
    } else {
        return [b,a]
    }
}

console.log(sortMaker([2, 3])); 
console.log(sortMaker([4, 2])); 
console.log(sortMaker([4, 4])); 
console.log(sortMaker([1, 2])); 
console.log(sortMaker([4, 2])); 
