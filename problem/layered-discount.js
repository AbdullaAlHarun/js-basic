/**
 * first100 -->100
 * 100to200 -->90
 * above200 -->70
 */

function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    } else if (quantity <=200){
        const first100Total = 100* first100Price;
        const remaningQuantity = quantity -100;
        const remaningTotal = remaningQuantity * second100Price;
        const total  = first100Total + remaningTotal;
    } else {
        const first100Total = 100* first100Price;
        const second100Total = 100 * second100Price;
        const remaningQuantity = quantity - 200;
        const remaningTotal = remaningQuantity * above200Price;
        const total = first100Total + second100Total + remaningTotal;
        return total;

    }

}

const total =layeredDiscountedTotal(5);
console.log("final price ",total);
