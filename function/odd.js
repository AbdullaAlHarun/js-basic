function oddAverage (numbers){
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(number);
        }
    }
}

const numbers = [42, 13,58, 65, 81];
const avg = oddAverage(numbers);