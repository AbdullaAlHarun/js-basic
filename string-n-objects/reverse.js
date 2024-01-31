const sentence = "I am Learning Web Dev";

let reverse = ' '
for (const letter of sentence){
    console.log(letter);
}

const reversed = sentence.split('').reverse().join(' ');
console.log(reversed)
