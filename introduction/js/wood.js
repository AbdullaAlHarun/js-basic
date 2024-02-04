function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(1,  1, 4);
console.log("Wood Needed: ", wood)

const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

function getMin(numbers){
let min = numbers[0];

    for (const num of numbers) {
         if (num < min) {
            min = num;
         }
    }
    return min;
}

const chep = getMin(prices);
console.log("Chepest one is: ", chep);