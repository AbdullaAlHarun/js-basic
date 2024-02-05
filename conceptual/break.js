const nums = [23, 43, 2, 5, 345, 203, 4];

//Break 
// for (let items of nums) {
//     console.log(items);

//     if (items === 5){
//         break;
//     }
// }


//Conteniue 

for (const items of nums) {

    if (items % 2 === 0){
        continue;
    }
    console.log(items);
}

